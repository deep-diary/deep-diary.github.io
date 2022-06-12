/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dcf965250ab66adbb0ad907dfb9992a4"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.43e2397b.js",
    "revision": "5af1e12534ef26ca82ca06fe184e37d1"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.f46f2fdb.js",
    "revision": "d8aafd5718580ee9b969bf33b4cb4200"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
  },
  {
    "url": "assets/js/15.7a99cfb9.js",
    "revision": "7446a6fe51e17d7d4e61aca1636cda06"
  },
  {
    "url": "assets/js/16.b4126a68.js",
    "revision": "49bd3bfe51d19e41b4e1572f74d5cd9d"
  },
  {
    "url": "assets/js/17.51d35a3e.js",
    "revision": "55481fc8883194f5debcff1a4647ed4a"
  },
  {
    "url": "assets/js/18.0dcebe79.js",
    "revision": "5d3da8e42f8901487960079e1f92d613"
  },
  {
    "url": "assets/js/4.632cb2b5.js",
    "revision": "d53d78f2915b550d3c9724e1c5de4845"
  },
  {
    "url": "assets/js/5.2a16f32e.js",
    "revision": "18b6c674cfe625f24aeaef8b3afe227b"
  },
  {
    "url": "assets/js/6.27ea4e14.js",
    "revision": "bee0a979c6054fa7fbf12430a9a2d267"
  },
  {
    "url": "assets/js/7.e6635361.js",
    "revision": "70a7b2deffbe74dbbb2bdbd4ff3bf4d0"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.34fc3aa4.js",
    "revision": "aa9b16c5468cdd3b24805703bc036afc"
  },
  {
    "url": "assets/js/app.efd8451b.js",
    "revision": "5bad8ca1d2ac882631a2c278896cd008"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "8ce5b3dd9782659d88a0792899a093db"
  },
  {
    "url": "categories/java/index.html",
    "revision": "329ab82dbe6ccb96d7aedb3f937ac420"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7c67d8d3754eb63cb67d6c38db8bbf80"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "871b310040f025727e07ff7bd8c61eec"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6a240152a18280a1237710f76273727c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "02ec686d2484c55afb7059972c7635f5"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "8391055b1ff0e26a1c5a8c9c0b8aea53"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ad2f2fac744f7b4e25d74088f77bf06e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "bb34b5c8c29579a236901f521d272c79"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "be5977bb09220bb2e06a30778945c341"
  },
  {
    "url": "tags/js/index.html",
    "revision": "737d94b6480ff18c03316f200416663e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d2c8efbfc99e9b83d68cabe40dba2e1f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e9133ff89f2d9eefdc12844ff6be512d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "41714d2094c2e6d366a8cee731c223dc"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f12e59591f4095d465899146ea396086"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3d0c0b9d5cc113e4874631c9d39b4c2b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "40186ebccfe032bd8e64c0efd6276e4d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b0888ed8d2d77e56dbe13e2072044ca1"
  },
  {
    "url": "timeline/index.html",
    "revision": "41569dbcb21977cf31f78c40fe911377"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a3e098cacf8c7a94d1df24d2668bc503"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "413e6cef0afa11f2bf09c86bb1b8bbf8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4274a3c4ed0809525174eb00ea784a25"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "04f03c64dd85638a7d04268b5cd770b5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "deb2ac18dffbe92f9177f0b34eb6e11d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
