var VIDEOS = [
  { id: "QT2B0HoDH5g", title: "Blippi Ultimate Roadtrip", channel: "Blippi", cat: "petualangan" },
  { id: "8_V80B2j1U8", title: "Blippi Belajar Traktor", channel: "Blippi", cat: "edukasi" },
  { id: "O1PnPqy1p7o", title: "1 Jam Blippi Edukasi", channel: "Blippi", cat: "edukasi" },
  { id: "hmxX1fJSnxo", title: "Menyamar Di Tower Mecha Chameleon", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "lsU33r4Ht18", title: "Bekerja Dirumah Sakit Hewan", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "jXmfua5Z72g", title: "Pilih HP IPHONE 17 Atau Samsung?", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "neUCuq_XoqY", title: "Membuat Pasukan Klone Paling Kuat", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "KVGaZnunwKI", title: "Bertahan Dari Tantangan 7 Hari Mr Beast", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "ra5cpdmVRzc", title: "Mencari Semua SCP", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "NN7pe0rFfaA", title: "Main Uno Di Atas Tower Hancur", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "C34L3bMFA4w", title: "Tidak Boleh Bersuara Atau Meninggoy", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "9DiEtI5f51M", title: "Jual Lemon Sampe Jadi Kaya", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "8uHn83lbdkw", title: "Cari Squishy Needoh Paling Empuk", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "-6kCEYFPLc0", title: "Yuta Dan Mio Lihat Hantu Pocong Vs Thomas Exe", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "MRa6QdLLV5g", title: "Dikejar CHOO CHOO CHARLES", channel: "Dunia Farash ROBLOX", cat: "gaming" },
  { id: "cPlrUPqLnpQ", title: "Pelihara Sapi Qurban Idul Adha", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "JrfoMnoKYaU", title: "Antar MBG Ke Sekolah Terpencil", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "JqZqBtpV3aQ", title: "Tambah Kecepatan Di ASMR Keyboard", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "IbCZa0rmT0k", title: "Jualan Mie Ayam Sidoarjo", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "ZuuW9ctOEnI", title: "Jadi Kelelawar Karena Yuta Dan Mio", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "jhlBcXXZ0Jo", title: "Balapan Di Tower Swing", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "1Q4PCn8IEIg", title: "Naik Tower Kicau Mania", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "k6fh9f5iP3E", title: "Jaga Dirumah Sakit Hewan", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "EoKmmULT8I0", title: "Kerjasama Kabur Dari Sekolah", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "eXEDsEKG9tY", title: "Bayi Monster The Bloop Tersesat", channel: "FranzRX1", cat: "gaming" },
  { id: "2x6V_oMVveg", title: "Kabur Dari Hantu The Boiled One", channel: "FranzRX1", cat: "gaming" },
  { id: "151_yPKqBCg", title: "Panik Ada Bencana Kiamat Villager", channel: "FranzRX1", cat: "gaming" },
  { id: "nA2co8Otz0U", title: "Sembunyi Dari Hantu Leher Panjang", channel: "FranzRX1", cat: "gaming" },
  { id: "vj_jEix9eP0", title: "Prank Teman Jadi Monster", channel: "FranzRX1", cat: "gaming" },
  { id: "Y9Pu9lnVQcM", title: "Prank Teman Jadi Ular Mengerikan", channel: "FranzRX1", cat: "gaming" },
  { id: "eBYsX6x5D5A", title: "Kereta Kecil di Dunia Dessert", channel: "BabyBus - Cerita & Lagu Anak-anak", cat: "edukasi" },
  { id: "gsarOC0J-vI", title: "Tantangan Menemukan Pencuri", channel: "BabyBus - Cerita & Lagu Anak-anak", cat: "edukasi" },
  { id: "eB7eUXmD-h0", title: "Jaga Barang dengan Baik", channel: "BabyBus - Cerita & Lagu Anak-anak", cat: "edukasi" },
  { id: "vTVuup5_LIE", title: "Keamanan Eskalator", channel: "BabyBus - Cerita & Lagu Anak-anak", cat: "edukasi" },
  { id: "CQKylG3wYOs", title: "Lima Sayur dan Buah Masak Kari", channel: "BabyBus - Cerita & Lagu Anak-anak", cat: "edukasi" },
  { id: "dJB9uxlrTtk", title: "Microwave Ajaib Bayi Alien", channel: "BabyBus - Cerita & Lagu Anak-anak", cat: "edukasi" },
  { id: "1WE1_AY8wEA", title: "Apa Bekal Makan Siangmu?", channel: "Little Angel Bahasa Indonesia", cat: "lagu" },
  { id: "Bn2eP5mCJWs", title: "Parade Busana Lucu", channel: "Little Angel Bahasa Indonesia", cat: "lagu" },
  { id: "DuvYymyyLPQ", title: "Lagu Monyet Lucu", channel: "Little Angel Bahasa Indonesia", cat: "lagu" },
  { id: "NqnVN7bjooo", title: "Main Sepakbola Cetak Gol!", channel: "Little Angel Bahasa Indonesia", cat: "lagu" },
  { id: "U8cZ8mb6p3Q", title: "Jill Ingin Jadi Balerina", channel: "Little Angel Bahasa Indonesia", cat: "lagu" },
  { id: "3nOBb4WEWm0", title: "Petualangan Safari Seru", channel: "BaLiTa - Baba Lili Tata", cat: "edukasi" },
  { id: "4DcHPhe0vnE", title: "Lagi Berenang Seru", channel: "BaLiTa - Baba Lili Tata", cat: "edukasi" },
  { id: "heGFErtqqUo", title: "Balap Sepeda Roda 4 vs Roda 2", channel: "BaLiTa - Baba Lili Tata", cat: "edukasi" },
  { id: "645Ii_-1QPA", title: "Apa Cita-citamu?", channel: "BaLiTa - Baba Lili Tata", cat: "edukasi" },
  { id: "80qGGezgzS0", title: "Bintang Kecil", channel: "BaLiTa - Baba Lili Tata", cat: "edukasi" },
  { id: "IOu2jcTk9JQ", title: "Kenapa Anak Kecil Punya Teman Khayalan?", channel: "Kok Bisa?", cat: "edukasi" },
  { id: "d7O6Eujw7tQ", title: "Apa Jadinya Jika ASEAN Punya Satu Mata Uang?", channel: "Kok Bisa?", cat: "edukasi" },
  { id: "iWv_ZyP3peI", title: "Apa Jadinya Jika Berhenti Konsumsi Gula?", channel: "Kok Bisa?", cat: "edukasi" },
  { id: "sTPRtmpQi1Y", title: "Cara Gila Nyetop Penuaan", channel: "Kok Bisa?", cat: "edukasi" },
  { id: "I4h4B3i0234", title: "Lekas Sembuh Iboy - Teaser", channel: "NussaOfficial", cat: "kartun" },
  { id: "xWmhXQghkJc", title: "Nonton Bareng Cerita Baru Nussa Rarra", channel: "NussaOfficial", cat: "kartun" },
  { id: "BqaVPgmOd8c", title: "Chef Rarra Lagi Masak Apa Ya?", channel: "NussaOfficial", cat: "kartun" },
  { id: "XqZsoesa55w", title: "Baby Shark Dance", channel: "Pinkfong", cat: "lagu" },
  { id: "tbbWnLx-BPo", title: "Baby Shark Cocomelon", channel: "CoComelon", cat: "lagu" },
  { id: "yCjJyiqpAuU", title: "Baby Shark Super Simple Songs", channel: "Super Simple Songs", cat: "lagu" },
  { id: "N5YSbaUl9Y4", title: "5 Little Ducks Lalafun", channel: "Lalafun", cat: "lagu" },
  { id: "H1P7Qk2fwHk", title: "LooLoo Kids Johny Johny", channel: "LooLoo Kids", cat: "lagu" },
  { id: "jTQO_aETdEE", title: "Peppa Pig Indonesia Naik Sepeda", channel: "Peppa Pig", cat: "kartun" },
  { id: "azog8Z2jJ3I", title: "Berkreasi bersama Blippi!", channel: "Blippi Indonesia", cat: "edukasi" },
  { id: "udauRXpT7NM", title: "Sebuah Suguhan yang Lezat", channel: "Blippi Indonesia", cat: "edukasi" },
  { id: "N5WwLsYuKl0", title: "Membuat Gelembung", channel: "Blippi Indonesia", cat: "edukasi" },
  { id: "akKxZyA0qmk", title: "Memanggang Makaroni yang Lezat", channel: "Blippi Indonesia", cat: "edukasi" }
];

