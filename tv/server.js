const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

function checkUrl(url) {
  return new Promise(resolve => {
    try {
      const u = new URL(url);
      const mod = u.protocol === 'https:' ? https : http;
      const req = mod.request(u.href, {
        method: 'HEAD',
        rejectUnauthorized: false,
        timeout: 5000,
        headers: { 'User-Agent': 'Mozilla/5.0' }
      }, r => { r.destroy(); resolve(r.statusCode === 200); });
      req.on('error', () => resolve(false));
      req.on('timeout', () => { req.destroy(); resolve(false); });
      req.end();
    } catch { resolve(false); }
  });
}

app.get('/api/channels', async (req, res) => {
  try {
    const manualRaw = [
      { id: 'transtv', name: 'Trans TV', country: 'Indonesia', type: 'youtube', streamUrl: 'https://www.youtube.com/@TRANSTV_Official/live' },
      { id: 'trans7', name: 'Trans 7', country: 'Indonesia', type: 'youtube', streamUrl: 'https://www.youtube.com/@trans7official/live' },
      { id: 'cnn', name: 'CNN Indonesia', country: 'Indonesia', type: 'hls', streamUrl: 'https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/chunklist_w80388450_b384000_sleng.m3u8' },
      { id: 'cnbc', name: 'CNBC Indonesia', country: 'Indonesia', type: 'hls', streamUrl: 'https://live.cnbcindonesia.com/livecnbc/smil:cnbctv.smil/chunklist_w481242722_b384000_sleng.m3u8' },
      { id: 'kompas', name: 'Kompas TV', country: 'Indonesia', type: 'youtube', streamUrl: 'https://www.youtube.com/@kompastv/live' },
      { id: 'metrotv', name: 'Metro TV', country: 'Indonesia', type: 'youtube', streamUrl: 'https://www.youtube.com/@MetroTV/live' },
      { id: 'tvri', name: 'TVRI Nasional', country: 'Indonesia', type: 'youtube', streamUrl: 'https://www.youtube.com/@TVRINasional/live' },
      { id: 'rtv', name: 'RTV', country: 'Indonesia', type: 'hls', streamUrl: 'https://rtvstream.rtv.co.id:4555/hls/rtv.m3u8' },
      { id: 'nusantara', name: 'Nusantara TV', country: 'Indonesia', type: 'hls', streamUrl: 'https://nusantaratv.siar.us/nusantaratv/live/playlist.m3u8' },
      { id: 'jogja', name: 'Jogja TV', country: 'Indonesia', type: 'hls', streamUrl: 'https://stream.jogjatv.co.id/jtvlive/stream/index.m3u8' },
      { id: 'daai', name: 'DAAI TV', country: 'Indonesia', type: 'hls', streamUrl: 'https://pull.daaiplus.com/live-DAAIPLUS/live-DAAIPLUS_HD.m3u8' },
      { id: 'mqtv', name: 'MQTV', country: 'Indonesia', type: 'hls', streamUrl: 'https://5bf7b725107e5.streamlock.net/mqtv/mqtv/playlist.m3u8' },
      { id: 'garuda', name: 'Garuda TV', country: 'Indonesia', type: 'hls', streamUrl: 'https://hgmtv.com:19360/garudatvlivestreaming/garudatvlivestreaming.m3u8' },
      { id: 'mnc', name: 'MNC', country: 'Indonesia', type: 'hls', streamUrl: 'https://edge.medcom.id/live-edge/smil:mgnch.smil/playlist.m3u8' },
      { id: 'rcti', name: 'RCTI', country: 'Indonesia', type: 'hls', streamUrl: 'https://rcti-linier.rctiplus.id/rcti-sdi.m3u8?hdnts=exp=1782448083~hmac=3b841da38169e1c5ad506956ea197f1e0685fba684f24dc0253014e6d15ad3fd' },
    ];

    const manual = await Promise.all(manualRaw.map(async ch => ({
      ...ch,
      online: ch.type === 'youtube' ? null : await checkUrl(ch.streamUrl)
    })));

    const COUNTRIES = ['us', 'gb', 'jp', 'kr', 'my', 'sg', 'in', 'de', 'fr', 'au'];
    const results = await Promise.all(COUNTRIES.map(code =>
      fetch(`https://raw.githubusercontent.com/iptv-org/iptv/master/streams/${code}.m3u`, { signal: AbortSignal.timeout(5000) })
        .then(r => r.text()).then(text => {
          const chs = []; let cur = {};
          for (const line of text.split('\n')) {
            const t = line.trim();
            if (t.startsWith('#EXTINF:')) {
              const n = t.match(/,([^,]+)$/);
              cur = { name: n ? n[1].trim() : 'Unknown', country: code.toUpperCase(), type: 'hls', online: null };
            } else if ((t.startsWith('http://') || t.startsWith('https://')) && cur.name) {
              cur.id = cur.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + code;
              cur.streamUrl = t;
              chs.push(cur); cur = {};
            }
          }
          return chs;
        }).catch(() => [])
    ));

    res.json([...manual, ...results.flat()]);
  } catch { res.json([]); }
});

app.listen(PORT, () => {
  console.log(`Live TV running at http://localhost:${PORT}`);
});
