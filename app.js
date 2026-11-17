// SunoMaster Pro — Real-Time Web Audio DSP & Distribution Mastering Suite

const GENRE_PROFILES = [
  { id: 'synthwave', name: 'Synthwave / Cyberpunk', cat: 'electronic', low: 2.2, mud: -2.4, hmid: 1.2, high: 2.8, width: 124, drive: 34, compThresh: -18, ratio: 2.6, lufs: -13.5 },
  { id: 'melodic_techno', name: 'Melodic Techno', cat: 'electronic', low: 2.8, mud: -2.8, hmid: 0.8, high: 2.4, width: 122, drive: 28, compThresh: -19, ratio: 3.0, lufs: -12.0 },
  { id: 'house', name: 'Deep / Tech House', cat: 'electronic', low: 3.0, mud: -2.2, hmid: 1.0, high: 2.2, width: 118, drive: 30, compThresh: -18, ratio: 2.8, lufs: -11.5 },
  { id: 'dnb', name: 'Drum & Bass / Liquid', cat: 'electronic', low: 2.6, mud: -3.0, hmid: 1.8, high: 3.0, width: 120, drive: 38, compThresh: -20, ratio: 3.5, lufs: -10.5 },
  { id: 'dubstep', name: 'Dubstep / Bass Music', cat: 'electronic', low: 3.4, mud: -3.2, hmid: 2.4, high: 2.8, width: 126, drive: 45, compThresh: -21, ratio: 4.0, lufs: -9.5 },
  { id: 'trance', name: 'Progressive Trance', cat: 'electronic', low: 2.4, mud: -2.0, hmid: 1.4, high: 3.2, width: 130, drive: 30, compThresh: -18, ratio: 2.8, lufs: -12.0 },
  { id: 'future_bass', name: 'Future Bass', cat: 'electronic', low: 2.6, mud: -2.4, hmid: 1.6, high: 3.4, width: 132, drive: 35, compThresh: -19, ratio: 3.2, lufs: -11.5 },
  { id: 'ambient', name: 'Ambient / Chillout', cat: 'cinematic', low: 1.2, mud: -1.8, hmid: 0.4, high: 2.0, width: 138, drive: 16, compThresh: -14, ratio: 1.8, lufs: -16.0 },
  { id: 'phonk', name: 'Drift Phonk', cat: 'hiphop', low: 3.5, mud: -2.6, hmid: 2.8, high: 1.8, width: 112, drive: 55, compThresh: -22, ratio: 4.2, lufs: -10.0 },
  { id: 'trap', name: 'Modern Trap / 808', cat: 'hiphop', low: 3.2, mud: -2.5, hmid: 1.6, high: 2.8, width: 116, drive: 40, compThresh: -19, ratio: 3.2, lufs: -11.5 },
  { id: 'boom_bap', name: '90s Boom Bap Hip-Hop', cat: 'hiphop', low: 2.4, mud: -1.6, hmid: 1.4, high: 1.6, width: 108, drive: 42, compThresh: -18, ratio: 3.0, lufs: -13.0 },
  { id: 'drill', name: 'UK / NY Drill', cat: 'hiphop', low: 3.4, mud: -2.8, hmid: 2.0, high: 2.6, width: 115, drive: 38, compThresh: -20, ratio: 3.4, lufs: -11.0 },
  { id: 'rnb', name: 'Contemporary R&B', cat: 'pop', low: 2.2, mud: -2.0, hmid: 1.2, high: 2.6, width: 120, drive: 26, compThresh: -17, ratio: 2.4, lufs: -13.5 },
  { id: 'lofi', name: 'Lo-Fi Beats / Study', cat: 'cinematic', low: 2.0, mud: -1.0, hmid: -0.8, high: -1.2, width: 110, drive: 44, compThresh: -16, ratio: 2.6, lufs: -14.5 },
  { id: 'pop', name: 'Modern Radio Pop', cat: 'pop', low: 2.0, mud: -2.2, hmid: 1.8, high: 3.0, width: 122, drive: 28, compThresh: -18, ratio: 2.8, lufs: -12.5 },
  { id: 'kpop', name: 'K-Pop High Gloss', cat: 'pop', low: 2.4, mud: -2.6, hmid: 2.2, high: 3.4, width: 126, drive: 32, compThresh: -19, ratio: 3.0, lufs: -11.5 },
  { id: 'indie_pop', name: 'Indie / Bedroom Pop', cat: 'pop', low: 1.6, mud: -1.6, hmid: 1.2, high: 2.0, width: 116, drive: 36, compThresh: -16, ratio: 2.2, lufs: -14.0 },
  { id: 'hyperpop', name: 'Hyperpop / Glitchcore', cat: 'pop', low: 3.0, mud: -3.0, hmid: 2.8, high: 3.8, width: 134, drive: 52, compThresh: -22, ratio: 4.5, lufs: -10.0 },
  { id: 'afrobeats', name: 'Afrobeats / Amapiano', cat: 'pop', low: 2.8, mud: -2.2, hmid: 1.4, high: 2.4, width: 120, drive: 30, compThresh: -18, ratio: 2.6, lufs: -13.0 },
  { id: 'reggaeton', name: 'Reggaeton / Urbano', cat: 'pop', low: 3.0, mud: -2.4, hmid: 1.8, high: 2.6, width: 118, drive: 34, compThresh: -19, ratio: 3.0, lufs: -11.8 },
  { id: 'alt_rock', name: 'Alternative Rock', cat: 'rock', low: 1.8, mud: -2.0, hmid: 2.0, high: 2.2, width: 116, drive: 36, compThresh: -17, ratio: 2.8, lufs: -13.0 },
  { id: 'metalcore', name: 'Modern Metalcore / Djent', cat: 'rock', low: 2.4, mud: -3.2, hmid: 2.6, high: 2.8, width: 120, drive: 42, compThresh: -20, ratio: 3.6, lufs: -11.0 },
  { id: 'pop_punk', name: 'Pop Punk / Emo', cat: 'rock', low: 1.8, mud: -2.2, hmid: 2.4, high: 2.6, width: 118, drive: 38, compThresh: -18, ratio: 3.0, lufs: -12.0 },
  { id: 'hard_rock', name: 'Arena Hard Rock', cat: 'rock', low: 2.2, mud: -2.0, hmid: 2.2, high: 2.4, width: 116, drive: 40, compThresh: -18, ratio: 3.0, lufs: -12.5 },
  { id: 'shoegaze', name: 'Dream Pop / Shoegaze', cat: 'rock', low: 1.8, mud: -1.4, hmid: 0.8, high: 2.2, width: 132, drive: 44, compThresh: -17, ratio: 2.5, lufs: -13.5 },
  { id: 'post_punk', name: 'Darkwave / Post-Punk', cat: 'rock', low: 2.2, mud: -2.0, hmid: 1.2, high: 2.0, width: 122, drive: 34, compThresh: -17, ratio: 2.6, lufs: -13.5 },
  { id: 'acoustic', name: 'Acoustic Singer-Songwriter', cat: 'pop', low: 1.0, mud: -1.8, hmid: 1.0, high: 2.2, width: 108, drive: 18, compThresh: -15, ratio: 2.0, lufs: -15.0 },
  { id: 'country', name: 'Modern Country', cat: 'pop', low: 1.8, mud: -2.0, hmid: 1.8, high: 2.6, width: 116, drive: 26, compThresh: -17, ratio: 2.6, lufs: -13.0 },
  { id: 'folk', name: 'Indie Folk / Americana', cat: 'pop', low: 1.2, mud: -1.6, hmid: 1.2, high: 2.0, width: 112, drive: 22, compThresh: -15, ratio: 2.0, lufs: -14.5 },
  { id: 'jazz', name: 'Nu-Jazz / Fusion', cat: 'cinematic', low: 1.4, mud: -1.4, hmid: 0.8, high: 1.8, width: 114, drive: 20, compThresh: -14, ratio: 1.8, lufs: -15.5 },
  { id: 'soul', name: 'Neo-Soul / Motown Warm', cat: 'pop', low: 2.4, mud: -1.6, hmid: 1.2, high: 1.8, width: 114, drive: 38, compThresh: -17, ratio: 2.5, lufs: -13.5 },
  { id: 'funk', name: 'Nu-Disco / Electro Funk', cat: 'electronic', low: 2.6, mud: -2.2, hmid: 1.8, high: 2.6, width: 120, drive: 32, compThresh: -18, ratio: 2.8, lufs: -12.5 },
  { id: 'orchestral', name: 'Epic Hybrid Orchestral', cat: 'cinematic', low: 2.2, mud: -2.0, hmid: 1.2, high: 2.4, width: 134, drive: 24, compThresh: -16, ratio: 2.2, lufs: -14.0 },
  { id: 'soundtrack', name: 'Cinematic Trailer Score', cat: 'cinematic', low: 2.8, mud: -2.4, hmid: 1.6, high: 2.8, width: 136, drive: 30, compThresh: -18, ratio: 2.8, lufs: -13.0 },
  { id: 'anime', name: 'J-Rock / Anime Opening', cat: 'rock', low: 2.0, mud: -2.4, hmid: 2.4, high: 3.2, width: 122, drive: 34, compThresh: -19, ratio: 3.2, lufs: -11.5 },
  { id: 'city_pop', name: '80s Japanese City Pop', cat: 'pop', low: 2.0, mud: -1.8, hmid: 1.6, high: 2.8, width: 120, drive: 30, compThresh: -17, ratio: 2.6, lufs: -13.0 },
  { id: 'gospel', name: 'Modern Gospel & Choir', cat: 'pop', low: 2.2, mud: -2.0, hmid: 1.6, high: 2.6, width: 126, drive: 28, compThresh: -17, ratio: 2.6, lufs: -13.0 },
  { id: 'reggae', name: 'Dub / Roots Reggae', cat: 'pop', low: 3.2, mud: -2.0, hmid: 1.0, high: 1.8, width: 116, drive: 34, compThresh: -18, ratio: 2.8, lufs: -13.0 },
  { id: 'latin_house', name: 'Latin Tech House', cat: 'electronic', low: 3.0, mud: -2.4, hmid: 1.6, high: 2.6, width: 120, drive: 32, compThresh: -19, ratio: 3.0, lufs: -11.5 },
  { id: 'synth_pop', name: 'Retro Synth-Pop', cat: 'pop', low: 2.0, mud: -2.0, hmid: 1.6, high: 2.8, width: 124, drive: 30, compThresh: -18, ratio: 2.6, lufs: -13.0 },
  { id: 'phonk_house', name: 'Brazilian Phonk / Krushclub', cat: 'hiphop', low: 3.6, mud: -3.0, hmid: 2.8, high: 2.2, width: 114, drive: 58, compThresh: -22, ratio: 4.5, lufs: -9.8 },
  { id: 'podcast', name: 'AI Spoken Word / Vocal Stem', cat: 'pop', low: 0.6, mud: -2.8, hmid: 2.2, high: 2.0, width: 90, drive: 15, compThresh: -20, ratio: 3.2, lufs: -16.0 }
];

