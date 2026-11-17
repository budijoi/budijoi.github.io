import http.server
import socketserver
import urllib.parse
import urllib.request
import json
import re
import time
import subprocess
import os

PORT = 8080

STREAM_CACHE = {}
SEARCH_CACHE = {}
CHART_CACHE = {}
LYRICS_CACHE = {}
DAILY_PLAYLIST_CACHE = {}

AI_BLOCK_REGEX = re.compile(
    r'\b(ai\s*cover|ai\s*music|ai\s*generated|ai\s*song|suno|udio|made\s*with\s*ai|cover\s*ai|lagu\s*ai)\b',
    re.IGNORECASE
)

def is_ai_content(title, artist=""):
    combined = f"{title} {artist}"
    return bool(AI_BLOCK_REGEX.search(combined))

class MusicProxyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        query_params = urllib.parse.parse_qs(parsed.query)

        if parsed.path == '/api/stream':
            video_id = query_params.get('id', [''])[0].strip()
            fallback_query = query_params.get('q', [''])[0].strip()
            self.handle_stream(video_id, fallback_query)
            return

        if parsed.path == '/api/search':
            q = query_params.get('q', [''])[0].strip()
            self.handle_search(q)
            return

        if parsed.path == '/api/charts':
            period = query_params.get('period', ['daily'])[0].strip().lower()
            self.handle_charts(period)
            return

        if parsed.path == '/api/lyrics':
            title = query_params.get('title', [''])[0].strip()
            artist = query_params.get('artist', [''])[0].strip()
            self.handle_lyrics(title, artist)
            return

        if parsed.path == '/api/daily_playlists':
            self.handle_daily_playlists()
            return

        if parsed.path == '/' or parsed.path == '':
            self.path = '/index.html'

        return super().do_GET()

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def handle_stream(self, video_id, fallback_query=""):
        if not video_id and not fallback_query:
            self.send_json({'error': 'ID atau query lagu diperlukan'}, 400)
            return

        # Jika ID berupa placeholder chart_, cari ID asli YouTube terlebih dahulu
        if video_id.startswith('chart_') or not re.match(r'^[a-zA-Z0-9_-]{11}$', video_id):
            if fallback_query:
                found = self.search_youtube_raw(f"{fallback_query} official audio", limit=1)
                if found:
                    video_id = found[0]['id']

        if not re.match(r'^[a-zA-Z0-9_-]{11}$', video_id):
            self.send_json({'error': 'Video ID tidak ditemukan'}, 404)
            return

        now = time.time()
        if video_id in STREAM_CACHE:
            cached = STREAM_CACHE[video_id]
            if now - cached['timestamp'] < 3600:
                self.send_json({
                    'audioUrl': cached['url'],
                    'resolvedId': video_id,
                    'source': 'cache'
                })
                return

        yt_url = f"https://www.youtube.com/watch?v={video_id}"
        try:
            cmd = [
                'yt-dlp',
                '-f', 'bestaudio[ext=m4a]/bestaudio/best',
                '--get-url',
                '--no-playlist',
                '--no-warnings',
                yt_url
            ]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
            audio_url = result.stdout.strip().splitlines()[0] if result.returncode == 0 and result.stdout.strip() else ""

            if audio_url and audio_url.startswith('http'):
                STREAM_CACHE[video_id] = {'url': audio_url, 'timestamp': now}
                self.send_json({
                    'audioUrl': audio_url,
                    'resolvedId': video_id,
                    'source': 'yt-dlp'
                })
                return
        except Exception:
            pass

        self.send_json({'error': 'Gagal mengekstrak audio langsung, gunakan fallback embed', 'resolvedId': video_id}, 502)

    def search_youtube_raw(self, query, limit=15):
        items = []
        try:
            cmd = [
                'yt-dlp',
                f'ytsearch{limit}:{query}',
                '--dump-single-json',
                '--flat-playlist',
                '--no-warnings'
            ]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=20)
            if result.returncode == 0 and result.stdout.strip():
                data = json.loads(result.stdout)
                for entry in data.get('entries', []):
                    vid = entry.get('id', '')
                    title = entry.get('title', 'Unknown Title')
                    artist = entry.get('uploader') or entry.get('channel') or 'Musisi Asli'
                    duration = entry.get('duration') or 0
                    if vid and len(vid) == 11 and not is_ai_content(title, artist):
                        items.append({
                            'id': vid,
                            'title': title,
                            'artist': artist,
                            'duration': duration,
                            'source': 'YouTube Music'
                        })
        except Exception:
            pass
        return items

    def handle_search(self, query):
        if not query:
            self.send_json({'items': []})
            return

        cache_key = query.lower()
        now = time.time()
        if cache_key in SEARCH_CACHE and now - SEARCH_CACHE[cache_key]['timestamp'] < 1800:
            self.send_json({'items': SEARCH_CACHE[cache_key]['items']})
            return

        items = self.search_youtube_raw(f"{query} official audio", limit=18)
        SEARCH_CACHE[cache_key] = {'items': items, 'timestamp': now}
        self.send_json({'items': items})

    def handle_charts(self, period):
        now = time.time()
        if period in CHART_CACHE and now - CHART_CACHE[period]['timestamp'] < 3600:
            self.send_json({'period': period, 'items': CHART_CACHE[period]['items']})
            return

        period_queries = {
            'daily': 'top hits Indonesia dan Barat terbaru hari ini official audio',
            'weekly': 'top 50 Spotify Indonesia weekly chart official audio',
            'monthly': 'lagu pop terpopuler bulan ini Indonesia Barat official audio',
            'yearly': 'best songs of the year top hits official audio',
            'alltime': 'best songs of all time greatest hits official audio'
        }
        q = period_queries.get(period, period_queries['daily'])
        items = self.search_youtube_raw(q, limit=15)

        if items:
            CHART_CACHE[period] = {'items': items, 'timestamp': now}
        self.send_json({'period': period, 'items': items})

    def handle_lyrics(self, title, artist):
        if not title:
            self.send_json({'error': 'Judul lagu kosong'}, 400)
            return

        clean_title = re.sub(r'\(.*?\)|\[.*?\]|official\s*(music\s*)?video|official\s*audio|lyrics?|lirik', '', title, flags=re.IGNORECASE).strip()
        cache_key = f"{clean_title.lower()}|{artist.lower()}"
        if cache_key in LYRICS_CACHE:
            self.send_json(LYRICS_CACHE[cache_key])
            return

        try:
            q_params = urllib.parse.urlencode({'track_name': clean_title, 'artist_name': artist})
            url = f"https://lrclib.net/api/get?{q_params}"
            req = urllib.request.Request(url, headers={'User-Agent': 'MelodifyMusicPlayer/1.0'})
            with urllib.request.urlopen(req, timeout=8) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                payload = {
                    'syncedLyrics': data.get('syncedLyrics', ''),
                    'plainLyrics': data.get('plainLyrics', '')
                }
                LYRICS_CACHE[cache_key] = payload
                self.send_json(payload)
                return
        except Exception:
            pass

        # Fallback pencarian bebas di lrclib.net
        try:
            q_params = urllib.parse.urlencode({'q': f"{clean_title} {artist}".strip()})
            url = f"https://lrclib.net/api/search?{q_params}"
            req = urllib.request.Request(url, headers={'User-Agent': 'MelodifyMusicPlayer/1.0'})
            with urllib.request.urlopen(req, timeout=8) as resp:
                results = json.loads(resp.read().decode('utf-8'))
                if isinstance(results, list) and len(results) > 0:
                    first = results[0]
                    payload = {
                        'syncedLyrics': first.get('syncedLyrics', ''),
                        'plainLyrics': first.get('plainLyrics', '')
                    }
                    LYRICS_CACHE[cache_key] = payload
                    self.send_json(payload)
                    return
        except Exception:
            pass

        self.send_json({'syncedLyrics': '', 'plainLyrics': ''})

    def handle_daily_playlists(self):
        today_str = time.strftime('%Y-%m-%d')
        if today_str in DAILY_PLAYLIST_CACHE:
            self.send_json(DAILY_PLAYLIST_CACHE[today_str])
            return

        # Rotasi kata kunci berdasarkan hari dalam tahun agar 50 lagu berganti tiap hari
        day_seed = int(time.strftime('%j'))
        mood_variants = [
            "Indonesia & Barat Official Audio",
            "Top Hits Pop Akustik Official",
            "Terpopuler Spotify & YouTube Music Official",
            "Pilihan Terbaik Musisi Asli Official"
        ]
        variant = mood_variants[day_seed % len(mood_variants)]

        playlist_defs = [
            {
                'id': 'pagi',
                'title': 'Playlist Pagi',
                'desc': 'Lagu yg cocok menemani sarapan dan perjalanan',
                'color': '#f59e0b',
                'icon': 'fa-sun',
                'queries': [
                    f'lagu semangat pagi ceria sarapan {variant}',
                    f'morning acoustic upbeat feel good songs {variant}'
                ]
            },
            {
                'id': 'siang',
                'title': 'Playlist Siang',
                'desc': 'Lagu yang cocok menemani waktu istirahat dan makan siang',
                'color': '#10b981',
                'icon': 'fa-utensils',
                'queries': [
                    f'lagu pop santai istirahat makan siang {variant}',
                    f'chill pop cafe afternoon lunch vibes {variant}'
                ]
            },
            {
                'id': 'sore',
                'title': 'Playlist Sore',
                'desc': 'Lagu yang cocok menemani perjalanan pulang',
                'color': '#ea580c',
                'icon': 'fa-car-side',
                'queries': [
                    f'lagu teman perjalanan pulang sore senja {variant}',
                    f'sunset drive indie pop acoustic songs {variant}'
                ]
            },
            {
                'id': 'petang',
                'title': 'Playlist Petang',
                'desc': 'Lagu yang cocok menemani istirahat setelah beraktivitas',
                'color': '#8b5cf6',
                'icon': 'fa-couch',
                'queries': [
                    f'lagu akustik rileks istirahat malam hari {variant}',
                    f'relaxing evening acoustic R&B chill {variant}'
                ]
            },
            {
                'id': 'malam',
                'title': 'Playlist Malam',
                'desc': 'Lagu yang cocok untuk menemani saat tidur',
                'color': '#1d4ed8',
                'icon': 'fa-moon',
                'queries': [
                    f'lagu pengantar tidur tenang akustik piano {variant}',
                    f'sleep calm piano acoustic ballad songs {variant}'
                ]
            }
        ]

        playlists_result = []
        for pdef in playlist_defs:
            tracks = []
            seen_ids = set()
            for q in pdef['queries']:
                fetched = self.search_youtube_raw(q, limit=30)
                for t in fetched:
                    if t['id'] not in seen_ids:
                        seen_ids.add(t['id'])
                        tracks.append(t)
                    if len(tracks) >= 50:
                        break
                if len(tracks) >= 50:
                    break

            playlists_result.append({
                'id': pdef['id'],
                'title': pdef['title'],
                'desc': pdef['desc'],
                'color': pdef['color'],
                'icon': pdef['icon'],
                'date': today_str,
                'tracks': tracks[:50]
            })

        payload = {'date': today_str, 'playlists': playlists_result}
        DAILY_PLAYLIST_CACHE[today_str] = payload
        self.send_json(payload)

class ReusableTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)) or '.')
    with ReusableTCPServer(("", PORT), MusicProxyHandler) as httpd:
        print(f"=======================================================")
        print(f" Server Musik Bebas Iklan & Karaoke berjalan di:")
        print(f" -> http://localhost:{PORT}")
        print(f" Tekan Ctrl+C untuk menghentikan server.")
        print(f"=======================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer dihentikan.")