var videos = [
  { id: "XqZsoesa55w", title: "Baby Shark Dance", channel: "Pinkfong", cat: "lagu" },
  { id: "e_04ZrNroTo", title: "Wheels on the Bus", channel: "CoComelon", cat: "lagu" },
  { id: "F4tHL8reNCs", title: "Johny Johny Yes Papa", channel: "LooLoo Kids", cat: "lagu" },
  { id: "ZzAm13KsBCc", title: "Bath Song + More", channel: "CoComelon", cat: "lagu" },
  { id: "_6HzoUcx3eo", title: "Old MacDonald Had A Farm", channel: "Super Simple Songs", cat: "lagu" },
  { id: "QT2B0HoDH5g", title: "Blippi Ultimate Roadtrip", channel: "Blippi", cat: "petualangan" },
  { id: "xdQlJwG_MJM", title: "Blippi di Walt Disney World", channel: "Blippi", cat: "petualangan" },
  { id: "8_V80B2j1U8", title: "Blippi Belajar Traktor", channel: "Blippi", cat: "edukasi" },
  { id: "CBbjUQhzFEg", title: "Peppa Pig Tales 2025", channel: "Peppa Pig", cat: "kartun" },
  { id: "s8nCo3RtqRE", title: "Baby Shark 10B Views Spesial", channel: "Pinkfong", cat: "lagu" },
  { id: "N5YSbaUl9Y4", title: "5 Little Ducks (Warna)", channel: "Lalafun", cat: "lagu" },
  { id: "k7D7a-btgug", title: "Bath Song", channel: "CoComelon", cat: "lagu" },
  { id: "9FDuUd39NOI", title: "Wheels on the Bus (Play)", channel: "CoComelon", cat: "lagu" },
  { id: "2iEpWefmdQI", title: "Best of Wheels on the Bus", channel: "CoComelon", cat: "lagu" },
  { id: "HHfEEUggHGk", title: "5 Little Ducks + More", channel: "CoComelon", cat: "lagu" },
  { id: "IPf2cA1KUdE", title: "Baby Shark Dance Compilation", channel: "Pinkfong", cat: "lagu" },
  { id: "D7MhgeV9yA8", title: "Old MacDonald + More", channel: "Super Simple Songs", cat: "lagu" },
  { id: "O1PnPqy1p7o", title: "1 Jam Blippi Edukasi", channel: "Blippi", cat: "edukasi" },
  { id: "WDbG8d4q1Ik", title: "Johny Johny Yes Papa Official", channel: "LooLoo Kids", cat: "lagu" },
  { id: "t1WyHMc321g", title: "Peppa Pig Petualangan Musim Panas", channel: "Peppa Pig", cat: "kartun" },
  { id: "YdBqbrF28e4", title: "Johny Johny Yes Papa Classic", channel: "LooLoo Kids", cat: "lagu" },
  { id: "oMzmrp5Kdo0", title: "Johny Johny Yes Papa NR", channel: "LooLoo Kids", cat: "lagu" },
  { id: "LIY8eV3Vu9E", title: "Johny Johny Dance Along", channel: "LooLoo Kids", cat: "lagu" },
  { id: "lchFVJgbf9Y", title: "Wheels on the Bus To School", channel: "CoComelon", cat: "lagu" },
  { id: "GHmgT8WPGxo", title: "Johny Johny Yes Papa CM", channel: "LooLoo Kids", cat: "lagu" },
  { id: "98PPVJ05Mi4", title: "Wheels on the Bus 15 Min", channel: "CoComelon", cat: "lagu" },
  { id: "wV3N-wCRL2k", title: "Wheels on the Bus + More", channel: "CoComelon", cat: "lagu" },
  { id: "psnJCW0XEkY", title: "Wheels on the Bus Learning", channel: "CoComelon", cat: "edukasi" },
  { id: "7GjOOyBoELw", title: "Johny Johny Yes Papa Fun", channel: "LooLoo Kids", cat: "lagu" }
];

var invidiousInstances = [
  "https://invidious.snopyta.org",
  "https://yewtu.be",
  "https://inv.riverside.rocks",
  "https://invidious.private.coffee",
  "https://inv.bp.projectsegfau.lt"
];

