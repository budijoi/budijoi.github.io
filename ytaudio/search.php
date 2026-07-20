<?php
header('Content-Type: application/json');

$q = $_GET['q'] ?? '';
$max = min((int)($_GET['max'] ?? 10), 30);

if (strlen($q) < 2) {
    echo json_encode(['error' => 'Minimal 2 karakter']);
    exit;
}

$query = 'ytsearch' . $max . ':' . $q;

$cmd = sprintf(
    'yt-dlp --flat-playlist --dump-json --no-playlist --no-warnings %s 2>/dev/null',
    escapeshellarg($query)
);

$output = [];
$returnCode = 0;
exec($cmd, $output, $returnCode);

if ($returnCode !== 0 || empty($output)) {
    echo json_encode(['error' => 'Tidak ada hasil atau terjadi kesalahan', 'results' => []]);
    exit;
}

$results = [];
foreach ($output as $line) {
    $data = json_decode($line, true);
    if (!$data || !isset($data['id'])) continue;

    $thumb = '';
    if (!empty($data['thumbnails'])) {
        $thumb = $data['thumbnails'][0]['url'] ?? '';
    }
    if (!$thumb) {
        $thumb = 'https://img.youtube.com/vi/' . $data['id'] . '/hqdefault.jpg';
    }

    $results[] = [
        'id' => $data['id'],
        'title' => $data['title'] ?? 'Unknown',
        'channel' => $data['channel'] ?? $data['uploader'] ?? '',
        'duration' => $data['duration'] ?? 0,
        'duration_string' => $data['duration_string'] ?? '',
        'thumbnail' => $thumb,
        'url' => $data['url'] ?? 'https://youtube.com/watch?v=' . $data['id'],
    ];
}

echo json_encode(['results' => $results]);