var CATEGORIES = { semua: "all", edukasi: "edukasi", lagu: "lagu", kartun: "kartun", petualangan: "petualangan", gaming: "gaming" };

var CHANNEL_FEEDS = {
  "Pinkfong": { id: "UCcdwLMPsaU2ezNSJU1nFoBQ", cat: "lagu" },
  "CoComelon": { id: "UCbCmjCuTUZos6Inko4u57UQ", cat: "lagu" },
  "Super Simple Songs": { id: "UCLsooMJoIpl_7ux2jvdPB-Q", cat: "lagu" },
  "LooLoo Kids": { id: "UC4NALVCmcmL5ntpV0thoH6w", cat: "lagu" },
  "Blippi": { id: "UC5PYHgAzJ1wLEidB58SK6Xw", cat: "petualangan" },
  "Peppa Pig": { id: "UCAOtE1V7Ots4DjM8JLlrYgg", cat: "kartun" },
  "Lalafun": { id: "UC5mNk1y0O1awxC8DucC8r0w", cat: "lagu" },
  "Dunia Farash ROBLOX": { id: "UChu9w8GFik0spCfQGF_i9WQ", cat: "gaming" },
  "Popo Mimi ROBLOX": { id: "UCnzbx11s43-5ncWWwejPVHg", cat: "gaming" },
  "FranzRX1": { id: "UCUMKbZT3R4myY41_bReI3Cg", cat: "gaming" },
  "BabyBus - Cerita & Lagu Anak-anak": { id: "UC5v3gjCQLFeg8eBXO7ShdpQ", cat: "edukasi" },
  "Little Angel Bahasa Indonesia": { id: "UCdrHrQf0o0TO8YDntXJ4VIQ", cat: "lagu" },
  "BaLiTa - Baba Lili Tata": { id: "UC5Tg_aUYKBtpnGipTVqDDuQ", cat: "edukasi" },
  "Kok Bisa?": { id: "UCu0yQD7NFMyLu_-TmKa4Hqg", cat: "edukasi" },
  "NussaOfficial": { id: "UCV2jNjJEtO0Hr3b1Es3xPJg", cat: "kartun" },
  "Blippi Indonesia": { id: "UCIOO268dRFA8Gae-ksXrpvw", cat: "edukasi" }
};

var RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=";
var MAX_RSS = 5;
var dynamicVideos = [];
var dynamicLoaded = false;

var IS_FILE = window.location.protocol === "file:";

var EMBEDS = [];
if (!IS_FILE) {
  EMBEDS.push({ name: "YouTube", url: "https://www.youtube.com/embed/" });
}
EMBEDS.push({ name: "Piped", url: "https://piped.video/embed/" });

var OEMBED = "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=";

var state = {
  view: "home",
  cat: "all",
  query: "",
  videoId: null,
  loadTimer: null,
  metadata: {}
};

var el = {
  view: document.getElementById("viewContent"),
  search: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  nav: document.getElementById("mainNav"),
  logo: document.getElementById("logoLink"),
  player: document.getElementById("fullscreenPlayer"),
  title: document.getElementById("fpTitle"),
  wrapper: document.getElementById("videoWrapper"),
  fallback: document.getElementById("fallbackMsg"),
  ytLink: document.getElementById("ytLink"),
  channel: document.getElementById("fpChannel"),
  close: document.getElementById("fpClose")
};

function esc(s) {
  if (!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function thumb(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }

function dur(t) {
  if (!t) return "";
  var m = Math.floor(t / 60);
  var s = Math.floor(t % 60);
  return m + ":" + (s < 10 ? "0" : "") + s;
}

function channelName(raw) {
  if (!raw) return "";
  return raw.replace(/\s*[-–|].*$/, "").trim();
}

function getSafeVideos(cat, query) {
  var all = VIDEOS.concat(dynamicVideos);
  var out = [];
  for (var i = 0; i < all.length; i++) {
    var v = all[i];
    var matchCat = cat === "all" || v.cat === cat;
    var q = (query || "").toLowerCase();
    var matchSearch = !q || v.title.toLowerCase().indexOf(q) !== -1 || v.channel.toLowerCase().indexOf(q) !== -1;
    if (matchCat && matchSearch) out.push(v);
  }
  return out;
}

function getChannels() {
  var map = {};
  for (var i = 0; i < VIDEOS.length; i++) {
    map[VIDEOS[i].channel] = true;
  }
  return Object.keys(map).sort();
}

function catLabel(cat) {
  var m = { edukasi: "Edukasi", lagu: "Lagu Anak", kartun: "Kartun", petualangan: "Petualangan", gaming: "Gaming" };
  return m[cat] || cat;
}

function catClass(cat) {
  return ["edukasi","lagu","kartun","petualangan","gaming"].indexOf(cat) !== -1 ? cat : "";
}

// ================= OEMBED =================

function fetchMeta(videoId, cb) {
  if (state.metadata[videoId]) { cb(null, state.metadata[videoId]); return; }

  var s = document.createElement("script");
  s.src = OEMBED + videoId + "&format=json&callback=handleOembed";
  window.handleOembed = function(data) {
    delete window.handleOembed;
    state.metadata[videoId] = data;
    cb(null, data);
  };
  s.onerror = function() { cb(new Error("oEmbed failed")); };
  document.head.appendChild(s);
}

// ================= DYNAMIC RSS =================

function isDup(id) {
  for (var i = 0; i < VIDEOS.length; i++) { if (VIDEOS[i].id === id) return true; }
  for (var i = 0; i < dynamicVideos.length; i++) { if (dynamicVideos[i].id === id) return true; }
  return false;
}

function loadDynamicVideos() {
  if (dynamicLoaded) return;
  dynamicLoaded = true;
  var names = Object.keys(CHANNEL_FEEDS);
  var pending = names.length;

  names.forEach(function(chName) {
    var info = CHANNEL_FEEDS[chName];
    var rss = "https://www.youtube.com/feeds/videos.xml?channel_id=" + info.id;
    var url = RSS_URL + encodeURIComponent(rss);

    fetch(url).then(function(r) { return r.json(); }).then(function(data) {
      if (data && data.items) {
        data.items.forEach(function(item) {
          var m = item.link.match(/v=([a-zA-Z0-9_-]{11})/);
          if (m && !isDup(m[1])) {
            dynamicVideos.push({ id: m[1], title: item.title.substring(0, 60), channel: chName, cat: info.cat });
          }
        });
      }
    }).catch(function() {}).then(function() {
      pending--;
      if (pending === 0) { render(); }
    });
  });
}

// ================= RENDER =================

function render() {
  if (!IS_FILE) loadDynamicVideos();
  if (state.view === "home") renderHome();
  else if (state.view === "categories") renderCategories();
  else if (state.view === "channel") renderChannel(state.channelName);
  else if (state.view === "search") renderSearch(state.query);
}

function renderHome() {
  var cats = ["lagu", "edukasi", "kartun", "petualangan", "gaming"];
  var html = "";

  for (var c = 0; c < cats.length; c++) {
    var items = getSafeVideos(cats[c], "");
    if (items.length === 0) continue;
    html += '<div class="section">';
    html += '<h2 class="section-title"><span class="sec-cat-tag ' + catClass(cats[c]) + '">' + catLabel(cats[c]) + '</span></h2>';
    html += '<div class="video-grid">';
    for (var i = 0; i < Math.min(items.length, 8); i++) {
      html += cardHtml(items[i]);
    }
    html += '</div></div>';
  }

  if (!html) html = '<div class="no-results">Belum ada video</div>';
  el.view.innerHTML = html;
}

function renderCategories() {
  var cats = [
    { id: "all", label: "Semua" },
    { id: "edukasi", label: "Edukasi" },
    { id: "lagu", label: "Lagu Anak" },
    { id: "kartun", label: "Kartun" },
    { id: "petualangan", label: "Petualangan" },
    { id: "gaming", label: "Gaming" }
  ];

  var html = '<div class="cat-pills" id="catPills">';
  for (var i = 0; i < cats.length; i++) {
    html += '<button class="cat-pill' + (i === 0 ? ' active' : '') + '" data-cat="' + cats[i].id + '">' + cats[i].label + '</button>';
  }
  html += '</div><div class="video-grid" id="catGrid">';
  var items = getSafeVideos("all", "");
  for (var i = 0; i < items.length; i++) {
    html += cardHtml(items[i]);
  }
  html += '</div>';
  el.view.innerHTML = html;

  var btns = el.view.querySelectorAll(".cat-pill");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var parent = this.parentNode;
      var allBtns = parent.querySelectorAll(".cat-pill");
      for (var j = 0; j < allBtns.length; j++) allBtns[j].classList.remove("active");
      this.classList.add("active");
      var grid = document.getElementById("catGrid");
      var items = getSafeVideos(this.dataset.cat, "");
      grid.innerHTML = "";
      for (var k = 0; k < items.length; k++) {
        grid.innerHTML += cardHtml(items[k]);
      }
    });
  }
}

