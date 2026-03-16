const CACHE_NAME = 'aop-shop-v1';

// Files to cache for offline use
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install Event - Caches the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event - Serves cached files if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached response if found, otherwise fetch from network
        return response || fetch(event.request).catch(() => {
          // PWA SPA FIX: If the network fetch fails (user is offline) 
          // AND they are trying to navigate to a new page (like /contact),
          // serve the cached index.html so React Router can handle it!
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});