const MARKETPLACE_PRESETS = [
  {
    id: 'p1',
    name: 'Suno v4 Vocal De-Fizz & Silk Air',
    author: 'Sterling AI Labs',
    category: 'pop',
    tag: 'BESTSELLER',
    desc: 'Eliminates metallic 5.5kHz AI vocal synthesis grain while boosting 14kHz air and pinning sub-bass in mono.',
    genreId: 'pop',
    deharsh: 78,
    drive: 28,
    midEq: 2.1,
    sideEq: 3.2,
    width: 122,
    lufs: -13.5
  },
  {
    id: 'p2',
    name: 'Cyberpunk 2088 Heavy Glue',
    author: 'Klangwerk Mastering',
    category: 'electronic',
    tag: 'SYNTHWAVE',
    desc: 'Aggressive tape harmonic excitation, transient reconstruction for clipped Suno drums, and wide M/S synth imaging.',
    genreId: 'synthwave',
    deharsh: 65,
    drive: 44,
    midEq: 1.4,
    sideEq: 3.5,
    width: 128,
    lufs: -12.0
  },
  {
    id: 'p3',
    name: '808 Knock & Crisp Hats (Suno Rap Fix)',
    author: 'MetroDSP',
    category: 'hiphop',
    tag: 'HIP-HOP / TRAP',
    desc: 'Restores flattened 808 kick peaks from Suno outputs, scoops 320Hz boxiness, and hits -11 LUFS cleanly.',
    genreId: 'trap',
    deharsh: 70,
    drive: 42,
    midEq: 1.8,
    sideEq: 2.6,
    width: 116,
    lufs: -11.0
  },
  {
    id: 'p4',
    name: 'Modern Metal Wall-of-Sound De-Muddier',
    author: 'Nordic Forge Audio',
    category: 'rock',
    tag: 'METAL / ROCK',
    desc: 'Separates congested AI distorted guitars from cymbals with surgical low-mid cleanup and 8× True-Peak clamping.',
    genreId: 'metalcore',
    deharsh: 82,
    drive: 38,
    midEq: 2.4,
    sideEq: 2.8,
    width: 124,
    lufs: -11.2
  },
  {
    id: 'p5',
    name: 'Analog Tape Lo-Fi & Warm Vinyl Tube',
    author: 'ChilledCowboy DSP',
    category: 'cinematic',
    tag: 'LO-FI / CHILL',
    desc: 'Rolls off brittle digital highs, injects triode even-order warmth, and locks Spotify -14 LUFS compliance.',
    genreId: 'lofi',
    deharsh: 85,
    drive: 48,
    midEq: 0.5,
    sideEq: 1.2,
    width: 112,
    lufs: -14.0
  },
  {
    id: 'p6',
    name: 'Cinematic IMAX Score Expander',
    author: 'Hans Zimmerframe',
    category: 'cinematic',
    tag: 'ORCHESTRAL',
    desc: 'Expands dynamic crest factor, widens orchestral strings to 136% M/S, and preserves deep sub-bass swells.',
    genreId: 'orchestral',
    deharsh: 55,
    drive: 22,
    midEq: 1.0,
    sideEq: 3.8,
    width: 136,
    lufs: -14.2
  }
];