function renderChannel(chName) {
  var items = [];
  for (var i = 0; i < VIDEOS.length; i++) {
    if (VIDEOS[i].channel === chName) items.push(VIDEOS[i]);
  }
  el.view.innerHTML =
    '<div class="channel-header"><div class="channel-avatar" style="background:linear-gradient(135deg,#ff6b6b,#ffa94d)">' +
    '<span style="font-size:2rem;color:#fff;font-weight:800">' + esc(chName.charAt(0)) + '</span></div>' +
    '<div class="channel-info"><h1>' + esc(chName) + '</h1></div></div>' +
    '<div class="video-grid">';
  for (var i = 0; i < items.length; i++) {
    el.view.innerHTML += cardHtml(items[i]);
  }
  el.view.innerHTML += '</div>';
}

function renderSearch(query) {
  var items = getSafeVideos("all", query);
  var html = '<h2 style="font-size:1.3rem;margin:20px 0 16px;font-weight:800;">Hasil untuk "' + esc(query) + '"</h2>';
  if (items.length === 0) {
    html += '<div class="no-results">Tidak ada video yang cocok</div>';
  } else {
    html += '<div class="video-grid">';
    for (var i = 0; i < items.length; i++) html += cardHtml(items[i]);
    html += '</div>';
  }
  el.view.innerHTML = html;
}

