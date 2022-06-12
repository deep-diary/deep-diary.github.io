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
    "revision": "49870a56baa5705d8956fde0c12d30c0"
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
    "url": "assets/js/1.ee68dd78.js",
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
    "url": "assets/js/15.d8aa3e32.js",
    "revision": "7673a7e40a71df2be494b478a497550b"
  },
  {
    "url": "assets/js/16.8e0f4520.js",
    "revision": "49762c174af33daf53b3b8225c5730f8"
  },
  {
    "url": "assets/js/17.0446ba85.js",
    "revision": "c9d4125cbac1db0958449b3edef70b4d"
  },
  {
    "url": "assets/js/18.0dcebe79.js",
    "revision": "5d3da8e42f8901487960079e1f92d613"
  },
  {
    "url": "assets/js/4.f6671498.js",
    "revision": "d53d78f2915b550d3c9724e1c5de4845"
  },
  {
    "url": "assets/js/5.51272e6c.js",
    "revision": "18b6c674cfe625f24aeaef8b3afe227b"
  },
  {
    "url": "assets/js/6.fb393106.js",
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
    "url": "assets/js/app.6bf273ac.js",
    "revision": "2da02840bbc640303bb2bd5123e8eb10"
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
    "revision": "71bb25625de18136edd38d82476ede82"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2e6365fab00a9553ca5457dbe97b1e15"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5ec8f6f86885ce4f618da49318ea43a2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "745ab2fb59cdcac6eeab22df1430d8b0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6ec40cb712155e73eef6051098063eee"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c0a818c1cd29990fc656be601281b516"
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
    "url": "img/logo_lg.png",
    "revision": "34b9f02cfe90d0f1866a7569a39119b9"
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
    "revision": "744b49f0062f31e07105e4c84f4f9eaf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "829b16bb5307579c32fc432b40c3c459"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e15d70d3b08e867385499ab4bf72ae19"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a4b50a0917ca1e7ceacd8fc52f3fc976"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ec0e1aecee735f4975483dd1162f159b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "60e4b24836c99de9cf98c7d5491dbcfc"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f19282e76bbeb90c61c74ea1c32fff84"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "019e4b753edbd82434cabc14b297c7fb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f02f6d115bd968d9e9972aae2d7a0ace"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a84f5bee1bd0b2974015c6d02f50544b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8400a52891c32a8e04d014a4b05e3f6d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f453f2238b7ed709d81a34bc506fefaf"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb9484f6fac84c5dfd93c2ceb76afaa9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "75e7ce401885309c347fb02e6f28d24b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f14bc50f3c635819052b4d7493e52ad0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "5cd1d18d15de1ad650f20d69b5d7c207"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5368d8578f968c689e447cf99d41ccf9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d27d861e42b1a355125bdc0772010a63"
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
