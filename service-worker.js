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
    "revision": "3da1860d02f0264db62e2d3323b4a80f"
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
    "url": "assets/js/11.3e6d70f3.js",
    "revision": "25254e93220529ee7b2ffe7ace2bfa1d"
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
    "url": "assets/js/14.98373dc4.js",
    "revision": "e355fa97bc6f051099e0b91373374dde"
  },
  {
    "url": "assets/js/15.2424d994.js",
    "revision": "dc4533bc9cce2b26c00fdc76fae8489b"
  },
  {
    "url": "assets/js/16.819dd6ae.js",
    "revision": "3d7cae67b004b9d2636a872fefe46c57"
  },
  {
    "url": "assets/js/17.0eb41031.js",
    "revision": "49fcbb517d51262057c26cd26c98d876"
  },
  {
    "url": "assets/js/18.0ebbfe4e.js",
    "revision": "6411ee7e09e6ea758d4a2c566de30359"
  },
  {
    "url": "assets/js/19.eb14fdda.js",
    "revision": "9573bb4d6cbe7e66d07a8beac44b46a8"
  },
  {
    "url": "assets/js/20.a0511b75.js",
    "revision": "3d9fb446d60897e77ae543721268fc34"
  },
  {
    "url": "assets/js/21.06a777d8.js",
    "revision": "3d1e846cfab599068da2a0475033a7c4"
  },
  {
    "url": "assets/js/22.c1a4a202.js",
    "revision": "516fbe143be439425ec1167d7a64bf61"
  },
  {
    "url": "assets/js/23.caceb841.js",
    "revision": "e949556c882d8453b65c11cf2759db8d"
  },
  {
    "url": "assets/js/24.2966e2c4.js",
    "revision": "d47d4efea68c7e911367aa41418156f0"
  },
  {
    "url": "assets/js/25.7733b3c9.js",
    "revision": "b5a99ddd55ccb9e7c022aa0219ec6421"
  },
  {
    "url": "assets/js/26.adc380de.js",
    "revision": "377f18e623ba9579fc4497c38c6019ac"
  },
  {
    "url": "assets/js/27.06df3ad5.js",
    "revision": "99bfb7e11bbd118e85dff9e1b7ccc5c1"
  },
  {
    "url": "assets/js/28.38805a94.js",
    "revision": "1f47bdba9f319bb43d80022e05d50015"
  },
  {
    "url": "assets/js/29.7b476230.js",
    "revision": "f02d10eebbc4586b434d13a669d51efe"
  },
  {
    "url": "assets/js/30.621d4cc4.js",
    "revision": "5e38d498c1c7a13f4818a531b4c93af9"
  },
  {
    "url": "assets/js/31.a5180106.js",
    "revision": "fd2ba696a00ad6467a41d5e8a38b2612"
  },
  {
    "url": "assets/js/32.2e119cff.js",
    "revision": "d583e29860d53bc073a421a950d1be2a"
  },
  {
    "url": "assets/js/33.17cd16dc.js",
    "revision": "838ee563647f9531d720bd70676311c5"
  },
  {
    "url": "assets/js/34.e410844e.js",
    "revision": "0872905ae88b77fac68eccd128cd1088"
  },
  {
    "url": "assets/js/35.b24e0ccf.js",
    "revision": "152c7cf5e2ad20f6b2bb21a9fbba12da"
  },
  {
    "url": "assets/js/36.b8b0b1ef.js",
    "revision": "532509efd16dc37ea9e2a824f5a5c3fa"
  },
  {
    "url": "assets/js/37.336fe321.js",
    "revision": "e8a0e657b0f44bef4670b2ba06a49eb4"
  },
  {
    "url": "assets/js/38.d28abd8a.js",
    "revision": "203cd4ec31d9e6089e63824b9dbac60f"
  },
  {
    "url": "assets/js/39.0f98e992.js",
    "revision": "b3584ed570f4a88b8e176a871f5d4965"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.674b458b.js",
    "revision": "e68dedadf0efce5d5c283b86343ad463"
  },
  {
    "url": "assets/js/41.92ebc908.js",
    "revision": "2f331e5ed4b1df15e57f15b823b930c8"
  },
  {
    "url": "assets/js/42.25721c73.js",
    "revision": "d4313aa3ccc5a99621f11c393536b9ff"
  },
  {
    "url": "assets/js/43.2e0b4022.js",
    "revision": "2b94d464593a25c6027baf81dacf9f70"
  },
  {
    "url": "assets/js/44.b55ca899.js",
    "revision": "d3b7fb12bda8b32a6420d8dc71b303d5"
  },
  {
    "url": "assets/js/45.60e0caaa.js",
    "revision": "52deee8dd869231e565aed035b6d6383"
  },
  {
    "url": "assets/js/46.c40f79e3.js",
    "revision": "2f79ad877828a4172ea2bb7c8e5e5961"
  },
  {
    "url": "assets/js/47.139bf818.js",
    "revision": "d9d8274fd3997e7a9ebe1feae9714acb"
  },
  {
    "url": "assets/js/48.0aed1ed5.js",
    "revision": "898bf1790971844478cdc61a88db6842"
  },
  {
    "url": "assets/js/49.c7eb147e.js",
    "revision": "1f97a6aec11656057e851268c292ff3b"
  },
  {
    "url": "assets/js/5.03b654a4.js",
    "revision": "f7c2f4b3459d78f7961544e12ac909bd"
  },
  {
    "url": "assets/js/50.e1108d0a.js",
    "revision": "949ff11d721f61b064da82e278618558"
  },
  {
    "url": "assets/js/51.586d6a18.js",
    "revision": "507dd9ae1d5262fb473f6988db27edf1"
  },
  {
    "url": "assets/js/52.61c7348d.js",
    "revision": "23e8597fec839e5c353b5942701f3601"
  },
  {
    "url": "assets/js/53.10792eba.js",
    "revision": "d8a0b2c2949e86b522bdfd0ec49dd267"
  },
  {
    "url": "assets/js/54.a80c62c1.js",
    "revision": "3167c5086059b0410f2dd95c01483651"
  },
  {
    "url": "assets/js/55.a6b5ad95.js",
    "revision": "3bf8c9eca5b83b2ff0767944ef4c1938"
  },
  {
    "url": "assets/js/56.9c414d84.js",
    "revision": "c6bfc63ecdacbb5c044490713b382cf3"
  },
  {
    "url": "assets/js/57.1196de68.js",
    "revision": "dc04e8445490f3349e5916443d810a42"
  },
  {
    "url": "assets/js/58.cb00fe9b.js",
    "revision": "359c6dba91c310152e7c5f46fb82d21e"
  },
  {
    "url": "assets/js/59.df2018a9.js",
    "revision": "9f1007414bcbbf602a179ca20d825391"
  },
  {
    "url": "assets/js/6.ac399d41.js",
    "revision": "1e4d356e7f16bf810ad61ff73a102584"
  },
  {
    "url": "assets/js/60.4d053b48.js",
    "revision": "2b51f47476b95acd678c7d497e3db2a3"
  },
  {
    "url": "assets/js/61.1cd8033c.js",
    "revision": "8e58a93da3dc411ddad495e11c702fb1"
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
    "url": "assets/js/app.5305b71e.js",
    "revision": "641654aecebc0db19cc700556a5d1226"
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
    "revision": "8f54a688e8a80020733b600dd3c53673"
  },
  {
    "url": "categories/database/index.html",
    "revision": "fccf1b062dcea44dd89424e383ebb79a"
  },
  {
    "url": "categories/deep learning/index.html",
    "revision": "65ef53821ee28ed3e32f4f192fbbe89c"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "7180027b8e8380b7610461f12a11b2b4"
  },
  {
    "url": "categories/Gallery/index.html",
    "revision": "6480294544626a0d20ee4d5b28102082"
  },
  {
    "url": "categories/index.html",
    "revision": "a5f51dc057045ebde04c0827d0ae41a1"
  },
  {
    "url": "categories/PM/index.html",
    "revision": "c422bb0fe879b0be81413c0d6968baea"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "d33bb89e090f57e5bd6e419fcdcc595d"
  },
  {
    "url": "categories/WEB/index.html",
    "revision": "f64ac51049341e9520abc6952a4b5e2a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "Deep-Learning/index.html",
    "revision": "54ee02f5d713993cc493612cfbf089d2"
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
    "revision": "a8ba8c7ba471a0968bd3e4c5673995df"
  },
  {
    "url": "Guide/index.html",
    "revision": "1414ab7349ca8aac019aa6b01479b1e5"
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
    "revision": "4fc6f2c324194a69235af3734ecaa75f"
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
    "revision": "31713a884dccdb6deb8d25c0047a80b9"
  },
  {
    "url": "PM/hot plate welding.html",
    "revision": "49f766860f9b37c9a2df26d8f902f9cf"
  },
  {
    "url": "PM/index.html",
    "revision": "be95cb6185aa3abd868f63aa6976c374"
  },
  {
    "url": "Project/blog/favicon.html",
    "revision": "48580a8c4dc2daab475dd304c24118b6"
  },
  {
    "url": "Project/blog/index.html",
    "revision": "b4c8aa87b9a476784733aa1356d5a299"
  },
  {
    "url": "Project/gallery/1. user login backend.html",
    "revision": "25a87e8aa2e90b3bf5f3bf2910690c55"
  },
  {
    "url": "Project/gallery/2. user login frontend.html",
    "revision": "b2a662f00f921822d4968da68e6a2442"
  },
  {
    "url": "Project/gallery/3. gallery backend.html",
    "revision": "fd3a30d5856c6febd01b3f0d204f83a3"
  },
  {
    "url": "Project/gallery/4. gallery frontend.html",
    "revision": "1ed117446557c2914644bda9b3d337e0"
  },
  {
    "url": "Project/gallery/index.html",
    "revision": "43072f2d6eab7f6a75e20b31ee13bd11"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "d151a1c99f677fc2f78554a38714322b"
  },
  {
    "url": "Software/index.html",
    "revision": "ad9631cfbdff4a69572d1f8da802735d"
  },
  {
    "url": "Software/Python tools.html",
    "revision": "32aac37c809d9176d8320b26b1c263b9"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "83678a88b90f4639fac1317ca6747d34"
  },
  {
    "url": "tag/index.html",
    "revision": "825dd8c9e2a6f5e34612114e355ac360"
  },
  {
    "url": "tags/album/index.html",
    "revision": "d3bbfb61ff3714d0451b04823f75679b"
  },
  {
    "url": "tags/axios/index.html",
    "revision": "7735f7bbb956ebd4e6069b60dc5039d2"
  },
  {
    "url": "tags/backend/index.html",
    "revision": "757b0a31cdafb2ec734fd0d8d30c9705"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "5a4f577031897d5102e560a0b2c2895c"
  },
  {
    "url": "tags/blow molding/index.html",
    "revision": "8c29e5c578ad370a0992604d08a8fd29"
  },
  {
    "url": "tags/CDN/index.html",
    "revision": "d0e0f52057daabec56a4f238612af881"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "77013d0138338b9f8369c2ef37f68617"
  },
  {
    "url": "tags/django/index.html",
    "revision": "520222ed726b88c482648d210b2cf9ba"
  },
  {
    "url": "tags/element plus/index.html",
    "revision": "18059edaf1400a8636697d97001c6fbc"
  },
  {
    "url": "tags/Favicon/index.html",
    "revision": "0d3cc3effcd6e7fe3919e4974de0a333"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "780a76cc5972c979638ffaa6abd6b050"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "a40fad361811fc15fdcb700941909b71"
  },
  {
    "url": "tags/github/index.html",
    "revision": "2b9b581c10cd1ad5ef3b7807604b268f"
  },
  {
    "url": "tags/GM/index.html",
    "revision": "76fbfd844842fae6dde44fd262a82294"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "d712150e58118d6f522975a67beade71"
  },
  {
    "url": "tags/gps/index.html",
    "revision": "7fdc7bf7d235aa8bd3c88344cd818831"
  },
  {
    "url": "tags/guide/index.html",
    "revision": "9bbbd9d3d19b69a82c40f2bf2d48dc26"
  },
  {
    "url": "tags/lightroom/index.html",
    "revision": "5144c28b908d81a91d432e7f7e356723"
  },
  {
    "url": "tags/login/index.html",
    "revision": "05f80135110ad751e2f556aa87429e83"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "a3b0b13a47b4d31b05eb73a35125b074"
  },
  {
    "url": "tags/neo4j/index.html",
    "revision": "80dc13baad17280b28711a1970f62de5"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "50bae8b4301a3f4d32c4754723ece270"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "14aa1ac862fae6b066fde2536d2cc1f8"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "78875814bec0c36bc4964128c35aef37"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "799f767ee214b984f2885464f5075d56"
  },
  {
    "url": "tags/README/index.html",
    "revision": "1a656b9b8f0a83c880686f684374a643"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "2534dbe7d73b8c6a598e3db85644d614"
  },
  {
    "url": "tags/TESLA/index.html",
    "revision": "7f8fbedd4096bc9fc901e6b1bbe531b6"
  },
  {
    "url": "tags/token/index.html",
    "revision": "986c544c6a818a53cfd4da194c2863bd"
  },
  {
    "url": "tags/traceability/index.html",
    "revision": "0e4f0b8145ea76fea296b7beac5c7cc1"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "20f5f4436317a1fc3ff08684b8094e53"
  },
  {
    "url": "tags/upload/index.html",
    "revision": "5667d4efeba1354bef0f22fb5ff46562"
  },
  {
    "url": "tags/vue-element-admin/index.html",
    "revision": "a1f62a307677dae66cabb3215f82aba0"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "dae2bfb98c66ab92a9e54695c79ed42b"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "8c4e36a6d2fcd287c8ebd55bef63b29e"
  },
  {
    "url": "tags/welding/index.html",
    "revision": "2b1bca2b54b89c1bf9f7ee9a3ac1b867"
  },
  {
    "url": "tags/Wheels/index.html",
    "revision": "94237f2bb556efb0d4eec64fc19b1c9c"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "62a949aae9fc1936ed50792611b94e08"
  },
  {
    "url": "tags/水印/index.html",
    "revision": "ce0e553ed06230aa1860d8e4ada19d56"
  },
  {
    "url": "tags/裁剪/index.html",
    "revision": "f27de62e38f6a2ad52e1bdfedf93c2d9"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "84494e613d8f1499ecc7e592803a3359"
  },
  {
    "url": "Timeline/index.html",
    "revision": "93667d388c55aeb58c24864a793ca884"
  },
  {
    "url": "Web/Backend/Django/django wheels.html",
    "revision": "e6af27ae9891d2b83f4fd2ac8b20588b"
  },
  {
    "url": "Web/Backend/Django/django 云存储.html",
    "revision": "e49c8264265d054a4e536a4da4ec24e6"
  },
  {
    "url": "Web/Backend/Django/django 处理保存上传的图片.html",
    "revision": "82047fdf6e65ada81e222b7c25cb584f"
  },
  {
    "url": "Web/Backend/Django/django 网站加速.html",
    "revision": "6c772720a8861fe49235da3b4658f7d1"
  },
  {
    "url": "Web/Backend/Django/index.html",
    "revision": "26b3fde0ecfe4787037277235cc91945"
  },
  {
    "url": "Web/Backend/Nginx/configurin-systemd-service-for-nginx.html",
    "revision": "4a451a7a4bd85bcc8a6120ba7c7e74fa"
  },
  {
    "url": "Web/Backend/Nginx/handle-error.html",
    "revision": "4effa4709e5397e9f120c68d4e084a54"
  },
  {
    "url": "Web/Backend/Nginx/index.html",
    "revision": "190cd88c4e0447b95849c86135ddb4b6"
  },
  {
    "url": "Web/Backend/Nginx/install-goaccess.html",
    "revision": "7bff80556659b7331dac75dd892822c4"
  },
  {
    "url": "Web/Backend/Nginx/limit-module.html",
    "revision": "3ce0624925f105aa9e91d7d4817ad632"
  },
  {
    "url": "Web/Backend/Nginx/location-rules.html",
    "revision": "ba0ccee869207d8b48ebf0c5ad5098da"
  },
  {
    "url": "Web/Backend/Nginx/master-slave-nginx.html",
    "revision": "413f1e5a329f70e5b199a37ec67701e3"
  },
  {
    "url": "Web/Backend/Nginx/nginx-upstream.html",
    "revision": "1bba37464765ea89c167c541d04294e0"
  },
  {
    "url": "Web/Backend/Nginx/proxy-pass-rules.html",
    "revision": "9b87ff0bb07b66ad0bb2f593e4b1ad6a"
  },
  {
    "url": "Web/Backend/Nginx/referer-module.html",
    "revision": "8a484b0597282edc999e3b35dc049334"
  },
  {
    "url": "Web/Backend/Nginx/rewrite-rules.html",
    "revision": "67f6bcad2ecd5ccdfbacf7de65f0b1a4"
  },
  {
    "url": "Web/Backend/Nginx/the-difference-between-root-and-alias.html",
    "revision": "ecdea0fe05c6b275a3d5853d2bb0f7a9"
  },
  {
    "url": "Web/Backend/Nginx/upgrade-http-to-https.html",
    "revision": "4ef7f847a7fea1d7a2463964226b452d"
  },
  {
    "url": "Web/Backend/Nginx/websocket-proxy.html",
    "revision": "d762363dd00a6800ed9298bf68743e98"
  },
  {
    "url": "Web/Database/index.html",
    "revision": "d3dec7f910049da7b45bd83c2f669dfd"
  },
  {
    "url": "Web/Database/mysql/index.html",
    "revision": "8e361ca1974ac84fe5e4743c3a6de424"
  },
  {
    "url": "Web/Database/mysql/insert-update-and-delete.html",
    "revision": "bf7b378b89969372bc91a0b495921b0d"
  },
  {
    "url": "Web/Database/mysql/join-and-union.html",
    "revision": "d7f288d37c4438c577f1af61badd30b2"
  },
  {
    "url": "Web/Database/mysql/select.html",
    "revision": "f6f44b4ab05fcf0dea997ea8fc70736a"
  },
  {
    "url": "Web/Database/mysql/stored-procedure.html",
    "revision": "d77f42e9ec929db95bc500dec1f14681"
  },
  {
    "url": "Web/Database/mysql/transactions.html",
    "revision": "919cd8ee5db6add5305fe2aaaf186a32"
  },
  {
    "url": "Web/Database/mysql/trigger.html",
    "revision": "33ffa84acb10ccfe6b96d57ad25f9668"
  },
  {
    "url": "Web/Database/mysql/views.html",
    "revision": "acf9ce469cb53cff8c33f427b23ba782"
  },
  {
    "url": "Web/Frondend/vue/index.html",
    "revision": "a2aefc1094cf4385362d559185d28ea8"
  },
  {
    "url": "Web/Frondend/vue/ref-type.html",
    "revision": "8d6c70ac0c0e1a34a1ee714e4df77155"
  },
  {
    "url": "Web/Frondend/vue/the-next-tick.html",
    "revision": "cac1d49eda71af6129cd49f2fe3cd548"
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
