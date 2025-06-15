
const cacheName = "veoprompt-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon.png"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
});
self.addEventListener("fetch", function (e) {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
