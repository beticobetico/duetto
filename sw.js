const C="duetto-v18";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./app.js?v=18","./wallet.js?v=18","./manifest.json","./icon-192.png","./icon-512.png"])))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(fetch(e.request,{cache:"no-cache"}).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
// Web Push from duetto-push
self.addEventListener("push",e=>{
  let d={title:"Duetto",body:"",url:"/"};try{d=Object.assign(d,e.data.json())}catch(_){}
  e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:"icon-192.png",badge:"icon-192.png",data:{url:d.url}}));
});
self.addEventListener("notificationclick",e=>{
  e.notification.close();const url=new URL(e.notification.data?.url||"/",self.location.origin).href;
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(list=>{
    for(const c of list){if("focus" in c){c.navigate(url).catch(()=>{});return c.focus()}}
    return self.clients.openWindow(url);
  }));
});
