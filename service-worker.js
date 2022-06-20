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
    "revision": "b0c17fbc80f9523d70c030ddd6c5ec14"
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
    "url": "assets/js/13.34614372.js",
    "revision": "c10a913155dce7a27f5dadec17b60af0"
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
    "url": "assets/js/16.1f84606e.js",
    "revision": "67c80dac622f2f8e5226bbde1830db1c"
  },
  {
    "url": "assets/js/17.c017f315.js",
    "revision": "c33767fd6ca347f7fdbd78450514a23f"
  },
  {
    "url": "assets/js/18.bd8ef9e7.js",
    "revision": "69c59b8e0e0e8901e4e80422a364c996"
  },
  {
    "url": "assets/js/19.b03493d3.js",
    "revision": "e799aeab41bf54614aa1ee456beebbd2"
  },
  {
    "url": "assets/js/20.9338592e.js",
    "revision": "27344915a79864e5479fb463ece7faf6"
  },
  {
    "url": "assets/js/21.72e3e6fb.js",
    "revision": "501d5ab37de36292c6705aef51c0654f"
  },
  {
    "url": "assets/js/22.f89f4cb3.js",
    "revision": "e93d708308c23abba567ffeade463c79"
  },
  {
    "url": "assets/js/23.0919556f.js",
    "revision": "81d7e45127e1ee4387c89495cc772067"
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
    "url": "assets/js/26.210844f9.js",
    "revision": "b34658738cd7bae2da427de0af328054"
  },
  {
    "url": "assets/js/27.65467e4a.js",
    "revision": "c08ad06c276228f2c1d0237b80f38e07"
  },
  {
    "url": "assets/js/28.f389fc15.js",
    "revision": "2defcae4dce863b2762063c29bd86f30"
  },
  {
    "url": "assets/js/29.08d041e5.js",
    "revision": "ccc2bc3d712aeff2d994ae3c32078787"
  },
  {
    "url": "assets/js/30.2da7c187.js",
    "revision": "27d1fba03f2cf2a970c1f592591d6750"
  },
  {
    "url": "assets/js/31.48f39e08.js",
    "revision": "0c1f25fdeb9458dea371d4a6c993adee"
  },
  {
    "url": "assets/js/32.3a52a65a.js",
    "revision": "e23a364f47d250b2e98dd86524f30eeb"
  },
  {
    "url": "assets/js/33.bd010100.js",
    "revision": "cb975638c5986cddda67b7954d5b0dab"
  },
  {
    "url": "assets/js/34.848926e5.js",
    "revision": "4ac428e088d85bdaf2813f49f03ebb34"
  },
  {
    "url": "assets/js/35.73241de5.js",
    "revision": "a516a6c89a8cc86e9cda75e37ef24e7b"
  },
  {
    "url": "assets/js/36.ff0af5f9.js",
    "revision": "ecadfe473ab5327b6a7bdf3f67c7cd46"
  },
  {
    "url": "assets/js/37.c92bba6b.js",
    "revision": "56a37a4cd1575c179b551790521fdb7a"
  },
  {
    "url": "assets/js/38.08055c85.js",
    "revision": "f711bf849f2f10fb522cc91fd8aa7cd0"
  },
  {
    "url": "assets/js/39.83480e70.js",
    "revision": "cca9d41d74cf051cbc4f75e97f05fbb0"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.9aaefcaa.js",
    "revision": "57075e196a2b67284d70a8f57dc0a928"
  },
  {
    "url": "assets/js/41.bfad1104.js",
    "revision": "635bfbd0ae317d457901ecffe4562385"
  },
  {
    "url": "assets/js/42.605f5f52.js",
    "revision": "7b0fcddd5f3d36e8450cad58dfb33a12"
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
    "url": "assets/js/app.9aab6cc9.js",
    "revision": "475584d86c90c7e7811df49c7069840d"
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
    "revision": "89b8bbc74ac81b700be12509d358cc24"
  },
  {
    "url": "backend/mysql/insert-update-and-delete.html",
    "revision": "d4ba9b550f9af9775975a5d394d0a981"
  },
  {
    "url": "backend/mysql/join-and-union.html",
    "revision": "be4ae4bee66226aa6a1110021d195899"
  },
  {
    "url": "backend/mysql/select.html",
    "revision": "bdac354c51215e71f14fa4a30ad613e6"
  },
  {
    "url": "backend/mysql/stored-procedure.html",
    "revision": "e21c50d7b6b25db43dbc7266cee52f36"
  },
  {
    "url": "backend/mysql/transactions.html",
    "revision": "74bf76880da3dd621acfddae6d128c7c"
  },
  {
    "url": "backend/mysql/trigger.html",
    "revision": "6ded1f65165d36975285775abb6315e4"
  },
  {
    "url": "backend/mysql/views.html",
    "revision": "9d693b14421244929dc96798ce4d2f6f"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "6d7720192a74c25adc3ea4bf9b5c69f7"
  },
  {
    "url": "backend/nginx/handle-error.html",
    "revision": "36dd6b41c945b1f163e55865157f262f"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "1e312a91efba9a6db1a352ce98d2c634"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "30c74ce5c64fa68b25dd6b663fa5114d"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "406b139f6901caff35acd613cbfab366"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "5974656a4b482706339f1cfe74b52539"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "3b5acdb905ae35ac66b520da9d407859"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "467b2327bb252d8b208c9b4818d0f75a"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "4fef700e47aa753971cd274ec5e699af"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "596e2a07fba3cec487c22681e5e81056"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "f8de9cba034bbaed51ab3df1cf7d2a81"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "e8fc243ffa1ed8a38d01639ad05a3ab2"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "1a5de3bb73b340b7a3be083297a25aa0"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "f6a719a81ddf46a1cf140c2e469ac593"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "368a6e3d93bd4140d56619493b3ad75f"
  },
  {
    "url": "categories/index.html",
    "revision": "aa4d412620f9d2652d2dcc43d22be792"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "7e8863e15eb2fec3daf7a36e72610060"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "frondend/vue/index.html",
    "revision": "141587f0fd7f75b1a30ccac1c3503c32"
  },
  {
    "url": "frondend/vue/ref-type.html",
    "revision": "31d96e77fd99b7a18d5a8b89b5a2e21b"
  },
  {
    "url": "frondend/vue/the-next-tick.html",
    "revision": "93a5a4c628f87b68f263a6dea7fe1b84"
  },
  {
    "url": "guide/deploy.html",
    "revision": "101cff66dfdf540b5a471d519d6e4272"
  },
  {
    "url": "guide/index.html",
    "revision": "d99acdc675e705bbf20acfb66fd4c5ab"
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
    "url": "img/favicon/android-chrome-192x192.png",
    "revision": "b0d41920ea162bf9f2b5e0ac28136f58"
  },
  {
    "url": "img/favicon/android-chrome-512x512.png",
    "revision": "09465b7df36e185ec6c524acd9d6213a"
  },
  {
    "url": "img/favicon/apple-touch-icon.png",
    "revision": "48228f353866d2d0538b2e7f3ac2f5ba"
  },
  {
    "url": "img/favicon/favicon-16x16.png",
    "revision": "518742c7c053c61cbbe9563f86188071"
  },
  {
    "url": "img/favicon/favicon-32x32.png",
    "revision": "a24d458bbf3e2f8bcdaf9f1b523f8d49"
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
    "revision": "dd30aeb415bf379096b2bc6dfcefc6d1"
  },
  {
    "url": "js/custom.js",
    "revision": "714083afafeb6a4da071a1ecb1c3c5c7"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "5efb07e1e42724b04c162d1c818a5086"
  },
  {
    "url": "Software/index.html",
    "revision": "ae5b9342d4a0ee2941e3c211e4d8e34a"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "d960fe5129004e45ea9feafc45553073"
  },
  {
    "url": "tag/index.html",
    "revision": "8bdee7a5480beafd2dec240a1368668b"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "7898049bf94cc124027916d9a09ca31a"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "abcb977cddea5dbe8846cc3b60d2e513"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "57716bfe9179bca91b77591697dd3188"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "0b2e44a74369d9867e5b85bae6477efd"
  },
  {
    "url": "tags/github/index.html",
    "revision": "022be9bf4a50edf1c421780ba58b7f1f"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "c4b1db6ed90b1a514dc22ce92784a3cc"
  },
  {
    "url": "tags/guide/index.html",
    "revision": "8127525212fdff150eb4a1e08431a7ea"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "0c6ed128eabe471dc9b5066ff1a03cdb"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "4226c01f9f8a2542622ae043f59cc0f9"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "0a21997825b37cd4708fc6960567ede6"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "c32c282bead9bcc918fabe6b038e4d91"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "edc92e364ea4297d4ddbfcc0e2cf6055"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "1087caa838115e0d99a56a2a741617a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "a948d3066cb27e98b559670680e6c8a1"
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
