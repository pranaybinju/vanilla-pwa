const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "../",
  "../index.html",
  "../css/style.css",
  "./app.js",
  "../images/coffee1.jpeg",
  "../images/coffee2.jpeg",
  "../images/coffee3.jpeg",
  "../images/coffee4.jpeg",
  "../images/coffee5.jpeg",
  "../images/coffee6.jpeg",
  "../images/coffee7.jpeg",
  "../images/coffee8.jpeg",
  "../images/coffee9.jpeg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