var activeCat = "all";
var searchQuery = "";
var currentId = null;
var instanceIndex = 0;
var loadCheckTimer = null;
var embedAttempted = false;

var videoGrid = document.getElementById("videoGrid");
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");
var modalOverlay = document.getElementById("modalOverlay");
var modalTitle = document.getElementById("modalTitle");
var videoPlayer = document.getElementById("videoPlayer");
var fallbackMsg = document.getElementById("fallbackMsg");
var ytLinkBtn = document.getElementById("ytLinkBtn");
var modalClose = document.getElementById("modalClose");
var catBtns = document.querySelectorAll(".cat-btn");

function getThumbnail(id) {
  return "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
}

function renderVideos() {
  var filtered = [];
  for (var i = 0; i < videos.length; i++) {
    var v = videos[i];
    var matchCat = activeCat === "all" || v.cat === activeCat;
    var q = searchQuery.toLowerCase();
    var matchSearch = !q ||
      v.title.toLowerCase().indexOf(q) !== -1 ||
      v.channel.toLowerCase().indexOf(q) !== -1;
    if (matchCat && matchSearch) {
      filtered.push(v);
    }
  }

  if (filtered.length === 0) {
    videoGrid.innerHTML = '<div class="no-results">Tidak ada video yang cocok dengan pencarianmu</div>';
    return;
  }

  var html = "";
  for (var i = 0; i < filtered.length; i++) {
    var v = filtered[i];
    html += '<div class="video-card cat-' + v.cat + '" data-id="' + v.id + '" data-title="' + v.title.replace(/"/g, "&quot;") + '">' +
      '<div class="thumbnail-wrap">' +
      '<img src="' + getThumbnail(v.id) + '" alt="' + v.title + '" loading="lazy">' +
      '<div class="play-badge">&#9654;</div>' +
      "</div>" +
      '<div class="video-info">' +
      "<h3>" + v.title + "</h3>" +
      '<div class="video-meta">' +
      "<span>" + v.channel + "</span>" +
      '<span class="video-cat-tag">' + v.cat + "</span>" +
      "</div></div></div>";
  }
  videoGrid.innerHTML = html;

  var cards = document.querySelectorAll(".video-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      openPlayer(this.dataset.id, this.dataset.title);
    });
  }
}

function openPlayer(id, title) {
  currentId = id;
  instanceIndex = 0;
  embedAttempted = false;
  modalTitle.textContent = title;
  ytLinkBtn.href = "https://www.youtube.com/watch?v=" + id;
  fallbackMsg.style.display = "none";
  videoPlayer.style.display = "block";
  loadInstance(id, 0);
  modalOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function loadInstance(id, idx) {
  if (idx >= invidiousInstances.length) {
    videoPlayer.style.display = "none";
    fallbackMsg.style.display = "block";
    return;
  }

  instanceIndex = idx;
  embedAttempted = true;
  var instance = invidiousInstances[idx];
  videoPlayer.src = instance + "/embed/" + id + "?autoplay=1&rel=0";

  if (loadCheckTimer) clearTimeout(loadCheckTimer);
  loadCheckTimer = setTimeout(function () {
    loadInstance(id, idx + 1);
  }, 6000);
}

videoPlayer.addEventListener("load", function () {
  if (loadCheckTimer) {
    clearTimeout(loadCheckTimer);
    loadCheckTimer = null;
  }
});

function closePlayer() {
  modalOverlay.classList.remove("show");
  document.body.style.overflow = "";
  videoPlayer.src = "";
  videoPlayer.style.display = "block";
  if (loadCheckTimer) {
    clearTimeout(loadCheckTimer);
    loadCheckTimer = null;
  }
  currentId = null;
  embedAttempted = false;
}

for (var i = 0; i < catBtns.length; i++) {
  catBtns[i].addEventListener("click", function () {
    for (var j = 0; j < catBtns.length; j++) {
      catBtns[j].classList.remove("active");
    }
    this.classList.add("active");
    activeCat = this.dataset.cat;
    renderVideos();
  });
}

searchBtn.addEventListener("click", function () {
  searchQuery = searchInput.value.trim();
  renderVideos();
});

searchInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    searchQuery = searchInput.value.trim();
    renderVideos();
  }
});

modalClose.addEventListener("click", closePlayer);

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) closePlayer();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closePlayer();
});

renderVideos();
