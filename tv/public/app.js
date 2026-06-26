const channelList = document.getElementById('channel-list');
const videoPlayer = document.getElementById('video-player');
const videoElement = document.getElementById('video-element');
const ytPlayer = document.getElementById('youtube-player');
const placeholder = document.getElementById('placeholder');
const noChannel = document.getElementById('no-channel');
const statusOverlay = document.getElementById('status-overlay');
const statusMsg = document.getElementById('status-msg');
const menuBtn = document.getElementById('menu-btn');
const backdrop = document.getElementById('backdrop');

let allChannels = [];
let playerAbort = null;

function sidebarClose() {
  channelList.classList.remove('open');
  backdrop.classList.remove('open');
}

function sidebarOpen() {
  channelList.classList.add('open');
  backdrop.classList.add('open');
}

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (channelList.classList.contains('open')) {
    sidebarClose();
  } else {
    sidebarOpen();
  }
});

backdrop.addEventListener('click', sidebarClose);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') sidebarClose();
});

function setStatus(msg, isError) {
  statusOverlay.classList.remove('hidden', 'error');
  statusMsg.textContent = msg;
  if (isError) statusOverlay.classList.add('error');
}

function hideStatus() {
  statusOverlay.classList.add('hidden');
}

function resetPlayer() {
  if (playerAbort) { playerAbort.abort(); playerAbort = null; }
  videoElement.removeAttribute('src');
  videoElement.load();
  ytPlayer.innerHTML = '';
  ytPlayer.style.display = 'none';
  placeholder.classList.remove('hidden');
  hideStatus();
}

function renderChannels(channels) {
  const groups = {};
  channels.forEach(ch => {
    const key = ch.country || 'Lainnya';
    if (!groups[key]) groups[key] = [];
    groups[key].push(ch);
  });

  channelList.innerHTML = Object.entries(groups).map(([country, chs]) => `
    <div class="country-label">${country} (${chs.length})</div>
    ${chs.map(ch => {
      const dotClass = ch.online === true ? 'online' : ch.online === false ? 'offline' : 'unknown';
      return `
      <div class="channel-item" data-id="${ch.id}">
        <span class="dot ${dotClass}"></span>
        <div class="channel-logo">${ch.name.charAt(0).toUpperCase()}</div>
        <span class="channel-name">${ch.name}</span>
        ${ch.type === 'youtube' ? '<span class="channel-badge">YT</span>' : ''}
      </div>`;
    }).join('')}
  `).join('');

  channelList.querySelectorAll('.channel-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id;
      const ch = allChannels.find(c => c.id === id);
      if (ch && ch.streamUrl) playChannel(ch, el);
      sidebarClose();
    });
  });
}

function playChannel(channel, el) {
  channelList.querySelectorAll('.channel-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');

  resetPlayer();

  if (channel.type === 'youtube') {
    const m = channel.streamUrl.match(/(?:channel\/|@)([^/]+)/);
    const handle = m ? m[1] : '';
    if (handle) {
      ytPlayer.style.display = 'block';
      ytPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/live_stream?channel=${handle}&autoplay=1&mute=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      placeholder.classList.add('hidden');
    }
  } else {
    const ac = new AbortController();
    playerAbort = ac;
    const signal = ac.signal;

    videoElement.src = channel.streamUrl;
    setStatus('Memuat ' + channel.name + '...');

    videoElement.addEventListener('loadedmetadata', () => {
      placeholder.classList.add('hidden');
      hideStatus();
    }, { signal, once: true });

    videoElement.addEventListener('waiting', () => {
      setStatus('Buffering...');
    }, { signal });

    videoElement.addEventListener('playing', () => {
      placeholder.classList.add('hidden');
      hideStatus();
    }, { signal });

    videoElement.addEventListener('error', () => {
      const ve = videoElement.error;
      const msg = ve ? (ve.message || 'Kode ' + ve.code) : 'Gagal memuat stream';
      setStatus('Error: ' + channel.name + ' (' + msg + ')', true);
    }, { signal });

    videoElement.addEventListener('stalled', () => {
      setStatus('Stream tersendat...');
    }, { signal });

    videoElement.load();
    videoElement.play().catch(() => {});
  }
}

noChannel.textContent = 'Memuat...';

fetch('/api/channels')
  .then(r => r.json())
  .then(data => {
    const channels = Array.isArray(data) ? data : (data.channels || []);
    if (!channels.length) { noChannel.textContent = 'Tidak ada channel'; return; }
    allChannels = channels;
    noChannel.textContent = channels.length + ' channel';
    renderChannels(channels.slice(0, 500));
  })
  .catch(() => { noChannel.textContent = 'Gagal load server'; });
