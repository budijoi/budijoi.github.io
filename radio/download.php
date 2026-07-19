<?php
$id = $_GET['id'] ?? '';
$title = $_GET['title'] ?? '';

if (!preg_match('/^[a-zA-Z0-9_-]{11}$/', $id)) {
    http_response_code(400);
    echo 'Invalid video ID';
    exit;
}

$url = 'https://youtube.com/watch?v=' . $id;
$filename = ($title ?: $id) . '.mp3';
$filename = strtr($filename, ['/' => '-', '\\' => '-', ':' => '-', '*' => '', '?' => '', '"' => '', '<' => '', '>' => '', '|' => '']);

set_time_limit(0);

header('Content-Type: audio/mpeg');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('X-Accel-Buffering: no');

$cmd = sprintf(
    'yt-dlp --no-playlist --no-warnings --no-color -x --audio-format mp3 --audio-quality 0 -o - %s 2>/dev/null',
    escapeshellarg($url)
);

passthru($cmd);
