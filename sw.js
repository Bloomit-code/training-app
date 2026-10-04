// Versione della cache: cambiarla ripulisce quelle vecchie
const CACHE_NAME = 'training-app-v2';
const FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Font di Google: si salvano al primo uso e restano disponibili offline
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        const copia = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, copia));
        return res;
      }))
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // File dell'app: prima la rete (sempre l'ultima versione), la cache solo se sei offline
  e.respondWith(
    fetch(new Request(req.url, { cache: 'no-cache' }))
      .then(res => {
        if (res.ok) {
          const copia = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copia));
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