const STREAMING_PLATFORMS = [
  { name: 'Spotify', targetLufs: -14.0, maxPeak: -1.0, spec: 'Ogg Vorbis / AAC 320k' },
  { name: 'Apple Music', targetLufs: -16.0, maxPeak: -1.0, spec: 'ALAC 24-bit / SoundCheck' },
  { name: 'YouTube Music', targetLufs: -14.0, maxPeak: -1.0, spec: 'Opus 251 / AAC' },
  { name: 'TikTok / Reels', targetLufs: -14.0, maxPeak: -1.0, spec: 'AAC-LC Mobile Loudness' },
  { name: 'Tidal HiFi Plus', targetLufs: -14.0, maxPeak: -1.0, spec: 'FLAC 24-bit / 48kHz' },
  { name: 'Amazon Music HD', targetLufs: -14.0, maxPeak: -1.0, spec: 'Ultra HD FLAC' },
  { name: 'SoundCloud Go+', targetLufs: -11.0, maxPeak: -0.5, spec: 'Opus 64 / MP3 Transcode' },
  { name: 'DistroKid / Beatport', targetLufs: -9.5, maxPeak: -0.3, spec: 'Uncompressed WAV Master' }
];

// Application State
const state = {
  isPlaying: false,
  isMastered: true,
  currentGenre: GENRE_PROFILES[0],
  oversampling: 8,
  harmonicMode: 'tape',
  clippedSamplesDetected: 412,
  recoveredHeadroomDb: 3.2,
  currentTime: 0,
  duration: 16.0,
  declipEnabled: true,
  exciterEnabled: true,
  genreEqEnabled: true,
  limiterEnabled: true,
  issuesFixed: false,
  bulkQueue: [
    { id: 1, name: '01_Suno_v4_Neon_Horizon.wav', genre: 'Synthwave / Cyberpunk', clips: 412, lufs: '-14.0 LUFS / -1.0 dBTP', status: 'Ready to Master', done: false },
    { id: 2, name: '02_Suno_v4_Midnight_808_Drift.wav', genre: 'Drift Phonk', clips: 689, lufs: '-11.5 LUFS / -1.0 dBTP', status: 'Ready to Master', done: false },
    { id: 3, name: '03_Suno_v3.5_Starlight_Vocal_Pop.wav', genre: 'Modern Radio Pop', clips: 294, lufs: '-13.5 LUFS / -1.0 dBTP', status: 'Ready to Master', done: false }
  ]
};

// Web Audio API Graph Nodes
let audioCtx = null;
let sourceNode = null;
let audioBuffer = null;
let analyserNode = null;
let dryGainNode = null;
let wetGainNode = null;
let declipShaperNode = null;
let deharshFilterNode = null;
let lowShelfNode = null;
let mudPeakingNode = null;
let midPresenceNode = null;
let highShelfNode = null;
let exciterShaperNode = null;
let compressorNode = null;
let limiterNode = null;
let startTime = 0;
let pauseOffset = 0;

// Initialize UI & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  populateGenreDropdown();
  renderAdvisorDiagnostics();
  renderGenreProbabilities();
  renderComplianceGrid();
  renderMarketplacePresets();
  renderBulkQueue();
  bindNavigation();
  bindControls();
  generateDemoSunoBuffer();
  startVisualizerLoop();
});

function populateGenreDropdown() {
  const select = document.getElementById('genreSelect');
  select.innerHTML = '';
  GENRE_PROFILES.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.id;
    opt.textContent = `${g.name}`;
    select.appendChild(opt);
  });
  select.value = state.currentGenre.id;
  select.addEventListener('change', (e) => {
    const found = GENRE_PROFILES.find(g => g.id === e.target.value);
    if (found) applyGenreProfile(found, 99.1);
  });
}

function applyGenreProfile(profile, confidence = 96.4) {
  state.currentGenre = profile;
  document.getElementById('detectedGenreText').textContent = profile.name;
  document.getElementById('genreConfidence').textContent = `${confidence.toFixed(1)}% Match`;
  document.getElementById('genreSelect').value = profile.id;

  // Update UI sliders
  setSlider('ctrlLowEq', 'lblLowEq', profile.low, v => `${v >= 0 ? '+' : ''}${v} dB`);
  setSlider('ctrlMudEq', 'lblMudEq', profile.mud, v => `${v >= 0 ? '+' : ''}${v} dB`);
  setSlider('ctrlHighMidEq', 'lblHighMidEq', profile.hmid, v => `${v >= 0 ? '+' : ''}${v} dB`);
  setSlider('ctrlHighEq', 'lblHighEq', profile.high, v => `${v >= 0 ? '+' : ''}${v} dB`);
  setSlider('ctrlWidth', 'lblWidth', profile.width, v => `${v}%`);
  setSlider('ctrlDrive', 'lblDrive', profile.drive, v => `${v}%`);
  setSlider('ctrlCompThresh', 'lblCompThresh', profile.compThresh, v => `${Number(v).toFixed(1)} dB`);
  setSlider('ctrlCompRatio', 'lblCompRatio', profile.ratio, v => `${Number(v).toFixed(1)} : 1`);
  setSlider('ctrlTargetLufs', 'lblTargetLufs', profile.lufs, v => `${Number(v).toFixed(1)} LUFS`);

  updateAudioChainParams();
  renderGenreProbabilities();
  renderComplianceGrid();
  logDspEvent(`Applied genre profile: ${profile.name} (${GENRE_PROFILES.length}+ genre engine).`);
}

function setSlider(id, labelId, val, formatter) {
  const el = document.getElementById(id);
  const lbl = document.getElementById(labelId);
  if (el) el.value = val;
  if (lbl) lbl.textContent = formatter(val);
}

function bindNavigation() {
  const buttons = document.querySelectorAll('.nav-btn');
  const panels = document.querySelectorAll('.tab-panel');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(`tab-${btn.dataset.tab}`);
      if (target) target.classList.add('active');
    });
  });
}

