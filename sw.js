// 인터넷이 되면 항상 새 파일을 받고(수정 내용 자동 반영), 끊기면 저장해 둔 걸 쓴다
const CACHE = 'sleep-guide';
const FILES = ['./', 'index.html', 'data.js', 'manifest.webmanifest', 'icon-192.png',
  'img/ezquil.jpg', 'img/sanzoin.jpg', 'img/melachew.jpg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request, { cache: 'no-store' })
    .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true })));
});
