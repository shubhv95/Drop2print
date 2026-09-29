const CACHE_NAME = 'drop2print-shell-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './assets/drop2print-logo.png',
  './assets/icons/favicon.ico',
  './assets/icons/favicon-16x16.png',
  './assets/icons/favicon-32x32.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