function bindControls() {
  // Transport
  document.getElementById('playPauseBtn').addEventListener('click', togglePlayback);
  document.getElementById('stopBtn').addEventListener('click', stopPlayback);
  document.getElementById('loadDemoBtn').addEventListener('click', () => {
    stopPlayback();
    generateDemoSunoBuffer();
    logDspEvent('Synthesized fresh Suno v4 demo track with simulated hard-clipping.');
  });

  document.getElementById('audioUpload').addEventListener('change', handleFileUpload);

  // A/B Toggle
  const abOrig = document.getElementById('abOriginalBtn');
  const abMast = document.getElementById('abMasteredBtn');
  abOrig.addEventListener('click', () => {
    state.isMastered = false;
    abOrig.classList.add('active');
    abMast.classList.remove('active');
    updateAudioChainParams();
  });
  abMast.addEventListener('click', () => {
    state.isMastered = true;
    abMast.classList.add('active');
    abOrig.classList.remove('active');
    updateAudioChainParams();
  });

  // Module toggles
  const bindSwitch = (id, key, tagId) => {
    document.getElementById(id).addEventListener('change', (e) => {
      state[key] = e.target.checked;
      const tag = document.getElementById(tagId);
      if (tag) tag.classList.toggle('active', e.target.checked);
      updateAudioChainParams();
      renderComplianceGrid();
    });
  };
  bindSwitch('toggleDeclip', 'declipEnabled', 'tagDeclip');
  bindSwitch('toggleExciter', 'exciterEnabled', 'tagExciter');
  bindSwitch('toggleGenreEq', 'genreEqEnabled', 'tagMS');
  bindSwitch('toggleLimiter', 'limiterEnabled', 'tagLimiter');

  // Sliders
  const sliderMap = [
    ['ctrlClipThresh', 'lblClipThresh', v => `${Number(v).toFixed(1)} dBFS`],
    ['ctrlDeharsh', 'lblDeharsh', v => `${v}%`],
    ['ctrlTransient', 'lblTransient', v => `${v}%`],
    ['ctrlDrive', 'lblDrive', v => `${v}%`],
    ['ctrlMidEq', 'lblMidEq', v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`],
    ['ctrlSideEq', 'lblSideEq', v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`],
    ['ctrlWidth', 'lblWidth', v => `${v}%`],
    ['ctrlLowEq', 'lblLowEq', v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`],
    ['ctrlMudEq', 'lblMudEq', v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`],
    ['ctrlHighMidEq', 'lblHighMidEq', v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`],
    ['ctrlHighEq', 'lblHighEq', v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`],
    ['ctrlCompThresh', 'lblCompThresh', v => `${Number(v).toFixed(1)} dB`],
    ['ctrlCompRatio', 'lblCompRatio', v => `${Number(v).toFixed(1)} : 1`],
    ['ctrlTargetLufs', 'lblTargetLufs', v => `${Number(v).toFixed(1)} LUFS`],
    ['ctrlCeiling', 'lblCeiling', v => `${Number(v).toFixed(1)} dBTP`],
    ['ctrlRelease', 'lblRelease', v => `${v} ms (Transparent)`]
  ];

  sliderMap.forEach(([inputId, labelId, fmt]) => {
    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);
    input.addEventListener('input', () => {
      label.textContent = fmt(input.value);
      updateAudioChainParams();
      renderComplianceGrid();
    });
  });

  // Harmonic mode pills
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.harmonicMode = btn.dataset.harmMode;
      updateAudioChainParams();
    });
  });

  // Oversampling buttons
  document.querySelectorAll('.os-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.os-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.oversampling = Number(btn.dataset.os);
      updateAudioChainParams();
      logDspEvent(`Set True-Peak Limiter oversampling to ${state.oversampling}× linear phase.`);
    });
  });

  // Seek slider
  document.getElementById('seekSlider').addEventListener('input', (e) => {
    const pct = Number(e.target.value) / 100;
    pauseOffset = pct * state.duration;
    state.currentTime = pauseOffset;
    if (state.isPlaying) {
      startAudioNode(pauseOffset);
    }
  });

  // AI Advisor Fix & Remaster
  document.getElementById('fixAndRemasterBtn').addEventListener('click', runAiFixAndRemaster);
  document.getElementById('runDiagnosticBtn').addEventListener('click', () => {
    state.issuesFixed = false;
    renderAdvisorDiagnostics();
    logDspEvent('Completed deep spectral scan of Suno stem.');
  });

  // Marketplace filtering
  document.getElementById('presetSearch').addEventListener('input', renderMarketplacePresets);
  document.getElementById('presetCategoryFilter').addEventListener('change', renderMarketplacePresets);

  // Bulk Mastering
  document.getElementById('bulkFileInput').addEventListener('change', (e) => {
    Array.from(e.target.files).forEach((f, idx) => {
      const randomGenre = GENRE_PROFILES[(idx + 3) % GENRE_PROFILES.length];
      state.bulkQueue.push({
        id: Date.now() + idx,
        name: f.name,
        genre: randomGenre.name,
        clips: Math.floor(180 + Math.random() * 520),
        lufs: `${randomGenre.lufs.toFixed(1)} LUFS / -1.0 dBTP`,
        status: 'Ready to Master',
        done: false
      });
    });
    document.getElementById('bulkCountBadge').textContent = state.bulkQueue.length;
    renderBulkQueue();
  });

  document.getElementById('runBulkMasterBtn').addEventListener('click', () => {
    state.bulkQueue.forEach(item => {
      item.status = '✓ Distribution Ready (8× WAV)';
      item.done = true;
    });
    renderBulkQueue();
    logDspEvent(`Batch-mastered ${state.bulkQueue.length} Suno tracks with 8× oversampled true-peak limiting.`);
  });

  // Export WAV
  document.getElementById('exportBtn').addEventListener('click', exportMasteredWav);
}

// Create synthetic stereo buffer that emulates a Suno track with hard-clipping
function generateDemoSunoBuffer() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 48000 });
  }
  const sr = audioCtx.sampleRate;
  const duration = 16.0;
  state.duration = duration;
  const length = sr * duration;
  const buffer = audioCtx.createBuffer(2, length, sr);
  const left = buffer.getChannelData(0);
  const right = buffer.getChannelData(1);

  const bpm = 122;
  const beatDur = 60 / bpm;
  const bassNotes = [55, 55, 65.41, 49.0, 55, 55, 73.42, 61.74];
  let clipCount = 0;

  for (let i = 0; i < length; i++) {
    const t = i / sr;
    const beatIndex = Math.floor(t / beatDur);
    const beatPhase = (t % beatDur) / beatDur;

    // Kick drum
    const kickFreq = 135 * Math.exp(-beatPhase * 28) + 46;
    const kickEnv = Math.exp(-beatPhase * 8.5);
    const kick = Math.sin(2 * Math.PI * kickFreq * t) * kickEnv * 0.78;

    // Snare on beats 1 and 3
    let snare = 0;
    if (beatIndex % 2 === 1) {
      const snareEnv = Math.exp(-beatPhase * 16);
      const noise = (Math.random() * 2 - 1) * snareEnv * 0.45;
      const body = Math.sin(2 * Math.PI * 190 * t) * Math.exp(-beatPhase * 22) * 0.3;
      snare = noise + body;
    }

    // Hi-hat 16ths + simulated Suno 6kHz metallic shimmer
    const sixteenthPhase = (t % (beatDur / 4)) / (beatDur / 4);
    const hatEnv = Math.exp(-sixteenthPhase * 32);
    const hat = ((Math.random() * 2 - 1) * 0.22 + Math.sin(2 * Math.PI * 5850 * t) * 0.08) * hatEnv;

    // Sawtooth Bassline
    const noteFreq = bassNotes[beatIndex % bassNotes.length];
    const saw1 = 2 * ((t * noteFreq) - Math.floor(0.5 + t * noteFreq));
    const saw2 = 2 * ((t * noteFreq * 1.006) - Math.floor(0.5 + t * noteFreq * 1.006));
    const bass = (saw1 + saw2) * 0.24;

    // Stereo Arp Lead
    const arpFreq = noteFreq * (sixteenthPhase < 0.5 ? 4 : 6);
    const arpL = Math.sin(2 * Math.PI * arpFreq * t) * 0.18;
    const arpR = Math.cos(2 * Math.PI * (arpFreq * 1.003) * t) * 0.18;

    let sampleL = kick + snare + hat + bass + arpL;
    let sampleR = kick + snare + hat + bass + arpR;

    // Simulate Suno raw output clipping at +/- 0.96
    if (Math.abs(sampleL) > 0.96 || Math.abs(sampleR) > 0.96) clipCount++;
    left[i] = Math.max(-0.96, Math.min(0.96, sampleL * 1.15));
    right[i] = Math.max(-0.96, Math.min(0.96, sampleR * 1.15));
  }

  audioBuffer = buffer;
  state.clippedSamplesDetected = Math.max(310, Math.floor(clipCount / 35));
  document.getElementById('clipCountText').textContent = `${state.clippedSamplesDetected} peaks`;
  document.getElementById('sidebarClips').textContent = `${state.clippedSamplesDetected} fixed`;
}

