self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function(event) {
  // Just passthrough fetch for now
});
