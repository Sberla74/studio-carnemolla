// Service Worker – Studio Carnemolla
// Rende l'app installabile come PWA

self.addEventListener('install', function() {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});

// Passa sempre dalla rete (app richiede connessione per Firebase)
self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});