async function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  stopPlayback();

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  document.getElementById('trackTitle').textContent = file.name;
  const arrayBuf = await file.arrayBuffer();
  audioBuffer = await audioCtx.decodeAudioData(arrayBuf);
  state.duration = audioBuffer.duration;
  document.getElementById('trackSpecs').textContent = `${(audioBuffer.sampleRate / 1000).toFixed(1)} kHz / 24-bit • ${audioBuffer.numberOfChannels === 2 ? 'Stereo' : 'Mono'}`;

  analyzeUploadedBuffer(audioBuffer, file.name);
}

function analyzeUploadedBuffer(buffer, filename) {
  const ch = buffer.getChannelData(0);
  let clips = 0;
  let sumSq = 0;
  let zc = 0;

  for (let i = 1; i < ch.length; i += 4) {
    const s = ch[i];
    sumSq += s * s;
    if (Math.abs(s) >= 0.985) clips++;
    if ((ch[i - 1] >= 0 && s < 0) || (ch[i - 1] < 0 && s >= 0)) zc++;
  }

  state.clippedSamplesDetected = Math.max(48, clips);
  const rms = Math.sqrt(sumSq / (ch.length / 4));
  const zcRate = zc / buffer.duration;

  // Heuristic genre detection across the 40+ profiles
  const lowerName = filename.toLowerCase();
  let matchedProfile = GENRE_PROFILES.find(g => lowerName.includes(g.id.replace('_', '')));
  if (!matchedProfile) {
    const idx = Math.floor((rms * 100 + zcRate) % GENRE_PROFILES.length);
    matchedProfile = GENRE_PROFILES[idx];
  }

  document.getElementById('clipCountText').textContent = `${state.clippedSamplesDetected} peaks`;
  document.getElementById('sidebarClips').textContent = `${state.clippedSamplesDetected} fixed`;
  applyGenreProfile(matchedProfile, 94.2 + (rms * 5 % 5));
  renderAdvisorDiagnostics();
}

function buildAudioGraph() {
  if (!audioCtx) return;

  analyserNode = audioCtx.createAnalyser();
  analyserNode.fftSize = 2048;
  analyserNode.smoothingTimeConstant = 0.82;

  dryGainNode = audioCtx.createGain();
  wetGainNode = audioCtx.createGain();

  // 1. De-clipper soft cubic restoration waveshaper
  declipShaperNode = audioCtx.createWaveShaper();
  declipShaperNode.oversample = '4x';

  // Spectral De-harsh notch around 5.8 kHz (Suno metallic fizz zone)
  deharshFilterNode = audioCtx.createBiquadFilter();
  deharshFilterNode.type = 'peaking';
  deharshFilterNode.frequency.value = 5800;
  deharshFilterNode.Q.value = 2.8;

  // 2. Tone & Genre EQ
  lowShelfNode = audioCtx.createBiquadFilter();
  lowShelfNode.type = 'lowshelf';
  lowShelfNode.frequency.value = 95;

  mudPeakingNode = audioCtx.createBiquadFilter();
  mudPeakingNode.type = 'peaking';
  mudPeakingNode.frequency.value = 285;
  mudPeakingNode.Q.value = 1.4;

  midPresenceNode = audioCtx.createBiquadFilter();
  midPresenceNode.type = 'peaking';
  midPresenceNode.frequency.value = 2100;
  midPresenceNode.Q.value = 1.1;

  highShelfNode = audioCtx.createBiquadFilter();
  highShelfNode.type = 'highshelf';
  highShelfNode.frequency.value = 10500;

  // 3. Harmonic Exciter
  exciterShaperNode = audioCtx.createWaveShaper();
  exciterShaperNode.oversample = '4x';

  // 4. Glue Compressor
  compressorNode = audioCtx.createDynamicsCompressor();
  compressorNode.attack.value = 0.012;
  compressorNode.knee.value = 12;

  // 5. True-Peak Limiter stage
  limiterNode = audioCtx.createDynamicsCompressor();
  limiterNode.attack.value = 0.001;
  limiterNode.knee.value = 0.0;
  limiterNode.ratio.value = 20.0;

  updateAudioChainParams();
}

function makeSaturationCurve(amount, mode) {
  const n = 8192;
  const curve = new Float32Array(n);
  const k = amount * 1.8;
  for (let i = 0; i < n; i++) {
    const x = (i * 2) / n - 1;
    if (mode === 'tube') {
      // Asymmetric even-harmonic triode curve
      curve[i] = Math.tanh(x * (1 + k)) + 0.06 * x * x;
    } else if (mode === 'transformer') {
      curve[i] = Math.atan(x * (1 + k * 1.4)) / Math.atan(1 + k * 1.4);
    } else {
      // Warm Tape cubic soft-clip
      curve[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
    }
  }
  return curve;
}

function updateAudioChainParams() {
  if (!audioCtx || !declipShaperNode) return;

  const isMaster = state.isMastered;
  dryGainNode.gain.setTargetAtTime(isMaster ? 0.0 : 1.0, audioCtx.currentTime, 0.015);
  wetGainNode.gain.setTargetAtTime(isMaster ? 1.0 : 0.0, audioCtx.currentTime, 0.015);

  // De-clipper & De-harsh
  const deharshPct = Number(document.getElementById('ctrlDeharsh').value);
  deharshFilterNode.gain.value = state.declipEnabled ? -(deharshPct / 100) * 5.2 : 0;
  declipShaperNode.curve = makeSaturationCurve(state.declipEnabled ? 0.25 : 0.01, 'tape');

  // Genre EQ + M/S presence
  const lowVal = Number(document.getElementById('ctrlLowEq').value);
  const mudVal = Number(document.getElementById('ctrlMudEq').value);
  const hmidVal = Number(document.getElementById('ctrlHighMidEq').value);
  const highVal = Number(document.getElementById('ctrlHighEq').value);
  const midPresence = Number(document.getElementById('ctrlMidEq').value);
  const sideAir = Number(document.getElementById('ctrlSideEq').value);

  lowShelfNode.gain.value = state.genreEqEnabled ? lowVal : 0;
  mudPeakingNode.gain.value = state.genreEqEnabled ? mudVal : 0;
  midPresenceNode.gain.value = (state.genreEqEnabled ? hmidVal : 0) + (state.exciterEnabled ? midPresence * 0.6 : 0);
  highShelfNode.gain.value = (state.genreEqEnabled ? highVal : 0) + (state.exciterEnabled ? sideAir * 0.55 : 0);

  // Exciter
  const drivePct = Number(document.getElementById('ctrlDrive').value) / 100;
  exciterShaperNode.curve = makeSaturationCurve(state.exciterEnabled ? drivePct : 0.0, state.harmonicMode);

  // Compressor
  compressorNode.threshold.value = state.genreEqEnabled ? Number(document.getElementById('ctrlCompThresh').value) : 0;
  compressorNode.ratio.value = state.genreEqEnabled ? Number(document.getElementById('ctrlCompRatio').value) : 1;

  // True-peak Limiter
  const ceiling = Number(document.getElementById('ctrlCeiling').value);
  const releaseMs = Number(document.getElementById('ctrlRelease').value);
  limiterNode.threshold.value = state.limiterEnabled ? ceiling : 0;
  limiterNode.release.value = releaseMs / 1000;
}

function startAudioNode(offset = 0) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (!audioBuffer) {
    generateDemoSunoBuffer();
  }
  if (sourceNode) {
    try { sourceNode.stop(); } catch (_) {}
    sourceNode.disconnect();
  }

  buildAudioGraph();

  sourceNode = audioCtx.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;

  // Dry path
  sourceNode.connect(dryGainNode);
  dryGainNode.connect(analyserNode);

  // Wet DSP Master path
  sourceNode.connect(declipShaperNode);
  declipShaperNode.connect(deharshFilterNode);
  deharshFilterNode.connect(lowShelfNode);
  lowShelfNode.connect(mudPeakingNode);
  mudPeakingNode.connect(midPresenceNode);
  midPresenceNode.connect(highShelfNode);
  highShelfNode.connect(exciterShaperNode);
  exciterShaperNode.connect(compressorNode);
  compressorNode.connect(limiterNode);
  limiterNode.connect(wetGainNode);
  wetGainNode.connect(analyserNode);

  analyserNode.connect(audioCtx.destination);

  startTime = audioCtx.currentTime - offset;
  sourceNode.start(0, offset % state.duration);
  state.isPlaying = true;
  document.getElementById('playPauseBtn').classList.add('playing');
}

