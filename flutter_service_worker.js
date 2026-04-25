'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b1882c7f702161983333f856bc4b88d8",
"assets/AssetManifest.bin.json": "6a7048cc9c99c421680959dcedba2bcc",
"assets/AssetManifest.json": "e293cc3e8c2aa1855535ece31e2af50c",
"assets/assets/data/models.json": "6ce78986ff4d7e6f90d6df91009b7e02",
"assets/assets/logo/alfa-romeo.png": "618627b9236fb9c2ae1e31f7e9efd60b",
"assets/assets/logo/audi.png": "df48dc9101cb8c562235d3d0af2fbdc1",
"assets/assets/logo/bmw-m.png": "8178b0361c2c0d1e0da63b3a31124bb1",
"assets/assets/logo/bmw.png": "0f1991aa500e18db2d5717aa4c2ffb0f",
"assets/assets/logo/bugatti.png": "6df05a8186679ec821eb36a69c695720",
"assets/assets/logo/byd.png": "2f33cb00dee8fc56d5ec5684b957c4f2",
"assets/assets/logo/chery.png": "65906158bb3ca4bb00da5c7e45088e6a",
"assets/assets/logo/chevrolet.png": "ff96c0093c6a11c4a38e48950586eefd",
"assets/assets/logo/citroen.png": "12dd027e9494e5f217087be44ed180e4",
"assets/assets/logo/cupra.png": "8ecad79b0bd41df97abf06cd1962e451",
"assets/assets/logo/dacia.png": "08e4f5bb7a5877b2605366a740abc24d",
"assets/assets/logo/daf.png": "ac8306ce8d1213de12e6b3f3c7ffdadd",
"assets/assets/logo/daihatsu.png": "f8938b2fe80e78797f64c048a1e38779",
"assets/assets/logo/ferrari.png": "c34be558169fd06e023cf3e8438602f5",
"assets/assets/logo/fiat.png": "c3acb1b52bb605e9d2d6d364a5c71bf1",
"assets/assets/logo/ford.png": "4c54ee7715704f43785f08460bf4e029",
"assets/assets/logo/gmc.png": "ed7d5731c5f4da9df8631f35f7ad75e6",
"assets/assets/logo/honda.png": "2ccdef585d77671be3d941b8d9ff9701",
"assets/assets/logo/hyundai.png": "665f368736ca29b1238e1bf61a60467d",
"assets/assets/logo/infiniti.png": "9102fd85e1438941fb1892d60f8d0bd4",
"assets/assets/logo/isuzu.png": "e983f67f3f35318b31d42a71aa18ac54",
"assets/assets/logo/iveco.png": "640f83920f3e0c299b921ac8a3195660",
"assets/assets/logo/jaguar.png": "81d2a15787e92edfeb179fdaad25efd9",
"assets/assets/logo/jeep.png": "c5afe6ce6ef4e74976c4e9220d25bb48",
"assets/assets/logo/kia.png": "ea1a0b9d6e633bec94303a4e04dd2b0d",
"assets/assets/logo/lamborghini.png": "63429981d07fcb66d377d0c7d8ec3f97",
"assets/assets/logo/land-rover.png": "c5ed32041fdba408b5e1cbcaf216b20a",
"assets/assets/logo/man.png": "46b5e0c98da1e72493acc691b4a5552f",
"assets/assets/logo/maserati.png": "b1991a137bddabbbfbb84b5f9ef1e94d",
"assets/assets/logo/mazda.png": "efcd0d1855baea51a4d7eeeb2814c49a",
"assets/assets/logo/mclaren.png": "094bc6bc3bb26567e8a35db6cbaf4317",
"assets/assets/logo/mercedes-amg.png": "f619f844a811a9d602cf2632521d833f",
"assets/assets/logo/mercedes-benz.png": "5ac36adcbdbf8a5334c1310ef104e06c",
"assets/assets/logo/mg.png": "3dc164a96957a5ef32cdff56f9bec537",
"assets/assets/logo/mini.png": "1eba5c9c287c96dd1926b4cb8f40e47e",
"assets/assets/logo/mitsubishi.png": "8ab7decfee6710c2d7bc6b5a58a1a5d7",
"assets/assets/logo/nissan-gt-r.png": "cc573120f0eca4e75504b10587f00445",
"assets/assets/logo/nissan.png": "a1ddd82a6596bf38ba041be2d3d2cd78",
"assets/assets/logo/opel.png": "658fb72d028f8eda589ee5af7c534464",
"assets/assets/logo/peugeot.png": "24da6a8eeac204f2935204d31c148f96",
"assets/assets/logo/porsche.png": "91dd72242be667451157320757ef1dd8",
"assets/assets/logo/renault.png": "8be4184d4177d872e0684b48040b9a74",
"assets/assets/logo/rolls-royce.png": "1b23f67cdf617bf23df2e298264b14fd",
"assets/assets/logo/scania.png": "a44d3d2676387fcf5355e018c51d2a3e",
"assets/assets/logo/seat.png": "2c9b19785b64606f2d4a7693c3d69106",
"assets/assets/logo/skoda.png": "d2f74e7f8be94d8bbe52ee3f40e623a3",
"assets/assets/logo/ssangyong.png": "a023678e300c07ad78c0106731b54de5",
"assets/assets/logo/subaru.png": "57d92cfb10670c80144c1dec12513bbe",
"assets/assets/logo/suzuki.png": "89cbafb880ed5a10a725280e1e62f553",
"assets/assets/logo/tata.png": "578ebe9d2ed52208e632d0fc21ee7f82",
"assets/assets/logo/tesla.png": "3c696ae20f52f6e0cfe0a8a28d695ef0",
"assets/assets/logo/togg.png": "d52205f62e75f1e9bc2c8a339a221f2c",
"assets/assets/logo/toyota.png": "d76f0677c607536b386f4ba9326b2369",
"assets/assets/logo/volkswagen.png": "b6a48e6bd96b9d56a72b9f2397ebbf54",
"assets/assets/logo/volvo.png": "35e4be00644bf81c059e6eae940ec8b0",
"assets/assets/logo/Yeni%2520Metin%2520Belgesi.txt": "46dc447d3f1670d4cc5bb065aa618216",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "68e38c147c560976272a0d8cc9864feb",
"assets/NOTICES": "652f5d12f4ec7af42c5b0ba842af94cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5b73a84f50dbdad9ad5347663a232102",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b62f803b600e7a317233bd682cbe0553",
"/": "b62f803b600e7a317233bd682cbe0553",
"main.dart.js": "727153950edf132b27136d453942657f",
"manifest.json": "cfbea99b5b4a1d7e2b4e525210c8d6d8",
"version.json": "5d07cb1a9c59dec0dd059aac34bb3e79",
"web.zip": "8acf86b8fad1d013396418d4d0940ff7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