function cardHtml(v) {
  return '<div class="video-card" data-id="' + v.id + '" data-title="' + esc(v.title) + '" data-channel="' + esc(v.channel) + '" data-cat="' + v.cat + '">' +
    '<div class="thumb-wrap">' +
    '<img src="' + thumb(v.id) + '" alt="' + esc(v.title) + '" loading="lazy">' +
    '<div class="play-badge">&#9654;</div></div>' +
    '<div class="video-info">' +
    '<h3>' + esc(v.title) + '</h3>' +
    '<div class="video-meta">' +
    '<span class="channel-link">' + esc(v.channel) + '</span>' +
    '</div></div></div>';
}

// ================= PLAYER =================

function openPlayer(videoId, title, channel) {
  state.videoId = videoId;
  el.title.textContent = title || "";
  el.channel.textContent = channel || "";
  el.ytLink.href = "https://www.youtube.com/watch?v=" + videoId;
  el.fallback.style.display = "none";
  el.wrapper.innerHTML = "";

  el.player.classList.add("show");
  document.body.style.overflow = "hidden";

  var idx = 0;

  function tryNext() {
    if (!el.player.classList.contains("show")) return;
    if (idx >= EMBEDS.length) {
      el.fallback.style.display = "block";
      return;
    }

    var inst = EMBEDS[idx];
    idx++;

    if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }

    var iframe = document.createElement("iframe");
    iframe.src = inst.url + videoId + "?autoplay=1&rel=0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    iframe.addEventListener("load", function() {
      if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }
    });

    el.wrapper.appendChild(iframe);

    state.loadTimer = setTimeout(function() {
      if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }
      tryNext();
    }, 7000);
  }

  tryNext();
}