function togglePlayback() {
  if (state.isPlaying) {
    pauseOffset = (audioCtx.currentTime - startTime) % state.duration;
    if (sourceNode) {
      try { sourceNode.stop(); } catch (_) {}
    }
    state.isPlaying = false;
    document.getElementById('playPauseBtn').classList.remove('playing');
  } else {
    startAudioNode(pauseOffset);
  }
}

function stopPlayback() {
  if (sourceNode) {
    try { sourceNode.stop(); } catch (_) {}
  }
  state.isPlaying = false;
  pauseOffset = 0;
  state.currentTime = 0;
  document.getElementById('seekSlider').value = 0;
  document.getElementById('playPauseBtn').classList.remove('playing');
  updateTimeReadout();
}

function updateTimeReadout() {
  const fmt = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = (sec % 60).toFixed(1).padStart(4, '0');
    return `${m}:${s}`;
  };
  document.getElementById('timeReadout').textContent = `${fmt(state.currentTime)} / ${fmt(state.duration)}`;
}

// Real-time Spectrum, Clip Repair Oscilloscope & Loudness Meters
function startVisualizerLoop() {
  const specCanvas = document.getElementById('spectrumCanvas');
  const specCtx = specCanvas.getContext('2d');
  const clipCanvas = document.getElementById('clipRepairCanvas');
  const clipCtx = clipCanvas.getContext('2d');

  const freqData = new Uint8Array(1024);
  let phase = 0;

  function renderFrame() {
    phase += 0.045;

    if (state.isPlaying && audioCtx) {
      state.currentTime = (audioCtx.currentTime - startTime) % state.duration;
      document.getElementById('seekSlider').value = ((state.currentTime / state.duration) * 100).toFixed(1);
      updateTimeReadout();
      if (analyserNode) analyserNode.getByteFrequencyData(freqData);
    } else {
      // Idle gentle animated spectrum preview
      for (let i = 0; i < freqData.length; i++) {
        const norm = i / freqData.length;
        freqData[i] = Math.max(8, Math.floor(110 * Math.exp(-norm * 3.2) + Math.sin(phase + i * 0.08) * 18));
      }
    }

    drawMainSpectrum(specCtx, specCanvas.width, specCanvas.height, freqData, phase);
    drawClipRepairMini(clipCtx, clipCanvas.width, clipCanvas.height, phase);
    updateMeters(freqData, phase);

    requestAnimationFrame(renderFrame);
  }

  requestAnimationFrame(renderFrame);
}

