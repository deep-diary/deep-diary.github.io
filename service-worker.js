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
    "revision": "34761f18eb1c70f5cbca8d15410f8713"
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
    "url": "assets/js/13.42315140.js",
    "revision": "a72691b68f452e08a8ac98cd3c06c03d"
  },
  {
    "url": "assets/js/14.7599e305.js",
    "revision": "8afad61c98c6c829d1c3aaee5a8a8023"
  },
  {
    "url": "assets/js/15.f54aef49.js",
    "revision": "758cfe8de4a2c23b137245b7be96dd18"
  },
  {
    "url": "assets/js/16.4f3e7a8e.js",
    "revision": "c79cb510b3b2a3e8b8829b77604025d7"
  },
  {
    "url": "assets/js/17.0eb41031.js",
    "revision": "49fcbb517d51262057c26cd26c98d876"
  },
  {
    "url": "assets/js/18.cc50cec1.js",
    "revision": "2f312458268d607092ea37cf7c22f37c"
  },
  {
    "url": "assets/js/19.eab1dc37.js",
    "revision": "9f17093f7b87074feed6e0706e7f7e0b"
  },
  {
    "url": "assets/js/20.cbf97fd6.js",
    "revision": "cca8370ac3ca02c26c13aadb04e6d750"
  },
  {
    "url": "assets/js/21.11bd3b66.js",
    "revision": "ee2c374e47bf5094453197d4a9bfef5d"
  },
  {
    "url": "assets/js/22.592c8561.js",
    "revision": "c773b5348e4a866b30ecd7619a19a6f8"
  },
  {
    "url": "assets/js/23.5fbb5131.js",
    "revision": "06059752c76991665efaf6a1d7972a99"
  },
  {
    "url": "assets/js/24.6ad99b9f.js",
    "revision": "5820eb4d0b3bf2b8f6eee8f7bbd58e96"
  },
  {
    "url": "assets/js/25.02576efc.js",
    "revision": "c388b4c72e35d2a969a68fe14d4a47c9"
  },
  {
    "url": "assets/js/26.2cf92384.js",
    "revision": "6ff872c4d47d7639466ef90171e6071c"
  },
  {
    "url": "assets/js/27.2a1840cc.js",
    "revision": "67cdd3c4a9e5890e03292fae8b17da33"
  },
  {
    "url": "assets/js/28.20493ad9.js",
    "revision": "5fe889c9c421d5e3d905da2302c0d311"
  },
  {
    "url": "assets/js/29.fc12ecb0.js",
    "revision": "b1563f2c53094265f66ce720d4ffd08f"
  },
  {
    "url": "assets/js/30.59f47bef.js",
    "revision": "73da42e3f4779fc600ee10c78b8d0c92"
  },
  {
    "url": "assets/js/31.34bf6d67.js",
    "revision": "c176455448f1b8fc557f250ba3b47705"
  },
  {
    "url": "assets/js/32.94057ec6.js",
    "revision": "cba77e339c89d2bfaf8a9a9b6a8aaeac"
  },
  {
    "url": "assets/js/33.214b5916.js",
    "revision": "8083dcbae6fa55d97b47567dc2dfe193"
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
    "url": "assets/js/36.3dcd1fae.js",
    "revision": "060621f30f2ea972dbe251488d7770f7"
  },
  {
    "url": "assets/js/37.f5cf564c.js",
    "revision": "9dcabad6396246aea5b826b4f7cb04f5"
  },
  {
    "url": "assets/js/38.76fcd774.js",
    "revision": "699d0f2a841bf37729e758efad84818b"
  },
  {
    "url": "assets/js/39.f4e92fd3.js",
    "revision": "c18cb94d70b73c40f6987832fe2a9515"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.397fda1b.js",
    "revision": "d6fd12db54dca0f4ae7e70044bf7aea6"
  },
  {
    "url": "assets/js/41.c7f393d2.js",
    "revision": "1878ba060f2b33add2a0e2c0a6f52ff6"
  },
  {
    "url": "assets/js/42.b9eee7ac.js",
    "revision": "e1843bd3074657a2eaf70ed6bfd5f199"
  },
  {
    "url": "assets/js/43.55546024.js",
    "revision": "e10ca633cf12e6eed8463f7707f230f9"
  },
  {
    "url": "assets/js/44.74bb270d.js",
    "revision": "3f8a7df383157c935a41e1b685fdfa03"
  },
  {
    "url": "assets/js/45.e55e3a6c.js",
    "revision": "3e2c9782e8f8e7aa28e8294325cbd4ce"
  },
  {
    "url": "assets/js/46.ee78db06.js",
    "revision": "d3a7abc6373f5bff79f0534248b7264b"
  },
  {
    "url": "assets/js/47.44de8471.js",
    "revision": "59b200abab7d14309a4bee13d249c7ac"
  },
  {
    "url": "assets/js/48.ed8fb2c9.js",
    "revision": "1289cb4ac758585012d6b3f5a2e04c45"
  },
  {
    "url": "assets/js/49.0d80c3a9.js",
    "revision": "9767790532bf304890ab83b24a6c0165"
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
    "url": "assets/js/53.93352a4e.js",
    "revision": "453a1954a9d2db859d1ccf38df4f7751"
  },
  {
    "url": "assets/js/54.12814a4f.js",
    "revision": "595cb853d163e1bf273e6906366c11a9"
  },
  {
    "url": "assets/js/55.a8f072f1.js",
    "revision": "5eceda8e083ab2617ed5081f41659053"
  },
  {
    "url": "assets/js/56.f109110c.js",
    "revision": "7b8ee1ce080f5aff1675385f117385a2"
  },
  {
    "url": "assets/js/57.2ba274b2.js",
    "revision": "02b10fb72d7efc65a86ada476e794c6e"
  },
  {
    "url": "assets/js/58.d8b8051c.js",
    "revision": "e40c7478383c5d874cf665bfc9b317fc"
  },
  {
    "url": "assets/js/59.6f3b7a72.js",
    "revision": "8788e9fa7f97c1efaa3b7921fc806bf4"
  },
  {
    "url": "assets/js/6.ac399d41.js",
    "revision": "1e4d356e7f16bf810ad61ff73a102584"
  },
  {
    "url": "assets/js/60.f5940ab3.js",
    "revision": "9ff410d58edf7492c3c7a3113f9452bc"
  },
  {
    "url": "assets/js/61.4a7016c2.js",
    "revision": "3cef3fa130082925ec14204fd674040e"
  },
  {
    "url": "assets/js/62.bdf143cd.js",
    "revision": "23c6335323b92949cecb3af859c889f4"
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
    "url": "assets/js/app.4cd70fc6.js",
    "revision": "f15995cf901ffafd8acb591bf044111e"
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
    "revision": "73c283805b2b9105d169054ac2867d7a"
  },
  {
    "url": "categories/database/index.html",
    "revision": "b9330bf36467aee956ce224a0b173d7f"
  },
  {
    "url": "categories/deep learning/index.html",
    "revision": "1daf1b8baf099a787827355e4d221265"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "872525087f23c25cd289d97cdcaffc68"
  },
  {
    "url": "categories/Gallery/index.html",
    "revision": "28d2be621bee34821ad3e4ef85f14902"
  },
  {
    "url": "categories/index.html",
    "revision": "93f07e301facc7aef5ce1297f2519b1c"
  },
  {
    "url": "categories/PM/index.html",
    "revision": "a7c76d42d901aebf0185ab8fe2df1604"
  },
  {
    "url": "categories/project/index.html",
    "revision": "5238fdc03e9779b98ccabd52fb4273fc"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "c109dc2c8441c020e2e0f93379e69d04"
  },
  {
    "url": "categories/WEB/index.html",
    "revision": "9e16c510de33838e4590a3554b169054"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "Deep-Learning/index.html",
    "revision": "9f845665a86b7c0daa62ed607110d59f"
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
    "revision": "b82d6604ff1ce9143cc33435851541d1"
  },
  {
    "url": "Guide/index.html",
    "revision": "b275c578b3271c9c28c857ae324fba6a"
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
    "revision": "aca81140f8634dd978e13b8190f8ad14"
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
    "revision": "0a924d831f7dcc6349b46e3c82596c5d"
  },
  {
    "url": "PM/hot plate welding.html",
    "revision": "fad938ff89f497e00b9624d83c7e83d8"
  },
  {
    "url": "PM/index.html",
    "revision": "718407c1dbdaccc7b73a8536d6c75b47"
  },
  {
    "url": "Project/autowin/index.html",
    "revision": "f2dfd141d6f90a3aca7a9d7984762bcd"
  },
  {
    "url": "Project/autowin/tesla manifold.html",
    "revision": "cca485d837a403bfc76a2f316532addf"
  },
  {
    "url": "Project/blog/favicon.html",
    "revision": "029f27eba5a799aa17d98d3e40709b7b"
  },
  {
    "url": "Project/blog/index.html",
    "revision": "a0489154a2e20768448e6dd37cb8394f"
  },
  {
    "url": "Project/gallery/1. user login backend.html",
    "revision": "64bf623787414e5e22af2f366bcbc884"
  },
  {
    "url": "Project/gallery/2. user login frontend.html",
    "revision": "f0cfefb2b7bc2b811b5b6bf36b6d63e8"
  },
  {
    "url": "Project/gallery/3. gallery backend.html",
    "revision": "56e159332caa254b9c2c1982acd84072"
  },
  {
    "url": "Project/gallery/4. gallery frontend.html",
    "revision": "b325cbbf824938fe93ef24607f94bf70"
  },
  {
    "url": "Project/gallery/index.html",
    "revision": "5139916f0bea454387a929f1784f154c"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "d1a83bd9f1ef761426a4e3382c6c0a1c"
  },
  {
    "url": "Software/index.html",
    "revision": "e87db80374b8ecdbbb54d7ff2ce1991f"
  },
  {
    "url": "Software/Python tools.html",
    "revision": "8e77e710377f6bc682e6e3e5eb57011b"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "68ba998d13e17d36940ea67a13641662"
  },
  {
    "url": "tag/index.html",
    "revision": "dac25fca5e6f01c838c1a4dee99b4432"
  },
  {
    "url": "tags/album/index.html",
    "revision": "d5e263db22a1457e748d3017b5197632"
  },
  {
    "url": "tags/axios/index.html",
    "revision": "e7c1836c64389643c4fee0ed699b4d13"
  },
  {
    "url": "tags/backend/index.html",
    "revision": "ddf399b02f35ee93c90c34d4bc8fa4eb"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "d29713971ed5e69a41d3b1aa2bb1f73f"
  },
  {
    "url": "tags/blow molding/index.html",
    "revision": "523929087ffb805530b9a1574cd4ee80"
  },
  {
    "url": "tags/CDN/index.html",
    "revision": "c3833add954190553aa1ba8a78ad3de6"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "af02d91e66f06564023550bb9be24ff8"
  },
  {
    "url": "tags/django/index.html",
    "revision": "8c6ff08763275abaa3137a357a31e7a5"
  },
  {
    "url": "tags/element plus/index.html",
    "revision": "b9000d81cc4130e06f127d51d43b298f"
  },
  {
    "url": "tags/Favicon/index.html",
    "revision": "30d25c1e0abd3fd2a82c5948ba918e86"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "2da6197f7a28f6e9743384d1f6a9eeea"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "26193741f8962e4b939a16f3a3a582c6"
  },
  {
    "url": "tags/github/index.html",
    "revision": "dafb12d55b7ddbdf3872d65fd99bab65"
  },
  {
    "url": "tags/GM/index.html",
    "revision": "37cf7c3a82676fb7874b21303ff7dc49"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "1edc3990d6638b178b062fad5c3c1487"
  },
  {
    "url": "tags/gps/index.html",
    "revision": "a00bbffad4cebe69446825ce10b081da"
  },
  {
    "url": "tags/guide/index.html",
    "revision": "666fed4edfa0e77243e3817bd8bc5913"
  },
  {
    "url": "tags/job/index.html",
    "revision": "4242546f0e644e0ff2ebadfcd6c97d2c"
  },
  {
    "url": "tags/lightroom/index.html",
    "revision": "71bb65e7be8510dd9523a83d0978f43a"
  },
  {
    "url": "tags/login/index.html",
    "revision": "b7c3de29dd983d855732a75be215376a"
  },
  {
    "url": "tags/manifold/index.html",
    "revision": "cbdbaf1ceb9e138ee377e8f82144fb7c"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "06703bc85967f379100a969940774853"
  },
  {
    "url": "tags/neo4j/index.html",
    "revision": "95ad87dfd5f3976f5ec69c1d796d5dc4"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "b9f71792899703449e09fb7d1d16cc7d"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "b48795b13bc5c61e5bb20ab50b4116b2"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "1b4b0252ec7de93cfaf4f1009c55b180"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "82e95c4abd4a53067f5ecf5758d3ab71"
  },
  {
    "url": "tags/README/index.html",
    "revision": "a8bdcec731a36dfef2716ae323d18a0d"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "2fb92dcab704196a682733dea5381d3a"
  },
  {
    "url": "tags/TESLA/index.html",
    "revision": "75d0d5761480ec9e4bb4d09a85754d45"
  },
  {
    "url": "tags/token/index.html",
    "revision": "5be91555186d3edd4d45687c644a8f12"
  },
  {
    "url": "tags/traceability/index.html",
    "revision": "a7cead16ef73c0ffa9e4e92895c6ea89"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "2925e0da72370238fe4518ac9ae6dc43"
  },
  {
    "url": "tags/upload/index.html",
    "revision": "67537273ebc389fd46fb3fc0f79e4d4e"
  },
  {
    "url": "tags/vue-element-admin/index.html",
    "revision": "ae4079c04f9158ae6d957e7dc05863c2"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "065f1d8ad2e3acc95fe3fe0d1e0ed6d5"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "4bfd021e63ef39719f393b8469e924fa"
  },
  {
    "url": "tags/welding/index.html",
    "revision": "b443937de7c0c72b3d5d5abd44cfb1d2"
  },
  {
    "url": "tags/Wheels/index.html",
    "revision": "4487349786b9ac6db3d6862636dfb54f"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "b0e0ce247fd5045b54879c00599666bd"
  },
  {
    "url": "tags/水印/index.html",
    "revision": "0a9a19def7aa6e100eb66c09ee71a483"
  },
  {
    "url": "tags/裁剪/index.html",
    "revision": "f10d2f91aacee6315441b0aa1b8026c9"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "5edf1dc2936e7281d61fbd5bb2e55cf1"
  },
  {
    "url": "Timeline/index.html",
    "revision": "4cda2a7fe73037d692381ab78d317374"
  },
  {
    "url": "Web/Backend/Django/django wheels.html",
    "revision": "cd6ca4ecb512333925927f6f8b3dc834"
  },
  {
    "url": "Web/Backend/Django/django 云存储.html",
    "revision": "0cc7280ab433d3fb07a3eba0dcd87680"
  },
  {
    "url": "Web/Backend/Django/django 处理保存上传的图片.html",
    "revision": "4d0ddd3a2930575f2bd7d60a02580ab4"
  },
  {
    "url": "Web/Backend/Django/django 网站加速.html",
    "revision": "c5cafee1eda9ee5be80255bb5181b33a"
  },
  {
    "url": "Web/Backend/Django/index.html",
    "revision": "423ed0a7351e2f72a291781cf97396d6"
  },
  {
    "url": "Web/Backend/Nginx/configurin-systemd-service-for-nginx.html",
    "revision": "e64622c40aed3fed25bac23d3f1b5c05"
  },
  {
    "url": "Web/Backend/Nginx/handle-error.html",
    "revision": "a2c319b33d745d2514da821bdc82c348"
  },
  {
    "url": "Web/Backend/Nginx/index.html",
    "revision": "48e254ea5dd89da94760cbe34312efce"
  },
  {
    "url": "Web/Backend/Nginx/install-goaccess.html",
    "revision": "7ddcd5c9fc31bb1e7063e202c2a3fbc4"
  },
  {
    "url": "Web/Backend/Nginx/limit-module.html",
    "revision": "c269a2122434ffbbf875c3105b9468b9"
  },
  {
    "url": "Web/Backend/Nginx/location-rules.html",
    "revision": "13a0b83d91108f9a09426c066126cbdf"
  },
  {
    "url": "Web/Backend/Nginx/master-slave-nginx.html",
    "revision": "0af4b28fa8511c3157953dd3aaf7b41f"
  },
  {
    "url": "Web/Backend/Nginx/nginx-upstream.html",
    "revision": "53ad0931af3b085a974f175e4d1f1427"
  },
  {
    "url": "Web/Backend/Nginx/proxy-pass-rules.html",
    "revision": "e17fccf657659e4e4cd4117bf21c7846"
  },
  {
    "url": "Web/Backend/Nginx/referer-module.html",
    "revision": "1edbc57d3769dff445ae35fd7a73523d"
  },
  {
    "url": "Web/Backend/Nginx/rewrite-rules.html",
    "revision": "b773a9acaf925aef7cb7a7ff7af0b48d"
  },
  {
    "url": "Web/Backend/Nginx/the-difference-between-root-and-alias.html",
    "revision": "a0a745ab81387083ae4f37bdbb456e4c"
  },
  {
    "url": "Web/Backend/Nginx/upgrade-http-to-https.html",
    "revision": "38d12d02381b6f0cb4d9dd34f630b721"
  },
  {
    "url": "Web/Backend/Nginx/websocket-proxy.html",
    "revision": "a7357817bfd7ace518099c83245131fb"
  },
  {
    "url": "Web/Database/index.html",
    "revision": "fd91f60fbef0702a5f8dce4934c4d5af"
  },
  {
    "url": "Web/Database/mysql/index.html",
    "revision": "1bcdb654ea0625ed35cbc0b56d02be22"
  },
  {
    "url": "Web/Database/mysql/insert-update-and-delete.html",
    "revision": "4f60b3aad522e3ec260f137d216aa894"
  },
  {
    "url": "Web/Database/mysql/join-and-union.html",
    "revision": "c792fffa3c969cc260b5fef5a7dd080d"
  },
  {
    "url": "Web/Database/mysql/select.html",
    "revision": "dcaf65422208c040273491a2e67eb851"
  },
  {
    "url": "Web/Database/mysql/stored-procedure.html",
    "revision": "8b70610880a44b57011807409921ca37"
  },
  {
    "url": "Web/Database/mysql/transactions.html",
    "revision": "89fbb438e6dafdd98ad87506e778e4b4"
  },
  {
    "url": "Web/Database/mysql/trigger.html",
    "revision": "a21e57856f43c505063458f9f4ab4f60"
  },
  {
    "url": "Web/Database/mysql/views.html",
    "revision": "95c3e57ad65b7c862d02ede36b50a505"
  },
  {
    "url": "Web/Frondend/vue/index.html",
    "revision": "0113b033a5b5aa3135082cf52a9f9b18"
  },
  {
    "url": "Web/Frondend/vue/ref-type.html",
    "revision": "39ebe6bd25e1cbef6f30fe91b87b5c34"
  },
  {
    "url": "Web/Frondend/vue/the-next-tick.html",
    "revision": "fcaf5ac23d6cff5709a124169c86555a"
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