function closePlayer() {
  el.player.classList.remove("show");
  document.body.style.overflow = "";
  el.wrapper.innerHTML = "";
  el.fallback.style.display = "none";
  if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }
  state.videoId = null;
}

// ================= NAVIGATION =================

function goHome() {
  state.view = "home";
  updateNav("home");
  render();
}

function goSearch(query) {
  if (!query.trim()) return;
  state.view = "search";
  state.query = query.trim();
  updateNav(null);
  render();
}

function goChannel(name) {
  state.view = "channel";
  state.channelName = name;
  updateNav(null);
  render();
}

function updateNav(view) {
  var links = el.nav.querySelectorAll(".nav-link");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle("active", links[i].dataset.view === view);
  }
}

// ================= EVENTS =================

el.view.addEventListener("click", function(e) {
  var card = e.target.closest(".video-card");
  if (card) {
    e.preventDefault();
    openPlayer(card.dataset.id, card.dataset.title, card.dataset.channel);
    return;
  }

  var channel = e.target.closest(".channel-link");
  if (channel) {
    e.preventDefault();
    var parent = channel.closest(".video-card");
    if (parent) goChannel(parent.dataset.channel);
  }
});

el.channel.addEventListener("click", function() {
  if (this.textContent) goChannel(this.textContent);
});

el.searchBtn.addEventListener("click", function() { goSearch(el.search.value); });
el.search.addEventListener("keyup", function(e) { if (e.key === "Enter") goSearch(this.value); });

el.nav.addEventListener("click", function(e) {
  var link = e.target.closest(".nav-link");
  if (!link) return;
  if (link.dataset.view === "home") goHome();
  else if (link.dataset.view === "categories") { state.view = "categories"; updateNav("categories"); render(); }
});

el.logo.addEventListener("click", goHome);
el.close.addEventListener("click", closePlayer);
document.addEventListener("keydown", function(e) { if (e.key === "Escape") closePlayer(); });

// ================= INIT =================
if ("serviceWorker" in navigator) { navigator.serviceWorker.register("sw.js"); }

if (IS_FILE) {
  var banner = document.getElementById("protocolBanner");
  if (banner) {
    banner.style.display = "block";
    banner.innerHTML = "&#128161; Halaman dibuka dari <code>file://</code>. YouTube Embed tidak diizinkan oleh browser. " +
      "Jalankan server lokal untuk pengalaman terbaik:<br><code>npx serve</code> atau <code>python -m http.server 8080</code>, " +
      "lalu buka <code>http://localhost:8080</code>";
  }
}
goHome();
