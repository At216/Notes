self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("staticnoisy").then(cache => {
            return cache.addAll([".", "/Notes/favicon_notes.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
//Check "."?
