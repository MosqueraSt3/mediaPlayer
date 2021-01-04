const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const req = event.request
    // get
    if(req.method != 'GET'){
        return 
    }

    event.respondWith(cacheResponse())

    event.waitUntil(updateCache())
})

async function precache() {
    const cache = await caches.open(VERSION)
    cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/BigBuckBunny.mp4'
    ])
}

async function cacheResponse(req) {
    const cache = await caches.open(VERSION)
    const res = await cache.match(req)

    return res || fetch(req)
}

async function updateCache(req) {
    const cache = await caches.open(VERSION)
    const res = await fetch(req)
    return cache.put(req, res)
}