// GitHub Pages offline service worker for Robo‑Grab
const CACHE = 'robograb-ghp-v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./sw.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(
    caches.match(req).then(res => res || fetch(req).then(net => {
      const copy = net.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return net;
    }))
  );
});
