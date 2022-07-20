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
    "revision": "d18f7abcb60ff39433194d09ae36148c"
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
    "url": "assets/js/11.f44214eb.js",
    "revision": "c3a8b2dee5a53b64e8f8b90b2043ff5a"
  },
  {
    "url": "assets/js/12.52bea41e.js",
    "revision": "5a0e751f53a045ced46cda45765f2fbd"
  },
  {
    "url": "assets/js/13.3c8c152f.js",
    "revision": "c43c4ad833d1112dc020851110bf6f3d"
  },
  {
    "url": "assets/js/14.04efaa67.js",
    "revision": "9ea18232156b1c077d150d1905668b60"
  },
  {
    "url": "assets/js/15.c4c08354.js",
    "revision": "dcac817a09b6136f1f9bf5ef1c7ed626"
  },
  {
    "url": "assets/js/16.da0e4cf5.js",
    "revision": "3f7d16148c3d16f8fbadf31ba04408b7"
  },
  {
    "url": "assets/js/17.bc264265.js",
    "revision": "886878e51b9b163e0ef333073432050f"
  },
  {
    "url": "assets/js/18.a3906b86.js",
    "revision": "16c65a53b51a961959a0204c70e31ec1"
  },
  {
    "url": "assets/js/19.514c9730.js",
    "revision": "eb470ccab147f852a12033bc821bd7db"
  },
  {
    "url": "assets/js/20.9c3d9f0f.js",
    "revision": "5c90d7abf9a33a4cb77514ddd2ea7087"
  },
  {
    "url": "assets/js/21.81ef6e18.js",
    "revision": "5b9f6491cc4018fcdde79890144614c7"
  },
  {
    "url": "assets/js/22.592c8561.js",
    "revision": "c773b5348e4a866b30ecd7619a19a6f8"
  },
  {
    "url": "assets/js/23.e8b6c9b4.js",
    "revision": "02f0c650c466d64ec08d878a942bd3e1"
  },
  {
    "url": "assets/js/24.ebca1175.js",
    "revision": "9211bf043b793c26ef18f02163ecd455"
  },
  {
    "url": "assets/js/25.a834c639.js",
    "revision": "5bf367c26f02a44dc17d482bda9a4036"
  },
  {
    "url": "assets/js/26.48c54d45.js",
    "revision": "4e4515f66a98f9753e2335fa134bad46"
  },
  {
    "url": "assets/js/27.5eb753e7.js",
    "revision": "a9507f5e4b259b1a8b9738ec1ed73832"
  },
  {
    "url": "assets/js/28.20493ad9.js",
    "revision": "5fe889c9c421d5e3d905da2302c0d311"
  },
  {
    "url": "assets/js/29.5d2fd646.js",
    "revision": "48fa6ae9e85e34d3f855d7a004189211"
  },
  {
    "url": "assets/js/30.d234f4c8.js",
    "revision": "f870e2fd3591ed0357514ec6c6bbf04f"
  },
  {
    "url": "assets/js/31.34bf6d67.js",
    "revision": "c176455448f1b8fc557f250ba3b47705"
  },
  {
    "url": "assets/js/32.eb96d04a.js",
    "revision": "25ae00b8a4815d5ababf9ff3d1e9e479"
  },
  {
    "url": "assets/js/33.21128638.js",
    "revision": "f80ae88c74d615aa58789d61521c77fb"
  },
  {
    "url": "assets/js/34.e61fd666.js",
    "revision": "42dfb39d3f071a27a7725ec0110dae95"
  },
  {
    "url": "assets/js/35.52025f12.js",
    "revision": "8bdc3a8e9941343a21698010d8d15d7e"
  },
  {
    "url": "assets/js/36.7b079ce0.js",
    "revision": "42d730ccf9f36ef165511f8367210507"
  },
  {
    "url": "assets/js/37.65ead198.js",
    "revision": "0f26e880dbf53e3c9d616d06378d4265"
  },
  {
    "url": "assets/js/38.9646a84b.js",
    "revision": "8ba4ce5d79a6ee20671519a31599811a"
  },
  {
    "url": "assets/js/39.254a7a22.js",
    "revision": "2ed66ac674dcfc938fcf5e114be6bab9"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.f225fdd0.js",
    "revision": "bb082ae206b9660383c0a377b38ce409"
  },
  {
    "url": "assets/js/41.4cfcda55.js",
    "revision": "904b5f255cb28f64e6b7bed1136a111c"
  },
  {
    "url": "assets/js/42.b9eee7ac.js",
    "revision": "e1843bd3074657a2eaf70ed6bfd5f199"
  },
  {
    "url": "assets/js/43.348ceaf1.js",
    "revision": "ee17229af47b8fd0e26e7ac78951cab7"
  },
  {
    "url": "assets/js/44.7d564d75.js",
    "revision": "7ce76207543ec187903f413467a2bcc7"
  },
  {
    "url": "assets/js/45.65f595d9.js",
    "revision": "03e71d433bbdf35431899bb5965218d5"
  },
  {
    "url": "assets/js/46.9792d0e0.js",
    "revision": "7ab1884db8f953149845f4159417e8fe"
  },
  {
    "url": "assets/js/47.a7f9f22e.js",
    "revision": "2c8ce3847dba5a68b7c09d502fa4af4f"
  },
  {
    "url": "assets/js/48.952385b5.js",
    "revision": "5f5d3a25e2ce041332d2bbcbaba7faca"
  },
  {
    "url": "assets/js/49.5cf87467.js",
    "revision": "e2a456f59f5ef10695bcee1d073764bf"
  },
  {
    "url": "assets/js/5.03b654a4.js",
    "revision": "f7c2f4b3459d78f7961544e12ac909bd"
  },
  {
    "url": "assets/js/50.a978d5b8.js",
    "revision": "81cefc510522643e173db9861e820735"
  },
  {
    "url": "assets/js/51.958d3ce7.js",
    "revision": "24bd857d554820e4ae47df3b3fc68f69"
  },
  {
    "url": "assets/js/52.c1071188.js",
    "revision": "cb2b64a433d82481f9e3eaff6488c1bc"
  },
  {
    "url": "assets/js/53.12dc8e69.js",
    "revision": "b27c533353993cbb71065f258202d709"
  },
  {
    "url": "assets/js/54.12814a4f.js",
    "revision": "595cb853d163e1bf273e6906366c11a9"
  },
  {
    "url": "assets/js/55.852405b9.js",
    "revision": "d53199422f95fcb5556918f8662846c6"
  },
  {
    "url": "assets/js/56.30f93257.js",
    "revision": "2067f78c65b4703c84411a81d306ccb7"
  },
  {
    "url": "assets/js/57.42e2da09.js",
    "revision": "ea680c80bd627f3710507d930a3aa8a9"
  },
  {
    "url": "assets/js/58.742dfef0.js",
    "revision": "c6ff1f7fb348cc4e63935c84969d6629"
  },
  {
    "url": "assets/js/59.00fdd503.js",
    "revision": "39acb730f2a8d1e7ab87667cef43e284"
  },
  {
    "url": "assets/js/6.ac399d41.js",
    "revision": "1e4d356e7f16bf810ad61ff73a102584"
  },
  {
    "url": "assets/js/60.2000aac6.js",
    "revision": "6e2ab85968972f5a1318b4d0be2e173a"
  },
  {
    "url": "assets/js/61.6187bd20.js",
    "revision": "eefa12516c21d4e46ec5fa8beba86e1b"
  },
  {
    "url": "assets/js/62.a89583f9.js",
    "revision": "46c411f1ce77b6c94072b7715e8c36da"
  },
  {
    "url": "assets/js/63.00e7e9f6.js",
    "revision": "b66df4cf100f283ecc47c87079564292"
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
    "url": "assets/js/app.b31c85e4.js",
    "revision": "d218a8ab9924101db871e0303bae7960"
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
    "url": "avatar_放大.png",
    "revision": "96e1da37c931ed764fbee121814e7e0c"
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
    "url": "categories/blog/index.html",
    "revision": "e3c3b82ed063e81f18dbfc3d4bede97b"
  },
  {
    "url": "categories/database/index.html",
    "revision": "21fa4512bfae4d9e9b06f2644616d8e7"
  },
  {
    "url": "categories/deep learning/index.html",
    "revision": "85581d8b6189c4e5b58a9c6f81f3845e"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "5e98713061466c41eccf2b1df5d6eb5d"
  },
  {
    "url": "categories/Gallery/index.html",
    "revision": "d97f1c836257d1491395c2f4c9d520c5"
  },
  {
    "url": "categories/index.html",
    "revision": "118b20c22d783d08b43cc81d2bdf3780"
  },
  {
    "url": "categories/PM/index.html",
    "revision": "d24f3c3761cbc02b7ec92223a0fcc017"
  },
  {
    "url": "categories/project/index.html",
    "revision": "740ebfb8495577419ac69ad072db2eab"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "e39c3c46b86d38c4bb54e1d3099cdbb7"
  },
  {
    "url": "categories/WEB/index.html",
    "revision": "715de990064a391d9dcee4ee7791132b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "Deep-Learning/index.html",
    "revision": "b76ec6a1e0ed40a35e0581b64de5888a"
  },
  {
    "url": "favicon_D_big/android-chrome-192x192.png",
    "revision": "53b3254d0734e6b0b826fd7213423643"
  },
  {
    "url": "favicon_D_big/android-chrome-512x512.png",
    "revision": "4942383bf380ccf41b138e005f01348c"
  },
  {
    "url": "favicon_D_big/apple-touch-icon.png",
    "revision": "02c7a7d00f368a0839dc9f19b112e30a"
  },
  {
    "url": "favicon_D_big/favicon-16x16.png",
    "revision": "02dad75c82f105fa112aa721c4226105"
  },
  {
    "url": "favicon_D_big/favicon-32x32.png",
    "revision": "14a400bcf1a40839a06662536b6c03b3"
  },
  {
    "url": "favicon_d/android-chrome-192x192.png",
    "revision": "7f9ae618beabec77644a05e5bbd6cde3"
  },
  {
    "url": "favicon_d/android-chrome-512x512.png",
    "revision": "a54dbe8ed768860579233f2ff8bbe125"
  },
  {
    "url": "favicon_d/apple-touch-icon.png",
    "revision": "83c7fabaf8d864665f846b223a57ef4f"
  },
  {
    "url": "favicon_d/favicon-16x16.png",
    "revision": "589c25232991c00d7023d05f35fffd58"
  },
  {
    "url": "favicon_d/favicon-32x32.png",
    "revision": "dab33e0e2e26c4833981f8de5ba562e1"
  },
  {
    "url": "favicon_icon_black/android-chrome-192x192.png",
    "revision": "db3d9b8e70984c85965fb947411051e1"
  },
  {
    "url": "favicon_icon_black/android-chrome-512x512.png",
    "revision": "ce33504a619fe85d4758e99800579baa"
  },
  {
    "url": "favicon_icon_black/apple-touch-icon.png",
    "revision": "097c4a6475ee17e6ce67c7a13ea5e27c"
  },
  {
    "url": "favicon_icon_black/favicon-16x16.png",
    "revision": "277b0bfceef2a133ca20a70a87d131a0"
  },
  {
    "url": "favicon_icon_black/favicon-32x32.png",
    "revision": "d190bfe3e52e57a32bfc678997cdf3e7"
  },
  {
    "url": "favicon_icon_white/android-chrome-192x192.png",
    "revision": "b851f733731aad095f3e688195dccf9c"
  },
  {
    "url": "favicon_icon_white/android-chrome-512x512.png",
    "revision": "268752429f1a5b57890a89aa5fcc629b"
  },
  {
    "url": "favicon_icon_white/apple-touch-icon.png",
    "revision": "e2255e5cb79ea27a580e8b7330643481"
  },
  {
    "url": "favicon_icon_white/favicon-16x16.png",
    "revision": "d54d41eb5f2bce9c7a76c9b336d1d18f"
  },
  {
    "url": "favicon_icon_white/favicon-32x32.png",
    "revision": "4fab3fbdc7efcab1d2cea2cc60ab4eed"
  },
  {
    "url": "favicon_white/android-chrome-192x192.png",
    "revision": "5f47560202da2d1e53f589e1c1bab854"
  },
  {
    "url": "favicon_white/android-chrome-512x512.png",
    "revision": "1877d8595f54dc309d127618bf1aadf4"
  },
  {
    "url": "favicon_white/apple-touch-icon.png",
    "revision": "abae2f2c4d5fe24f31688acf10a8ff56"
  },
  {
    "url": "favicon_white/favicon-16x16.png",
    "revision": "f3bff35a87b995dfc224f3fbcbf1bdc8"
  },
  {
    "url": "favicon_white/favicon-32x32.png",
    "revision": "b46c98837bd6426f8689e2bd4b5e40af"
  },
  {
    "url": "favicon_深/android-chrome-192x192.png",
    "revision": "4d4d0e5f223a986b7e2d298649f7ddb1"
  },
  {
    "url": "favicon_深/android-chrome-512x512.png",
    "revision": "46056b87bc944257fdebc2174a3c9cad"
  },
  {
    "url": "favicon_深/apple-touch-icon.png",
    "revision": "477980ef873fd7f732aa588621b43679"
  },
  {
    "url": "favicon_深/favicon-16x16.png",
    "revision": "dd03556dcf50378d2ebd1257d3b47c33"
  },
  {
    "url": "favicon_深/favicon-32x32.png",
    "revision": "b427b7958fadbefce15f241a472397b2"
  },
  {
    "url": "favicon_深记_no black/android-chrome-192x192.png",
    "revision": "0c127604138f03ae92660df9ff8aeee6"
  },
  {
    "url": "favicon_深记_no black/android-chrome-512x512.png",
    "revision": "a44e6946c09ceee9d11fda3797552101"
  },
  {
    "url": "favicon_深记_no black/apple-touch-icon.png",
    "revision": "345b01dd9fed1786f2a83f2175fbfe22"
  },
  {
    "url": "favicon_深记_no black/favicon-16x16.png",
    "revision": "14861a1a586fe11f1fa11dff30d06dd2"
  },
  {
    "url": "favicon_深记_no black/favicon-32x32.png",
    "revision": "42e401f6e3c21ec6e22d4b17eb8cccd3"
  },
  {
    "url": "favicon_深记/android-chrome-192x192.png",
    "revision": "6a54df26f72679de069b0866e5277aa0"
  },
  {
    "url": "favicon_深记/android-chrome-512x512.png",
    "revision": "84bb88128119b5caa8b4d15b87b85de7"
  },
  {
    "url": "favicon_深记/apple-touch-icon.png",
    "revision": "f66b93e711d2d44a390edd8f1cf7849e"
  },
  {
    "url": "favicon_深记/favicon-16x16.png",
    "revision": "f7600e82dc2197c46a084f10a189ed5a"
  },
  {
    "url": "favicon_深记/favicon-32x32.png",
    "revision": "23fe98f16b912eebc98cb71132a2074b"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7f9ae618beabec77644a05e5bbd6cde3"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "a54dbe8ed768860579233f2ff8bbe125"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "83c7fabaf8d864665f846b223a57ef4f"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "589c25232991c00d7023d05f35fffd58"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "dab33e0e2e26c4833981f8de5ba562e1"
  },
  {
    "url": "Guide/deploy.html",
    "revision": "71487669ef4507696a2d354e0cbfdf8c"
  },
  {
    "url": "Guide/index.html",
    "revision": "0456e8471ba0c42c84b3678867ee34c4"
  },
  {
    "url": "img/bgImage.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/logo_放大.png",
    "revision": "5c06a8a564c21619d07ee617c4cf6075"
  },
  {
    "url": "img/logo.png",
    "revision": "09465b7df36e185ec6c524acd9d6213a"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "1d282e38c65d874d3d45555f1494e9d4"
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
    "url": "img/sidebar_280148.png",
    "revision": "56698f6977a505a7f7572fa662e61316"
  },
  {
    "url": "img/sidebar_932466.png",
    "revision": "0805bfba046a8573605e3ca5143d4805"
  },
  {
    "url": "index.html",
    "revision": "32d79b1124f276ac424777173343a05d"
  },
  {
    "url": "js/custom.js",
    "revision": "714083afafeb6a4da071a1ecb1c3c5c7"
  },
  {
    "url": "logo_rectage.png",
    "revision": "0ff7cd905ddfe16dc6d5fe35968e7f7f"
  },
  {
    "url": "PM/blow molding process.html",
    "revision": "a4dbea23d11fd5563f8525d62634cba2"
  },
  {
    "url": "PM/hot plate welding.html",
    "revision": "d6c281bb8a3843efb31d95f1ca2f3766"
  },
  {
    "url": "PM/index.html",
    "revision": "98ccfc80311dd779ad8413e0ab712e00"
  },
  {
    "url": "Project/autowin/index.html",
    "revision": "4ddedc97f0f26ca257d18d085d9c6c4f"
  },
  {
    "url": "Project/autowin/tesla manifold.html",
    "revision": "c1dbb217ce1e601fd5e7ff8bde526ace"
  },
  {
    "url": "Project/blog/favicon.html",
    "revision": "92e96412740822587551b5fac2d84e2a"
  },
  {
    "url": "Project/blog/index.html",
    "revision": "21dae4d6422c1aef53a31161b22c768f"
  },
  {
    "url": "Project/gallery/1. user login backend.html",
    "revision": "11639aa35b86f723b0de39bada7bc473"
  },
  {
    "url": "Project/gallery/2. user login frontend.html",
    "revision": "e6d1092ec26f74dc2f7cbf434443e377"
  },
  {
    "url": "Project/gallery/3. gallery backend.html",
    "revision": "dbd224e645385fcd0cdc052857171d9e"
  },
  {
    "url": "Project/gallery/4. gallery frontend.html",
    "revision": "da1b6ffd18e84da0fbb58576f7272ea0"
  },
  {
    "url": "Project/gallery/index.html",
    "revision": "8058f4c0454fd31833c2d62966a79d3a"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "6423f7feb1b4c407c8923c18395e613c"
  },
  {
    "url": "Software/index.html",
    "revision": "17fefddd4eb14f51f4fcd3d3187724f4"
  },
  {
    "url": "Software/Python tools.html",
    "revision": "13c146da1eab07b66dd9c939daa65cd1"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "df801c270c8676b9cc74e80d585da016"
  },
  {
    "url": "tag/index.html",
    "revision": "58499ad55c5c1fbbb05a290679e673cb"
  },
  {
    "url": "tags/album/index.html",
    "revision": "e61a79ca23f453c9102ce1d11ebd5299"
  },
  {
    "url": "tags/axios/index.html",
    "revision": "e2c1c1e3912141210a16f4ed62f8de35"
  },
  {
    "url": "tags/backend/index.html",
    "revision": "990835d7671531bf59c24ac051712915"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "9c8fd740776f9df8de19e27df8d22cf3"
  },
  {
    "url": "tags/blow molding/index.html",
    "revision": "3fe38730ce0c125b6606b72bb8132116"
  },
  {
    "url": "tags/CDN/index.html",
    "revision": "4150383a17b3e62751d2644387eea1c5"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "7fae0ec79e8d8e26965cd667fff02e50"
  },
  {
    "url": "tags/django/index.html",
    "revision": "facc6b4d1a6468b55b973c628721d639"
  },
  {
    "url": "tags/element plus/index.html",
    "revision": "15c17628052d40ee27aa0cff8a4fd4a4"
  },
  {
    "url": "tags/Favicon/index.html",
    "revision": "1a404a05906113a894ab637e42600bd1"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "fd089a81aadefb335c2f672dace3c4ec"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "ccaf232efaabe729b6b713bba08676e1"
  },
  {
    "url": "tags/github/index.html",
    "revision": "12d34b574e2ca1958b4e86c429ef7243"
  },
  {
    "url": "tags/GM/index.html",
    "revision": "1f2754d1df60daa323ef5f050e5b8092"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "ed22fbaf3382e9c6f899018c961ef25f"
  },
  {
    "url": "tags/gps/index.html",
    "revision": "8f152c130ed013b27d520fbba1dab6ec"
  },
  {
    "url": "tags/guide/index.html",
    "revision": "8f978868b980cc88600719c11c4bfb4e"
  },
  {
    "url": "tags/job/index.html",
    "revision": "be7d1b839df0f01d7890fc66146b47fc"
  },
  {
    "url": "tags/lightroom/index.html",
    "revision": "1e588a5a3ca5c1463bdae1b38421a6cd"
  },
  {
    "url": "tags/login/index.html",
    "revision": "42c8cc1ea2d78b09d1bde5b1ebd3d407"
  },
  {
    "url": "tags/manifold/index.html",
    "revision": "6b7ac8b497f5f3211f94327ada0473cd"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "5bc1ea32e26d0e095e228faca36408ed"
  },
  {
    "url": "tags/neo4j/index.html",
    "revision": "217262985c9255ca660536ac5ef97193"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "715221dc16f876856c763366aedbdf23"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "bc428c470361462d31321f26974e874a"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "e86ec22ec66191a56fafe07c5c85d6b6"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "eb76962803e8ae8da0eb4cce016940b8"
  },
  {
    "url": "tags/README/index.html",
    "revision": "2230e0bac7ade36c89f33036b46efabf"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "69b1e9ca469904054b0aec0167d7a101"
  },
  {
    "url": "tags/TESLA/index.html",
    "revision": "89ba38f2d69a4a877f2297cd5bd6d985"
  },
  {
    "url": "tags/token/index.html",
    "revision": "e5e91d53bb692fc2af75c1b9abb3e3f2"
  },
  {
    "url": "tags/traceability/index.html",
    "revision": "c96bc7df91916cd45abfd20c54fce385"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "7fb649d20e1f4592af3ff4e02bf8a5d3"
  },
  {
    "url": "tags/upload/index.html",
    "revision": "4913498bf79f05cdeb208af84079a697"
  },
  {
    "url": "tags/vue-element-admin/index.html",
    "revision": "8f783f9823048fe797d066e7b513f4dd"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "fb7b7d2749ebb0eef6e5d8de38f0a931"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "d8533562838938f455a6d8e50e71daba"
  },
  {
    "url": "tags/welding/index.html",
    "revision": "cd1d4808bdbc48b302ce1d1699793e1b"
  },
  {
    "url": "tags/Wheels/index.html",
    "revision": "477defa82856a8f7183799fa088c2b53"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "10a2b3853bc1485c4f4d29f08339e521"
  },
  {
    "url": "tags/水印/index.html",
    "revision": "000395064d0db94b81f43a0335f72ef2"
  },
  {
    "url": "tags/裁剪/index.html",
    "revision": "dd8a32a14c5e3295ff3ed32301e76844"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "508556fc4a69e29c8a450ada2abae41a"
  },
  {
    "url": "Timeline/index.html",
    "revision": "87ce1979ff3ef169de204c9b72c5c577"
  },
  {
    "url": "Web/Backend/Django/django wheels.html",
    "revision": "813a42db232e619bd8ee02b8b69547c8"
  },
  {
    "url": "Web/Backend/Django/django 云存储.html",
    "revision": "aa57c201f466be55c53689e38a66f663"
  },
  {
    "url": "Web/Backend/Django/django 处理保存上传的图片.html",
    "revision": "c6e38982e8202087d65554f595fbccf6"
  },
  {
    "url": "Web/Backend/Django/django 网站加速.html",
    "revision": "9611c5cca33f86fd90e705f2e0a09576"
  },
  {
    "url": "Web/Backend/Django/index.html",
    "revision": "3681fc8c828bcd61b68f60e57679e505"
  },
  {
    "url": "Web/Backend/Nginx/configurin-systemd-service-for-nginx.html",
    "revision": "eeaf12f488ac3f1f597ac4f5a153d3b5"
  },
  {
    "url": "Web/Backend/Nginx/handle-error.html",
    "revision": "1d69de213edabff2b2bec86fdaa3d453"
  },
  {
    "url": "Web/Backend/Nginx/index.html",
    "revision": "f96edd0e61148df5046eed83048e57eb"
  },
  {
    "url": "Web/Backend/Nginx/install-goaccess.html",
    "revision": "59dd6c619917a6a68b9a85029a8f9ead"
  },
  {
    "url": "Web/Backend/Nginx/limit-module.html",
    "revision": "f4ddb12476eb39c6124b66ab0644c678"
  },
  {
    "url": "Web/Backend/Nginx/location-rules.html",
    "revision": "3d2ade232e050d5555157250772878db"
  },
  {
    "url": "Web/Backend/Nginx/master-slave-nginx.html",
    "revision": "631907a8f5c7b1e2f8a1137845823f29"
  },
  {
    "url": "Web/Backend/Nginx/nginx-upstream.html",
    "revision": "e48db8e7c79d02a42ab9721434126b46"
  },
  {
    "url": "Web/Backend/Nginx/proxy-pass-rules.html",
    "revision": "2ad99c917f2a94f11589dee61cac4cfc"
  },
  {
    "url": "Web/Backend/Nginx/referer-module.html",
    "revision": "f2905ccd6818161215d527a893bdc384"
  },
  {
    "url": "Web/Backend/Nginx/rewrite-rules.html",
    "revision": "dfded8ab5881c71b4df7c370f298c2ee"
  },
  {
    "url": "Web/Backend/Nginx/the-difference-between-root-and-alias.html",
    "revision": "c64e870404de5ddb82fe5879decf020a"
  },
  {
    "url": "Web/Backend/Nginx/upgrade-http-to-https.html",
    "revision": "46018f82351e0d499a4631b331ae61d6"
  },
  {
    "url": "Web/Backend/Nginx/websocket-proxy.html",
    "revision": "a385032f5146715fe0b0635b5e8caf6f"
  },
  {
    "url": "Web/Database/index.html",
    "revision": "70e8748172806b23c72270b1c0147986"
  },
  {
    "url": "Web/Database/mysql/index.html",
    "revision": "17ea552b017da0f3e693d9282bcd7f3a"
  },
  {
    "url": "Web/Database/mysql/insert-update-and-delete.html",
    "revision": "5ff935ef01d1be39d063c8448aa0062f"
  },
  {
    "url": "Web/Database/mysql/join-and-union.html",
    "revision": "5d4f351fc86da95046ac0cbbd06e6490"
  },
  {
    "url": "Web/Database/mysql/select.html",
    "revision": "67b026b5abfe0f131d7150fb8d959aa0"
  },
  {
    "url": "Web/Database/mysql/stored-procedure.html",
    "revision": "cf21b9b94c6891a145fd6c19c23a26df"
  },
  {
    "url": "Web/Database/mysql/transactions.html",
    "revision": "f2af7345e9493136d6d4a6237fa04e82"
  },
  {
    "url": "Web/Database/mysql/trigger.html",
    "revision": "a4e757f7ac9d7b93a949b82165867c95"
  },
  {
    "url": "Web/Database/mysql/views.html",
    "revision": "f105666bedb2161d85237e7ae1b9a659"
  },
  {
    "url": "Web/Frondend/vue/index.html",
    "revision": "298db8a2f636e0340c5a4049891cf672"
  },
  {
    "url": "Web/Frondend/vue/ref-type.html",
    "revision": "0dea1ab19e01badccdd36004a1f299b4"
  },
  {
    "url": "Web/Frondend/vue/the-next-tick.html",
    "revision": "f5c53b19567a587a269163998aa11d41"
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
