const PREFIX='study-tracker-'+self.registration.scope;
const CACHE=PREFIX+'v2.0.1';
const FILES=['./','./index.html','./style.css','./app.js','./core.js','./model.js','./store.js','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||!e.request.url.startsWith(self.registration.scope))return;e.respondWith(caches.open(CACHE).then(async c=>{const cached=await c.match(e.request);if(cached)return cached;try{return await fetch(e.request);}catch(err){if(e.request.mode==='navigate')return c.match('./index.html');throw err;}}));});


