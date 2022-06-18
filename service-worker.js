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
    "revision": "1a67c7e00cfb68369f6cda1b4653bb0e"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
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
    "url": "assets/js/1.650e7656.js",
    "revision": "6bc839eb66bca8a03fb643ec6af57ef8"
  },
  {
    "url": "assets/js/10.51e38269.js",
    "revision": "b898d39bd117dcdff359ffe4c4a81668"
  },
  {
    "url": "assets/js/11.894fcbb9.js",
    "revision": "ade075bc69b73c931e9b88d952d4387a"
  },
  {
    "url": "assets/js/12.a3bde0f7.js",
    "revision": "31544cf593848c8dac31b4eb9454f43b"
  },
  {
    "url": "assets/js/13.74e87dde.js",
    "revision": "afa31f583e93f70df3cd0d92b8bdc8ad"
  },
  {
    "url": "assets/js/14.9572ac6a.js",
    "revision": "e29b51535a2c5f5adc34d6c8ff423d0a"
  },
  {
    "url": "assets/js/15.f1e0dc1f.js",
    "revision": "723538c154965f25d5a74de16edd9d50"
  },
  {
    "url": "assets/js/16.5a215ce1.js",
    "revision": "21de510cc73cf54bf14ed56a4b14b46c"
  },
  {
    "url": "assets/js/17.583cbeb0.js",
    "revision": "1e63bf02035205af2b07e0d1ab52c757"
  },
  {
    "url": "assets/js/18.f1e5ae1f.js",
    "revision": "15e6305534e827315806d1949f70b4dd"
  },
  {
    "url": "assets/js/19.db547aa5.js",
    "revision": "eec2a3f63d0570acfc28edb2a8f1f4e0"
  },
  {
    "url": "assets/js/20.9338592e.js",
    "revision": "27344915a79864e5479fb463ece7faf6"
  },
  {
    "url": "assets/js/21.3d4f1f24.js",
    "revision": "4c5672705efd6e40f5b4818886b0bb0f"
  },
  {
    "url": "assets/js/22.509d18d3.js",
    "revision": "46b2751b416f756a4abaa851e9b621d4"
  },
  {
    "url": "assets/js/23.665331b8.js",
    "revision": "9b565708c51a7d904f3a9cc34837dcf3"
  },
  {
    "url": "assets/js/24.f6bcf447.js",
    "revision": "119c5272128e6808a642ac16459c306b"
  },
  {
    "url": "assets/js/25.2f9be98b.js",
    "revision": "9f6bc89142110f5d1841109a8e500973"
  },
  {
    "url": "assets/js/26.1d614bc8.js",
    "revision": "0b6dec531dac8e93ea45c0f708f9c873"
  },
  {
    "url": "assets/js/27.5d3b235d.js",
    "revision": "ac856fd00d4e456b7a47431cd95970af"
  },
  {
    "url": "assets/js/28.1273b1be.js",
    "revision": "44c41e4bd7f7d1b0854d908d7f8c0c7b"
  },
  {
    "url": "assets/js/29.cf7adcf7.js",
    "revision": "fec8260a56869b74bcdd6bb2c50fd739"
  },
  {
    "url": "assets/js/30.7b798d08.js",
    "revision": "9d6db712943badfa23bb4f7945981bb2"
  },
  {
    "url": "assets/js/31.4dd62d79.js",
    "revision": "39cb3f40828a2176ff03f2ffa3c16fbc"
  },
  {
    "url": "assets/js/32.b749518e.js",
    "revision": "d6b8998ba454791e54d70e43debdfb44"
  },
  {
    "url": "assets/js/33.bd010100.js",
    "revision": "cb975638c5986cddda67b7954d5b0dab"
  },
  {
    "url": "assets/js/34.faa11e1b.js",
    "revision": "232788f8a6bc72d8b0edbcc47ca23b23"
  },
  {
    "url": "assets/js/35.4f569f56.js",
    "revision": "4f01322e2c7587dc450536cb4473efd8"
  },
  {
    "url": "assets/js/36.d80194a8.js",
    "revision": "29af479271876d89cf612da07521faf3"
  },
  {
    "url": "assets/js/37.7821d15e.js",
    "revision": "7f57c0da6db8402c8f1c77d1141fdb5a"
  },
  {
    "url": "assets/js/38.e2606376.js",
    "revision": "76fdc5cb136ec2272d75e7097f67b846"
  },
  {
    "url": "assets/js/39.d3db78dd.js",
    "revision": "083393fec2fae8e4f2cc640a29fd45d7"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.0e8ed561.js",
    "revision": "10b973e14e4c986d7893cfd23aec3869"
  },
  {
    "url": "assets/js/41.1264d536.js",
    "revision": "b54c5c751c1445a3b38923c2977cec70"
  },
  {
    "url": "assets/js/5.03b654a4.js",
    "revision": "f7c2f4b3459d78f7961544e12ac909bd"
  },
  {
    "url": "assets/js/6.ac399d41.js",
    "revision": "1e4d356e7f16bf810ad61ff73a102584"
  },
  {
    "url": "assets/js/7.706f533b.js",
    "revision": "a83549b610690ac80e35f8011468bcf5"
  },
  {
    "url": "assets/js/8.5e0abf00.js",
    "revision": "e0c7a61f8b51ed40a0806a4dde22edb2"
  },
  {
    "url": "assets/js/9.2d9184d6.js",
    "revision": "2e2314a05dafeef350c98581209adb72"
  },
  {
    "url": "assets/js/app.75ae6912.js",
    "revision": "cf37825d46c6ae7da9fe08912128c0ef"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.e51760b9.js",
    "revision": "d85aa3a52dda6e2d8d4bcd7e08004301"
  },
  {
    "url": "avatar.png",
    "revision": "34b9f02cfe90d0f1866a7569a39119b9"
  },
  {
    "url": "avatar1.png",
    "revision": "09465b7df36e185ec6c524acd9d6213a"
  },
  {
    "url": "backend/mysql/index.html",
    "revision": "ae99ba4367fa498d2b3ec57fd798d0ef"
  },
  {
    "url": "backend/mysql/insert-update-and-delete.html",
    "revision": "19b4b2a0fcf5a41be3d683bb20d0a1ba"
  },
  {
    "url": "backend/mysql/join-and-union.html",
    "revision": "6a5c5595943305037a198b7593b1b714"
  },
  {
    "url": "backend/mysql/select.html",
    "revision": "a92804336abc717e221769003b9444a0"
  },
  {
    "url": "backend/mysql/stored-procedure.html",
    "revision": "33c2b6ead8d483d6d3069c49052f334f"
  },
  {
    "url": "backend/mysql/transactions.html",
    "revision": "47156a422fdb9cb72412f35c51dfbf4e"
  },
  {
    "url": "backend/mysql/trigger.html",
    "revision": "31a4a3834fb93ac9d21b44cee1b025d4"
  },
  {
    "url": "backend/mysql/views.html",
    "revision": "77287e6a32d3a13bc5572018ac32e934"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "4f0f1c3dc604b1b89028e1ea142bd243"
  },
  {
    "url": "backend/nginx/handle-error.html",
    "revision": "bc0a352476cea6fe936f87fde661e497"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "e7bcbeb35f2be1d72dbf4ecb8e44d546"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "0c9b3ef84c4a82135d7b46ee4060d4ca"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "a998822fa977da1e0871af6c05d0dcfc"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "8e3215028e868f2fb2687deb5c670339"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "730549ffdeb13d07946503ce3bcc71c9"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "e43128621492d2d6f22a86d9d70938e4"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "8c94907ee92ee14d155091a676ac4a6c"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "7544f6ec6bb68bc0da11bacf1bc9cb27"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "5840cefbd0b61270d8a4132b0af3581b"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "d9cc43e855e6408aad2002d8eea42cf3"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "22f4aa779b83c0be6b211c9570fb7d9f"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "805c3c348aa24ed0bb2120a3c6f90d7a"
  },
  {
    "url": "categories/index.html",
    "revision": "6f59176eaf11bb305369b04a80a2eba8"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "088861fc94744b9be2b0cfac63d6d21d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "frondend/vue/index.html",
    "revision": "493ed90df9df8814d03f669a72817e14"
  },
  {
    "url": "frondend/vue/ref-type.html",
    "revision": "0a5100318fd9c47eb2da12a237613cac"
  },
  {
    "url": "frondend/vue/the-next-tick.html",
    "revision": "496888fab64ecc2571e9891838047fd7"
  },
  {
    "url": "guide/index.html",
    "revision": "e61470f20616187dc08d89b44e445c2a"
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
    "revision": "09465b7df36e185ec6c524acd9d6213a"
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
    "revision": "83ac8555af9366d19e1c937ba9c3534a"
  },
  {
    "url": "js/custom.js",
    "revision": "714083afafeb6a4da071a1ecb1c3c5c7"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "8d52836f0c5cb9ccd5ba3946af6a11f1"
  },
  {
    "url": "Software/index.html",
    "revision": "9e96f5bde36afd0f0672e71af1a278fe"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "2028abbc543a44c83311de3709d0eea0"
  },
  {
    "url": "tag/index.html",
    "revision": "989c4fd5615bfc60fdb87b3ed224ad91"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "6ee8888dd85a441147f5c314d287ee18"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "77bc6d16d3642390c938f9bdb3b3d7df"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "e0833486fef9e2362cb0e5c87c927a6c"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "465c22c929493757fe741b7db745a39c"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "7809f9ebdcf2b86f37ba683466f06042"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "6b0684d3d277b9c105ef21228b801ed6"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "7a6dd37f82c9792ead9a97b7220c37e6"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "1cae50ebd0756c95c760505e8a7a2429"
  },
  {
    "url": "timeline/index.html",
    "revision": "d4f0ea7c25a66aaf4f64621608f243f2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
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
