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
    "revision": "2b92f25befc841e6c2eb127cfd6344e9"
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
    "url": "assets/js/11.a3cf3f1b.js",
    "revision": "d0a9e72518f4d482ea30cc64e922fcac"
  },
  {
    "url": "assets/js/12.a3bde0f7.js",
    "revision": "31544cf593848c8dac31b4eb9454f43b"
  },
  {
    "url": "assets/js/13.eab57d88.js",
    "revision": "f68f22562e8a6cb5845390d99d6360e5"
  },
  {
    "url": "assets/js/14.3cc104b4.js",
    "revision": "495c91c7efbda886c561185c7e13d40c"
  },
  {
    "url": "assets/js/15.3005e76b.js",
    "revision": "1c6e73b260a1d7e7b8126175ecf96ced"
  },
  {
    "url": "assets/js/16.32d48f25.js",
    "revision": "8dfa9d2ea87d5962c4a4fce0984d3031"
  },
  {
    "url": "assets/js/17.969b7c1e.js",
    "revision": "cdf1f15d1d1b73d491f03a2eb12674ca"
  },
  {
    "url": "assets/js/18.397e58bf.js",
    "revision": "a0f1efd54a0c682539cb006fdd67df31"
  },
  {
    "url": "assets/js/19.b03493d3.js",
    "revision": "e799aeab41bf54614aa1ee456beebbd2"
  },
  {
    "url": "assets/js/20.a1b2f79d.js",
    "revision": "e37f8521d1bf3eb9c924b736942da6d4"
  },
  {
    "url": "assets/js/21.2d72744d.js",
    "revision": "8901aee9a44f2462ecb9051e2f061abb"
  },
  {
    "url": "assets/js/22.fae7aec9.js",
    "revision": "ad6e93753d9fd4d26870e91012a6e12f"
  },
  {
    "url": "assets/js/23.32303e88.js",
    "revision": "ab42885486c23610bc48a4e5f73799c3"
  },
  {
    "url": "assets/js/24.7ae05094.js",
    "revision": "f7c157cc3e602a19dbfa3971589aa605"
  },
  {
    "url": "assets/js/25.b285ca54.js",
    "revision": "8289cd212b77afa46a81abd43fffa265"
  },
  {
    "url": "assets/js/26.7847c9c2.js",
    "revision": "c4d56be175200ae725dfc185904aafd3"
  },
  {
    "url": "assets/js/27.65467e4a.js",
    "revision": "c08ad06c276228f2c1d0237b80f38e07"
  },
  {
    "url": "assets/js/28.0a956ca5.js",
    "revision": "bde89423d175df8fa6015452d5a750e9"
  },
  {
    "url": "assets/js/29.82699f9b.js",
    "revision": "43fa1e0a7ffa449114631861ca86f65f"
  },
  {
    "url": "assets/js/30.5c42c7fa.js",
    "revision": "1b412abb58b0468af32cb10b18849770"
  },
  {
    "url": "assets/js/31.48f39e08.js",
    "revision": "0c1f25fdeb9458dea371d4a6c993adee"
  },
  {
    "url": "assets/js/32.b65c7725.js",
    "revision": "b047d2f84642beab21260d65de659733"
  },
  {
    "url": "assets/js/33.f544061b.js",
    "revision": "c74cafd30ef86e1a63ad33fb838a0137"
  },
  {
    "url": "assets/js/34.faa11e1b.js",
    "revision": "232788f8a6bc72d8b0edbcc47ca23b23"
  },
  {
    "url": "assets/js/35.2f100393.js",
    "revision": "afe1d2b837ff3fea5a9ccc9f8c7a0d8a"
  },
  {
    "url": "assets/js/36.df2dd645.js",
    "revision": "2e2ffdc0ea485c9667a8aaec681b0d44"
  },
  {
    "url": "assets/js/37.450dffc1.js",
    "revision": "91f994da0560dc9617cb7322865aee69"
  },
  {
    "url": "assets/js/38.de7d7fd2.js",
    "revision": "e23f9610f78eadf86b0202ba5073209d"
  },
  {
    "url": "assets/js/39.d856d872.js",
    "revision": "6120980a0bf0436a1ab7571566789d6f"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.1e8dc393.js",
    "revision": "f2e2c3afc00d21236345af5ad7cdb8cf"
  },
  {
    "url": "assets/js/41.1264d536.js",
    "revision": "b54c5c751c1445a3b38923c2977cec70"
  },
  {
    "url": "assets/js/42.4418f7b7.js",
    "revision": "e864f29f1ce0737ab79c444f7fbae3c3"
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
    "url": "assets/js/app.e1ae96bd.js",
    "revision": "6e1c7f460ac0f169cad61cd8d0a0a949"
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
    "revision": "f67bf284843a50cf2eab88591ac92899"
  },
  {
    "url": "backend/mysql/insert-update-and-delete.html",
    "revision": "1f82c64ed4c14edf712a5015c7dfe7f2"
  },
  {
    "url": "backend/mysql/join-and-union.html",
    "revision": "33be72f278609ccea41d0efd1b231775"
  },
  {
    "url": "backend/mysql/select.html",
    "revision": "e6960c01f6c789b9e9d2e9ecae477768"
  },
  {
    "url": "backend/mysql/stored-procedure.html",
    "revision": "a0470262137afb28716feca07b001972"
  },
  {
    "url": "backend/mysql/transactions.html",
    "revision": "f53801f726e579eaba50605feb377cce"
  },
  {
    "url": "backend/mysql/trigger.html",
    "revision": "17549e2df86bb42d45a0693ea8f4685c"
  },
  {
    "url": "backend/mysql/views.html",
    "revision": "fac7aca01b3b9b3d471b8e831b637f1c"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "02ab0943165385d7be27ba7d1883a53d"
  },
  {
    "url": "backend/nginx/handle-error.html",
    "revision": "9afe739461f3392d6686bfaade89b47f"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "da66b31af70de4dd7d8ad0fee66d31f3"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "547a2c7220b9b33f6d5c3b01289005ae"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "8dd9f551e8db57a8530f216aca0179f0"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "49509ed243bd1fec51b2837fd580be3b"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "0e18cc33c7fc95c7b2d7d461daaa68f0"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "c03194b18f717c68f506a8c4c8750915"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "6a660f4045d2328f421a20f9ac244382"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "692cbf7fe49441384807595934abe843"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "c7133b73f7dbba6f769b89602ac49af7"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "2a8f0382cacb26444894fb0d50b73024"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "a311785da5f11c3cbf620872061a957f"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "834571ddbf817f67fdab7c8140509b15"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "dd67513c4b29941ba3a1d09942cf18ed"
  },
  {
    "url": "categories/index.html",
    "revision": "25a340a09c5960626ac39421b1e84735"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "451a616d5589ec2da80a32a5ba4d15da"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "frondend/vue/index.html",
    "revision": "98bc5291ad1ca6522f423165dc255ac7"
  },
  {
    "url": "frondend/vue/ref-type.html",
    "revision": "0f56ed2264d879409a6026d6503ba096"
  },
  {
    "url": "frondend/vue/the-next-tick.html",
    "revision": "5c8a1a01af2ec7acceebba89cd750e96"
  },
  {
    "url": "guide/deploy.html",
    "revision": "72ab6e03636e7cc974dd9fe8239b35a1"
  },
  {
    "url": "guide/index.html",
    "revision": "3d4643cd469e665ac7975cb67fabddf6"
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
    "revision": "505d130a6207965797fc111384170483"
  },
  {
    "url": "js/custom.js",
    "revision": "714083afafeb6a4da071a1ecb1c3c5c7"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "cf06d6e15894f6cddfff21ea2ea8036e"
  },
  {
    "url": "Software/index.html",
    "revision": "1b335162af9048597c790323585e2829"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "608417fa0c2a4ff7cece96c22116fa8a"
  },
  {
    "url": "tag/index.html",
    "revision": "6569f25368ab9d7037dcc93ba98b76aa"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "3653f5af787eb74cd7a57963630ba4e6"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "ccfcbd15aff8dfe96e18a474be6664c7"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "6302806276ee65236092d5411bd29058"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "2ff1eec722c453d1f95e66f59bd7960e"
  },
  {
    "url": "tags/github/index.html",
    "revision": "078767ea2a857ac1795f866951fb49c8"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "1a197dfbb46ce535fee0804b09d0d261"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "1af3e471da5d7dcf84dd3f6e7a0e5d83"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "b08e241d0170fd4728b62e4e6968a40d"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "904de84d47d4fd2021897415cc3f43f4"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "92c6c067120f78174fd9e304fe9fcb34"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "b77eed477b68ec1265f06e4c57549035"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "bd6382c1a3265b07f7085f238fbf3e28"
  },
  {
    "url": "timeline/index.html",
    "revision": "0332b2ca3f26c5c2febe0c7593392319"
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
