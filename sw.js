self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["epistimatika.png,11.html,11.png,AB.png,Ads.txt,JosefinSans-Bold.ttf,Share.js,SourceSansPro-Bold.ttf,SourceSansPro-Regular.ttf,about.html,au.png,aup.png,books.html,c.png,coming soon.png,cs.png,cs1pu.html,cu.png,cursor.jpg,cursor.png,dr.png,epistimatika.png,epistamatika.png,fc.html,img6.png,index.html,index.js,io.png,main.css,pjee.html,pjee.png,psm.png,rcd.js,sc.png,style.css,styles.css,sw.js,wbh.png,um.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});
