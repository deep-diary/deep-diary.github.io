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
    "revision": "1db39cd7f6164c029f2902b1971939ec"
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
    "url": "assets/js/12.260632a2.js",
    "revision": "a887a045cd86121db3dd25bab170ed95"
  },
  {
    "url": "assets/js/13.b35fb61d.js",
    "revision": "918a30990fad639376949211216f78b5"
  },
  {
    "url": "assets/js/14.04efaa67.js",
    "revision": "9ea18232156b1c077d150d1905668b60"
  },
  {
    "url": "assets/js/15.e7dbf484.js",
    "revision": "d664d9b3b2d88d62d15d384a8181b8e4"
  },
  {
    "url": "assets/js/16.5685503c.js",
    "revision": "1330ff09d2ce4cbb319dd9fa1fe5f9f5"
  },
  {
    "url": "assets/js/17.96f863b8.js",
    "revision": "491927333f362d68d5bd2499f6b21f9c"
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
    "url": "assets/js/21.95ccfac9.js",
    "revision": "5849416e8e2c521407ead47b25787cb1"
  },
  {
    "url": "assets/js/22.3da06a6f.js",
    "revision": "1f009f47472773f59fa65d48428479ef"
  },
  {
    "url": "assets/js/23.d404048e.js",
    "revision": "ec3c26f459938b087ebfe7a173e7abf0"
  },
  {
    "url": "assets/js/24.123523f2.js",
    "revision": "ce8eb3e0f6a519ddf543e3136397bf43"
  },
  {
    "url": "assets/js/25.319b13f2.js",
    "revision": "852674a8b4c524448a62c0a17e253d62"
  },
  {
    "url": "assets/js/26.48c54d45.js",
    "revision": "4e4515f66a98f9753e2335fa134bad46"
  },
  {
    "url": "assets/js/27.122fa9f3.js",
    "revision": "c13236bf43009df8cb7f1af7b791464c"
  },
  {
    "url": "assets/js/28.e8a389a9.js",
    "revision": "711c12db3ae04bcd70e738292dacfe79"
  },
  {
    "url": "assets/js/29.38c8031e.js",
    "revision": "d89db0dc2904edde437aefca95e9aa95"
  },
  {
    "url": "assets/js/30.df99f05f.js",
    "revision": "d084742ae1eb10dd365f55bbfd6f622e"
  },
  {
    "url": "assets/js/31.8830d42d.js",
    "revision": "37dd771d877c54b815087983c2b4db96"
  },
  {
    "url": "assets/js/32.94057ec6.js",
    "revision": "cba77e339c89d2bfaf8a9a9b6a8aaeac"
  },
  {
    "url": "assets/js/33.6dbc3938.js",
    "revision": "9bcd0be5f6b6ed930431d6b188a0692a"
  },
  {
    "url": "assets/js/34.20f696ea.js",
    "revision": "f6fe8a55ee232b8a0c104f3ec4d53f3a"
  },
  {
    "url": "assets/js/35.52025f12.js",
    "revision": "8bdc3a8e9941343a21698010d8d15d7e"
  },
  {
    "url": "assets/js/36.bff7f8f5.js",
    "revision": "5792d9c83422d4dd148e6a633f5baf4d"
  },
  {
    "url": "assets/js/37.2531bc74.js",
    "revision": "68348f153c0f3f30ab3cf8a8219f2641"
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
    "url": "assets/js/40.3c9d2307.js",
    "revision": "17dd584383b044db6e4e7b43f9ba52cd"
  },
  {
    "url": "assets/js/41.725f7bb5.js",
    "revision": "0e75f2c1207ec678d24534fffc8cb8ff"
  },
  {
    "url": "assets/js/42.6ac50bb8.js",
    "revision": "68cf1b0be8629f327ca66a0e2d07f375"
  },
  {
    "url": "assets/js/43.4b0a6046.js",
    "revision": "d962c0841bdc7d9953b72fda05f5fbe4"
  },
  {
    "url": "assets/js/44.9f31170d.js",
    "revision": "b7af300490e372db45ccea661873b7cf"
  },
  {
    "url": "assets/js/45.6c7c0da5.js",
    "revision": "8d85cd1a8cf8bbaf1352de777cdb2a6b"
  },
  {
    "url": "assets/js/46.c7d3be00.js",
    "revision": "b3f9b5b621b3dd5bb232e62e9afa4fe8"
  },
  {
    "url": "assets/js/47.9bd3a37f.js",
    "revision": "dd6ce3c4e29f73a086f44f10dfe394de"
  },
  {
    "url": "assets/js/48.96d57d9d.js",
    "revision": "83bc8089663eb0a8bc5ebc79e690cdd7"
  },
  {
    "url": "assets/js/49.64744b7f.js",
    "revision": "ec09126caa7637b5cc77b2d6ffb0db69"
  },
  {
    "url": "assets/js/5.03b654a4.js",
    "revision": "f7c2f4b3459d78f7961544e12ac909bd"
  },
  {
    "url": "assets/js/50.47585ab9.js",
    "revision": "ffb47029fb472f42755eebb2376a86a6"
  },
  {
    "url": "assets/js/51.475d17d4.js",
    "revision": "34d1bb27b948a3ba9118f95e0eac7993"
  },
  {
    "url": "assets/js/52.c1071188.js",
    "revision": "cb2b64a433d82481f9e3eaff6488c1bc"
  },
  {
    "url": "assets/js/53.864f7c5b.js",
    "revision": "bace76adf955c498c16365ed3ed31db3"
  },
  {
    "url": "assets/js/54.6829b1e6.js",
    "revision": "d7521de93d3cf396825bb26b3c00b90a"
  },
  {
    "url": "assets/js/55.9fdb9362.js",
    "revision": "1a3926c54ece7ad856c4721e75fa1c7c"
  },
  {
    "url": "assets/js/56.9d5533d1.js",
    "revision": "8072f38a245ab1cc778de22ccc53cb62"
  },
  {
    "url": "assets/js/57.cead403c.js",
    "revision": "5240dd77485e16ede224d1ffd1d7211e"
  },
  {
    "url": "assets/js/58.f14c9fba.js",
    "revision": "c3a129d2ce3cd9daca2ad2e5f1a84edc"
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
    "url": "assets/js/app.ad7d2d07.js",
    "revision": "94a3b88343272a9face1974e86cd99b0"
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
    "revision": "8ef8d31b3871347a26ae209e2de4ae43"
  },
  {
    "url": "categories/database/index.html",
    "revision": "f74a81104773a1fcdfeb74f3f4aa23f2"
  },
  {
    "url": "categories/deep learning/index.html",
    "revision": "dad85a04600d50a166eaa135d962904b"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "89fdc001d863354e5d7debe55544cff7"
  },
  {
    "url": "categories/Gallery/index.html",
    "revision": "712e45fb8c9308b01c1bb808b84a1304"
  },
  {
    "url": "categories/index.html",
    "revision": "39e45ff9e680ad75c122c93a64362e4e"
  },
  {
    "url": "categories/PM/index.html",
    "revision": "e979ab28282c446d783d348e6c5b0334"
  },
  {
    "url": "categories/project/index.html",
    "revision": "82685d71ffc899bae0050f0452fb36cb"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "8c1db94a241160705585917f2a9bd00d"
  },
  {
    "url": "categories/WEB/index.html",
    "revision": "fb56d43e46768d525ac8ba06912041cd"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "Deep-Learning/index.html",
    "revision": "3d5d0def8ef81abe73f34c468392ced9"
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
    "revision": "b70f8781edee4a80f548dd268cc2ac6f"
  },
  {
    "url": "Guide/index.html",
    "revision": "457671773ecfeb375eadea0c4c07ee02"
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
    "revision": "d6bc6026ffaa5f99fc96a6b6af51e7df"
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
    "revision": "208092133b9ee3a39cac89aa015aace3"
  },
  {
    "url": "PM/hot plate welding.html",
    "revision": "91c8617306a3e2b303d89e18738091e1"
  },
  {
    "url": "PM/index.html",
    "revision": "7ec4bd437426dac1d51466bab630ab68"
  },
  {
    "url": "Project/autowin/index.html",
    "revision": "986d1660a51bbc8fcfacc654dafea0fe"
  },
  {
    "url": "Project/autowin/tesla manifold.html",
    "revision": "77b15648ca5bc398978ea5668da96093"
  },
  {
    "url": "Project/blog/favicon.html",
    "revision": "74906438ee6e3e18132a64c1743cea1a"
  },
  {
    "url": "Project/blog/index.html",
    "revision": "fded631b4997e8462dd7c29190ac8fa6"
  },
  {
    "url": "Project/gallery/1. user login backend.html",
    "revision": "245f2857523cba278f113c3016f28214"
  },
  {
    "url": "Project/gallery/2. user login frontend.html",
    "revision": "250aa8ca4bbef6fb152605c6b82dc83f"
  },
  {
    "url": "Project/gallery/3. gallery backend.html",
    "revision": "44d590f41f3c9aaf153d6c9fad0211a2"
  },
  {
    "url": "Project/gallery/4. gallery frontend.html",
    "revision": "5a0faf09cd43b2b3c26564d52b120e0e"
  },
  {
    "url": "Project/gallery/index.html",
    "revision": "0fb298ddb2b6d06be3ae6a359d995246"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "01672b1e6258440dfcdad6462b741d89"
  },
  {
    "url": "Software/index.html",
    "revision": "76d241ba9dd6cc72b6c3ffff08159f84"
  },
  {
    "url": "Software/Python tools.html",
    "revision": "cf326b1797478060794939dc8cda60b3"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "3421fde6f0467e38baf2c45e389f64ef"
  },
  {
    "url": "tag/index.html",
    "revision": "1f18f85c2e4b14359da138f51d76f156"
  },
  {
    "url": "tags/album/index.html",
    "revision": "992db8c01d05e1b8b1dbb621058a1fe4"
  },
  {
    "url": "tags/axios/index.html",
    "revision": "103edf4d51f817de126d9d0032b12398"
  },
  {
    "url": "tags/backend/index.html",
    "revision": "c110f17b50447ea9ae1a3d751ba0c903"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "788385e1a5cdd25c3cb931e0562b82ef"
  },
  {
    "url": "tags/blow molding/index.html",
    "revision": "a82af9f48e5dcd0cdfaf06a1a66dfa4c"
  },
  {
    "url": "tags/CDN/index.html",
    "revision": "f4cfc253cf438632df6153b16685f836"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "1b5a92a56a5d97866c60a2670891cafc"
  },
  {
    "url": "tags/django/index.html",
    "revision": "05d35bc37f11558c3e88d0854b508353"
  },
  {
    "url": "tags/element plus/index.html",
    "revision": "276129067bf12d17a8fd2790ab2eebb0"
  },
  {
    "url": "tags/Favicon/index.html",
    "revision": "442640bf7d809d845bf79b2f3fa9929b"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "bf4f9d3fcc505d40cb420f7413865a29"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "01bfa5df727e2158221137b03c1ec0d9"
  },
  {
    "url": "tags/github/index.html",
    "revision": "b5fb817239e06099dca0fa31013da0f3"
  },
  {
    "url": "tags/GM/index.html",
    "revision": "1e4dc1d43667e726de7146c625a48487"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "07fbec2168b8c3471c7c3c77b0ce50d1"
  },
  {
    "url": "tags/gps/index.html",
    "revision": "25a844bce299aa7d89a2a41f2e04ce4b"
  },
  {
    "url": "tags/guide/index.html",
    "revision": "09825b72a6afc4af921b61b9d28f0fd3"
  },
  {
    "url": "tags/job/index.html",
    "revision": "34976ec18cd30a274b2095e3c98f7beb"
  },
  {
    "url": "tags/lightroom/index.html",
    "revision": "496a8804bb37078ec9e9e772548bab22"
  },
  {
    "url": "tags/login/index.html",
    "revision": "12c2751e198464b2b349685aca6e1571"
  },
  {
    "url": "tags/manifold/index.html",
    "revision": "3335b0662c1f03d05407b7388ea4991b"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "d5ec5ddfa90cdcc79ab192d293fc1219"
  },
  {
    "url": "tags/neo4j/index.html",
    "revision": "eaa03f9c3b33123da4b4093cc6490bed"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "4a09b7705f684934fdad66a8e28bea28"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "e55f1ed3bc67fce955225361a9afdbfa"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "5d09c993139a6bf52e77e61841b29e87"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "49445eec1758a2c60659a4cdc83b3b84"
  },
  {
    "url": "tags/README/index.html",
    "revision": "17b890f82d5fcf945dfd8393cf0734cf"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "e18ae5bc71fcffdf4ccd311aa9d99a63"
  },
  {
    "url": "tags/TESLA/index.html",
    "revision": "b59480f411700f378c56cb35a270b430"
  },
  {
    "url": "tags/token/index.html",
    "revision": "fee704f12c825b820ec8d7a8a3b7f5d3"
  },
  {
    "url": "tags/traceability/index.html",
    "revision": "3d5b3392521baccb0c4bf126f1731f42"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "c32af11ea5db3f080d3956b90754f194"
  },
  {
    "url": "tags/upload/index.html",
    "revision": "82903fa9d13028182effe79454bcb8d5"
  },
  {
    "url": "tags/vue-element-admin/index.html",
    "revision": "c127674a0344341976c2832f32215ce9"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "621970438823e6fe93ee5c9ee25e318c"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "63b836e90a0c81ef73e59aaa993a485f"
  },
  {
    "url": "tags/welding/index.html",
    "revision": "988aa38dbb0afe81f040b544b79ced8d"
  },
  {
    "url": "tags/Wheels/index.html",
    "revision": "eeacfd24aea6c1f50868be98c70a9a4b"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "84cd1b233840f9d407711ffa3a252b9d"
  },
  {
    "url": "tags/水印/index.html",
    "revision": "947ef848e3d27e1d020c718ac8cbc17d"
  },
  {
    "url": "tags/裁剪/index.html",
    "revision": "7d03c0c028c1274cca9171ffeda9fa39"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "a7d48e7f6e10d110323e00215a8acab8"
  },
  {
    "url": "Timeline/index.html",
    "revision": "b7bb347b2df66f38097d9fd24eb8889d"
  },
  {
    "url": "Web/Backend/Django/django wheels.html",
    "revision": "f9a61ce73a4ad72b9c79da93071d016c"
  },
  {
    "url": "Web/Backend/Django/django 云存储.html",
    "revision": "8116b6dff71e747da3b00af585150b68"
  },
  {
    "url": "Web/Backend/Django/django 处理保存上传的图片.html",
    "revision": "2d0f940a62ed4e4c072cf2bfc3928304"
  },
  {
    "url": "Web/Backend/Django/django 网站加速.html",
    "revision": "2a2df0119e51ebd3d8dda44ba4a64dba"
  },
  {
    "url": "Web/Backend/Django/index.html",
    "revision": "59821c571b6f0e8612d6bf40918e837e"
  },
  {
    "url": "Web/Backend/Nginx/configurin-systemd-service-for-nginx.html",
    "revision": "083d754fa16ded3928e8923ec34665e3"
  },
  {
    "url": "Web/Backend/Nginx/handle-error.html",
    "revision": "26b1502a0a5083b5832d5f08dce68a68"
  },
  {
    "url": "Web/Backend/Nginx/index.html",
    "revision": "74f741f17cb9bd4ddab961594834bb9c"
  },
  {
    "url": "Web/Backend/Nginx/install-goaccess.html",
    "revision": "4258d6046b73e6acaf2c5caa4dbfc371"
  },
  {
    "url": "Web/Backend/Nginx/limit-module.html",
    "revision": "8c40a29a2f20f6ec5b6139266758cd34"
  },
  {
    "url": "Web/Backend/Nginx/location-rules.html",
    "revision": "6248dc97ef8e0693fd56b57a9dc61cb4"
  },
  {
    "url": "Web/Backend/Nginx/master-slave-nginx.html",
    "revision": "5b294b97cab7916d7200e194d8215bee"
  },
  {
    "url": "Web/Backend/Nginx/nginx-upstream.html",
    "revision": "c084ec9362cfb20255b2a1618ddb0ab1"
  },
  {
    "url": "Web/Backend/Nginx/proxy-pass-rules.html",
    "revision": "cdae312d2721e26a2023f105935663f1"
  },
  {
    "url": "Web/Backend/Nginx/referer-module.html",
    "revision": "06f67be5854c83b9143d42f990aeca44"
  },
  {
    "url": "Web/Backend/Nginx/rewrite-rules.html",
    "revision": "fb660576d805678fa1a68c96be9457a4"
  },
  {
    "url": "Web/Backend/Nginx/the-difference-between-root-and-alias.html",
    "revision": "254a7d313412ec4ef74e04e15fb39c86"
  },
  {
    "url": "Web/Backend/Nginx/upgrade-http-to-https.html",
    "revision": "cc5b62c38796054f04bcd129fce79060"
  },
  {
    "url": "Web/Backend/Nginx/websocket-proxy.html",
    "revision": "b697ab48011a9f0226503e6b89874854"
  },
  {
    "url": "Web/Database/index.html",
    "revision": "ab950951894c7285e09deb079ae4e414"
  },
  {
    "url": "Web/Database/mysql/index.html",
    "revision": "965eda8a85131e70db6c7be2e435154b"
  },
  {
    "url": "Web/Database/mysql/insert-update-and-delete.html",
    "revision": "7764f21c07b1ba257954763530916f77"
  },
  {
    "url": "Web/Database/mysql/join-and-union.html",
    "revision": "a5420781467eeb408d9beaaff700a41f"
  },
  {
    "url": "Web/Database/mysql/select.html",
    "revision": "d52620696dd91adcf913e605147e5952"
  },
  {
    "url": "Web/Database/mysql/stored-procedure.html",
    "revision": "25fb597f6d1c9a49f8b1fe78352c8211"
  },
  {
    "url": "Web/Database/mysql/transactions.html",
    "revision": "4a73d7b6ecde62923e8bde1cec4442e1"
  },
  {
    "url": "Web/Database/mysql/trigger.html",
    "revision": "9794115b54161cce0a15781ec120a046"
  },
  {
    "url": "Web/Database/mysql/views.html",
    "revision": "fec8610ae782121c95001051e769956c"
  },
  {
    "url": "Web/Frondend/vue/index.html",
    "revision": "09343ac52e38210164e89187d1d5cb7f"
  },
  {
    "url": "Web/Frondend/vue/ref-type.html",
    "revision": "3fda83a76b53a7b841bdff86e2c576c8"
  },
  {
    "url": "Web/Frondend/vue/the-next-tick.html",
    "revision": "656682255f428dd2da4f796753a58b43"
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