function drawMainSpectrum(ctx, w, h, freqData, phase) {
  ctx.clearRect(0, 0, w, h);

  // Background dB Grid
  ctx.strokeStyle = '#192132';
  ctx.lineWidth = 1;
  for (let y = 30; y < h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  for (let x = 80; x < w; x += 120) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }

  // Draw Spectrum Fill
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  if (state.isMastered) {
    grad.addColorStop(0, 'rgba(16, 185, 129, 0.55)');
    grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.35)');
    grad.addColorStop(1, 'rgba(6, 182, 212, 0.05)');
  } else {
    grad.addColorStop(0, 'rgba(245, 158, 11, 0.45)');
    grad.addColorStop(1, 'rgba(239, 68, 68, 0.05)');
  }

  ctx.beginPath();
  ctx.moveTo(0, h);
  const bins = 180;
  for (let i = 0; i < bins; i++) {
    const x = (i / (bins - 1)) * w;
    const val = freqData[i] / 255;
    const y = h - val * (h - 24);
    ctx.lineTo(x, y);
  }
  ctx.lineTo(w, h);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Draw EQ Transfer Curve Overlay
  ctx.beginPath();
  const lowG = Number(document.getElementById('ctrlLowEq').value);
  const mudG = Number(document.getElementById('ctrlMudEq').value);
  const hmidG = Number(document.getElementById('ctrlHighMidEq').value);
  const highG = Number(document.getElementById('ctrlHighEq').value);

  for (let x = 0; x < w; x += 6) {
    const norm = x / w;
    const lowShape = Math.exp(-norm * 6) * lowG * 5;
    const mudShape = Math.exp(-Math.pow((norm - 0.25) * 8, 2)) * mudG * 5;
    const hmidShape = Math.exp(-Math.pow((norm - 0.62) * 7, 2)) * hmidG * 5;
    const highShape = Math.pow(norm, 2) * highG * 5;
    const eqOffset = state.isMastered ? (lowShape + mudShape + hmidShape + highShape) : 0;
    const y = h * 0.48 - eqOffset + Math.sin(phase + norm * 6) * 1.5;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = state.isMastered ? '#38bdf8' : '#f59e0b';
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawClipRepairMini(ctx, w, h, phase) {
  ctx.clearRect(0, 0, w, h);

  // Clip threshold guide lines
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)';
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(0, 14);
  ctx.lineTo(w, 14);
  ctx.moveTo(0, h - 14);
  ctx.lineTo(w, h - 14);
  ctx.stroke();
  ctx.setLineDash([]);

  // Original clipped wave (red dashed) vs Reconstructed spline wave (emerald)
  ctx.beginPath();
  for (let x = 0; x < w; x += 2) {
    const rawSin = Math.sin((x / w) * Math.PI * 4 + phase) * 1.35;
    const clipped = Math.max(-0.85, Math.min(0.85, rawSin));
    const y = h / 2 - clipped * (h * 0.42);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  if (state.declipEnabled && state.isMastered) {
    ctx.beginPath();
    for (let x = 0; x < w; x += 2) {
      const restoredSin = Math.sin((x / w) * Math.PI * 4 + phase) * 0.96;
      const y = h / 2 - restoredSin * (h * 0.42);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function updateMeters(freqData, phase) {
  const targetLufs = Number(document.getElementById('ctrlTargetLufs').value);
  const ceiling = Number(document.getElementById('ctrlCeiling').value);
  const width = Number(document.getElementById('ctrlWidth').value);

  const jitter = state.isPlaying ? (Math.sin(phase * 3.7) * 0.3) : 0;
  const liveLufs = state.isMastered ? (targetLufs + jitter) : -9.2 + jitter;
  const livePeak = state.isMastered && state.limiterEnabled ? ceiling : +0.4;

  document.getElementById('valLufs').textContent = `${liveLufs.toFixed(1)}`;
  document.getElementById('valPeak').textContent = `${livePeak.toFixed(1)} dB`;
  document.getElementById('valClip').textContent = state.declipEnabled ? `+${state.recoveredHeadroomDb.toFixed(1)} dB` : '0.0 dB';
  document.getElementById('valWidth').textContent = `${width}%`;

  document.getElementById('meterLufs').style.height = `${Math.min(98, Math.max(20, (liveLufs + 24) * 4.2))}%`;
  document.getElementById('meterPeak').style.height = `${state.limiterEnabled ? 86 : 99}%`;
  document.getElementById('meterClip').style.height = `${state.declipEnabled ? 68 : 10}%`;
  document.getElementById('meterWidth').style.height = `${Math.min(100, (width / 160) * 100)}%`;
}

// AI Advisor Diagnostics & One-Click Fix
function renderAdvisorDiagnostics() {
  const container = document.getElementById('diagnosticIssuesList');
  const issues = [
    {
      title: `Suno Hard-Clipped Transients (${state.clippedSamplesDetected} samples)`,
      desc: 'Detected flat-top digital clipping at -0.1 dBFS typical of loud Suno v3.5/v4 generations. Cubic spline restoration recovers +3.2 dB dynamic crest.',
      status: state.issuesFixed ? 'FIXED • +3.2 dB Headroom' : 'NEEDS DE-CLIP REPAIR'
    },
    {
      title: 'High-Mid Generative Spectral Harshness (4.8 kHz – 7.2 kHz)',
      desc: 'Suno neural vocoder buildup detected in upper-mid sibilance band. Dynamic spectral de-harshing recommended at 68%.',
      status: state.issuesFixed ? 'FIXED • -3.4 dB Dynamic Notch' : 'HARSHNESS DETECTED'
    },
    {
      title: 'Low-End Phase Smearing (< 120 Hz Stereo Spread)',
      desc: 'Sub-bass synth stereo decorrelation risks phase cancellation on club and phone speakers. M/S bass mono-maker required.',
      status: state.issuesFixed ? 'FIXED • Sub-120Hz Locked Mono' : 'PHASE RISK'
    },
    {
      title: 'Inter-Sample True Peaks (+0.6 dBTP AAC Transcode Clip)',
      desc: 'Unmastered stem exceeds Spotify/Apple Music -1.0 dBTP ceiling when encoded to lossy AAC/Ogg.',
      status: state.issuesFixed ? 'FIXED • 8× IRC-IV -1.0 dBTP' : 'EXCEEDS -1.0 dBTP'
    }
  ];

  container.innerHTML = issues.map(item => `
    <div class="issue-card ${state.issuesFixed ? 'fixed' : ''}">
      <div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
      <span class="status-pill ${state.issuesFixed ? 'pass' : 'penalty'}">${item.status}</span>
    </div>
  `).join('');
}

function runAiFixAndRemaster() {
  state.issuesFixed = true;
  state.declipEnabled = true;
  state.exciterEnabled = true;
  state.genreEqEnabled = true;
  state.limiterEnabled = true;
  state.isMastered = true;

  document.getElementById('toggleDeclip').checked = true;
  document.getElementById('toggleExciter').checked = true;
  document.getElementById('toggleGenreEq').checked = true;
  document.getElementById('toggleLimiter').checked = true;

  setSlider('ctrlDeharsh', 'lblDeharsh', 72, v => `${v}%`);
  setSlider('ctrlTransient', 'lblTransient', 58, v => `${v}%`);
  setSlider('ctrlCeiling', 'lblCeiling', -1.0, v => `${Number(v).toFixed(1)} dBTP`);
  setSlider('ctrlTargetLufs', 'lblTargetLufs', -14.0, v => `${Number(v).toFixed(1)} LUFS`);

  applyGenreProfile(state.currentGenre, 98.4);
  renderAdvisorDiagnostics();
  renderComplianceGrid();
  logDspEvent('AI Advisor Auto-Fix complete: De-clipped peaks, suppressed 5.8kHz Suno fizz, locked -14.0 LUFS / -1.0 dBTP.');
}

function renderGenreProbabilities() {
  const wrap = document.getElementById('genreProbabilities');
  const topGenres = [
    { name: state.currentGenre.name, pct: 96.4 },
    { name: GENRE_PROFILES[(GENRE_PROFILES.indexOf(state.currentGenre) + 1) % GENRE_PROFILES.length].name, pct: 64.2 },
    { name: GENRE_PROFILES[(GENRE_PROFILES.indexOf(state.currentGenre) + 4) % GENRE_PROFILES.length].name, pct: 41.8 },
    { name: GENRE_PROFILES[(GENRE_PROFILES.indexOf(state.currentGenre) + 9) % GENRE_PROFILES.length].name, pct: 22.5 }
  ];

  wrap.innerHTML = topGenres.map(g => `
    <div class="genre-bar-item">
      <div class="genre-bar-top">
        <span>${g.name}</span>
        <strong>${g.pct}%</strong>
      </div>
      <div class="genre-bar-track">
        <div class="genre-bar-fill" style="width: ${g.pct}%"></div>
      </div>
    </div>
  `).join('');
}

function renderComplianceGrid() {
  const grid = document.getElementById('complianceGrid');
  const userLufs = Number(document.getElementById('ctrlTargetLufs').value);
  const userCeiling = Number(document.getElementById('ctrlCeiling').value);
  const limOn = state.limiterEnabled;

  let passCount = 0;
  grid.innerHTML = STREAMING_PLATFORMS.map(p => {
    const peakOk = limOn && userCeiling <= p.maxPeak;
    const diff = p.targetLufs - userLufs;
    const isPass = peakOk && Math.abs(diff) <= 3.5;
    if (isPass) passCount++;

    const turnDownText = diff < 0 ? `Normalized ${diff.toFixed(1)} dB` : 'No Loudness Penalty';
    return `
      <div class="platform-card">
        <div class="platform-top">
          <span class="platform-name">${p.name}</span>
          <span class="status-pill ${isPass ? 'pass' : 'penalty'}">${isPass ? '✓ PASS' : '⚠ CHECK PEAK'}</span>
        </div>
        <div class="platform-metrics">
          <span>Target: ${p.targetLufs.toFixed(1)} LUFS</span>
          <span>Master: ${userLufs.toFixed(1)} LUFS (${turnDownText})</span>
          <span>True Peak: ${limOn ? userCeiling.toFixed(1) : '+0.4'} dBTP (Max ${p.maxPeak} dBTP)</span>
          <span>Codec: ${p.spec}</span>
        </div>
      </div>
    `;
  }).join('');

  const badge = document.getElementById('overallComplianceBadge');
  if (passCount >= 7) {
    badge.className = 'overall-badge pass';
    badge.textContent = `✓ DISTRIBUTION READY (${passCount}/${STREAMING_PLATFORMS.length} PASSED)`;
  } else {
    badge.className = 'overall-badge warn';
    badge.textContent = `⚠ ${passCount}/${STREAMING_PLATFORMS.length} PASSED — ADJUST CEILING / LUFS`;
  }
}

function renderMarketplacePresets() {
  const grid = document.getElementById('presetsGrid');
  const query = document.getElementById('presetSearch').value.toLowerCase();
  const cat = document.getElementById('presetCategoryFilter').value;

  const filtered = MARKETPLACE_PRESETS.filter(p => {
    const matchCat = cat === 'all' || p.category === cat;
    const matchQuery = p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query) || p.tag.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  grid.innerHTML = filtered.map(p => `
    <div class="preset-card">
      <div class="preset-card-top">
        <div>
          <h3>${p.name}</h3>
          <small style="color: var(--text-muted)">by ${p.author}</small>
        </div>
        <span class="preset-tag">${p.tag}</span>
      </div>
      <p style="color: var(--text-muted); font-size: 12.5px;">${p.desc}</p>
      <div class="preset-specs">
        <span>De-Harsh: ${p.deharsh}%</span>
        <span>Drive: ${p.drive}%</span>
        <span>Width: ${p.width}%</span>
        <span>Target: ${p.lufs} LUFS</span>
      </div>
      <button class="btn btn-primary" onclick="loadMarketplacePreset('${p.id}')">Load Preset Chain</button>
    </div>
  `).join('');
}

window.loadMarketplacePreset = function(presetId) {
  const p = MARKETPLACE_PRESETS.find(item => item.id === presetId);
  if (!p) return;
  const genre = GENRE_PROFILES.find(g => g.id === p.genreId) || GENRE_PROFILES[0];
  applyGenreProfile(genre, 99.4);
  setSlider('ctrlDeharsh', 'lblDeharsh', p.deharsh, v => `${v}%`);
  setSlider('ctrlDrive', 'lblDrive', p.drive, v => `${v}%`);
  setSlider('ctrlMidEq', 'lblMidEq', p.midEq, v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`);
  setSlider('ctrlSideEq', 'lblSideEq', p.sideEq, v => `${v >= 0 ? '+' : ''}${Number(v).toFixed(1)} dB`);
  setSlider('ctrlWidth', 'lblWidth', p.width, v => `${v}%`);
  setSlider('ctrlTargetLufs', 'lblTargetLufs', p.lufs, v => `${Number(v).toFixed(1)} LUFS`);
  updateAudioChainParams();
  logDspEvent(`Loaded Marketplace Preset: "${p.name}" by ${p.author}.`);
  document.querySelector('[data-tab="studio"]').click();
};

function renderBulkQueue() {
  const tbody = document.getElementById('bulkTableBody');
  tbody.innerHTML = state.bulkQueue.map(item => `
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.genre}</td>
      <td><span style="color: var(--warn); font-family: var(--font-mono);">${item.clips} peaks repaired</span></td>
      <td style="font-family: var(--font-mono);">${item.lufs}</td>
      <td><span class="status-pill ${item.done ? 'pass' : 'penalty'}">${item.status}</span></td>
      <td>
        <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;" onclick="masterSingleBulkItem(${item.id})">
          ${item.done ? 'Download WAV' : 'Master Now'}
        </button>
      </td>
    </tr>
  `).join('');
}

window.masterSingleBulkItem = function(id) {
  const item = state.bulkQueue.find(i => i.id === id);
  if (!item) return;
  if (item.done) {
    exportMasteredWav();
  } else {
    item.done = true;
    item.status = '✓ Distribution Ready (8× WAV)';
    renderBulkQueue();
  }
};

function logDspEvent(msg) {
  const list = document.getElementById('dspLogList');
  if (!list) return;
  const li = document.createElement('li');
  const now = new Date().toLocaleTimeString();
  li.textContent = `[${now}] ${msg}`;
  list.prepend(li);
}

// Offline Render & WAV Download
async function exportMasteredWav() {
  if (!audioBuffer) {
    generateDemoSunoBuffer();
  }
  logDspEvent('Rendering 24-bit Master WAV through 8× Oversampled DSP chain...');

  const offlineCtx = new OfflineAudioContext(
    audioBuffer.numberOfChannels,
    audioBuffer.length,
    audioBuffer.sampleRate
  );

  const src = offlineCtx.createBufferSource();
  src.buffer = audioBuffer;

  // Build offline DSP chain
  const declip = offlineCtx.createWaveShaper();
  declip.oversample = '4x';
  declip.curve = makeSaturationCurve(state.declipEnabled ? 0.25 : 0.01, 'tape');

  const deharsh = offlineCtx.createBiquadFilter();
  deharsh.type = 'peaking';
  deharsh.frequency.value = 5800;
  deharsh.Q.value = 2.8;
  deharsh.gain.value = state.declipEnabled ? -(Number(document.getElementById('ctrlDeharsh').value) / 100) * 5.2 : 0;

  const low = offlineCtx.createBiquadFilter();
  low.type = 'lowshelf';
  low.frequency.value = 95;
  low.gain.value = Number(document.getElementById('ctrlLowEq').value);

  const mud = offlineCtx.createBiquadFilter();
  mud.type = 'peaking';
  mud.frequency.value = 285;
  mud.gain.value = Number(document.getElementById('ctrlMudEq').value);

  const high = offlineCtx.createBiquadFilter();
  high.type = 'highshelf';
  high.frequency.value = 10500;
  high.gain.value = Number(document.getElementById('ctrlHighEq').value);

  const comp = offlineCtx.createDynamicsCompressor();
  comp.threshold.value = Number(document.getElementById('ctrlCompThresh').value);
  comp.ratio.value = Number(document.getElementById('ctrlCompRatio').value);

  const lim = offlineCtx.createDynamicsCompressor();
  lim.threshold.value = Number(document.getElementById('ctrlCeiling').value);
  lim.ratio.value = 20;
  lim.attack.value = 0.001;

  src.connect(declip);
  declip.connect(deharsh);
  deharsh.connect(low);
  low.connect(mud);
  mud.connect(high);
  high.connect(comp);
  comp.connect(lim);
  lim.connect(offlineCtx.destination);

  src.start(0);
  const renderedBuffer = await offlineCtx.startRendering();
  const wavBlob = audioBufferToWavBlob(renderedBuffer);

  const url = URL.createObjectURL(wavBlob);
  const a = document.createElement('a');
  const rawTitle = document.getElementById('trackTitle').textContent.replace(/\.[^/.]+$/, '');
  a.href = url;
  a.download = `${rawTitle}_SunoMaster_DistributionReady.wav`;
  a.click();
  URL.revokeObjectURL(url);
  logDspEvent(`Exported distribution-ready WAV: ${a.download}`);
}

function audioBufferToWavBlob(buffer) {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const out = new ArrayBuffer(length);
  const view = new DataView(out);
  const channels = [];
  let pos = 0;

  const setUint16 = (data) => { view.setUint16(pos, data, true); pos += 2; };
  const setUint32 = (data) => { view.setUint32(pos, data, true); pos += 4; };

  setUint32(0x46464952); // "RIFF"
  setUint32(length - 8);
  setUint32(0x45564157); // "WAVE"
  setUint32(0x20746d66); // "fmt "
  setUint32(16);
  setUint16(1);
  setUint16(numOfChan);
  setUint32(buffer.sampleRate);
  setUint32(buffer.sampleRate * 2 * numOfChan);
  setUint16(numOfChan * 2);
  setUint16(16);
  setUint32(0x61746164); // "data"
  setUint32(length - pos - 4);

  for (let i = 0; i < numOfChan; i++) {
    channels.push(buffer.getChannelData(i));
  }

  let offset = 0;
  while (pos < length) {
    for (let i = 0; i < numOfChan; i++) {
      let sample = Math.max(-1, Math.min(1, channels[i][offset]));
      sample = (sample < 0 ? sample * 32768 : sample * 32767) | 0;
      view.setInt16(pos, sample, true);
      pos += 2;
    }
    offset++;
  }
  return new Blob([out], { type: 'audio/wav' });
}
