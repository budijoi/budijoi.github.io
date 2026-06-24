self.addEventListener("install", function() { self.skipWaiting(); });
self.addEventListener("activate", function(e) { e.waitUntil(clients.claim()); });
self.addEventListener("fetch", function(e) { e.respondWith(fetch(e.request).catch(function() { return new Response("Offline", { status: 503 }); })); });
