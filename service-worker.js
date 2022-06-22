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
    "revision": "ad6c76c597b9a9591e6bf9041e044712"
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
    "url": "assets/js/11.0afb4233.js",
    "revision": "3af0312fb4837f9d7f3cfc3bf6831aef"
  },
  {
    "url": "assets/js/12.52bea41e.js",
    "revision": "5a0e751f53a045ced46cda45765f2fbd"
  },
  {
    "url": "assets/js/13.165204d6.js",
    "revision": "76ee263dd53ed455a2ab51bca9740550"
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
    "url": "assets/js/16.194fa0a1.js",
    "revision": "3dbd27358bc8fdc89ca2365420c366ca"
  },
  {
    "url": "assets/js/17.38f55918.js",
    "revision": "b56761164d952815d20a349dd17b36dc"
  },
  {
    "url": "assets/js/18.84949bdc.js",
    "revision": "f463da941bd887c54131fe4edb9fd02d"
  },
  {
    "url": "assets/js/19.b268f01d.js",
    "revision": "11847a54dba3edc9174cf7cf3fb71227"
  },
  {
    "url": "assets/js/20.e99f2a84.js",
    "revision": "96adbc182d7c2e8c40661544048e19df"
  },
  {
    "url": "assets/js/21.455a65ff.js",
    "revision": "e918d5f91226e34e18b44f382c428493"
  },
  {
    "url": "assets/js/22.4f541fcb.js",
    "revision": "74f9121c218ef426689f4cd0a558c9b6"
  },
  {
    "url": "assets/js/23.21aa2df9.js",
    "revision": "31bf2c3a7e270ab8df15652b4cae423c"
  },
  {
    "url": "assets/js/24.44953c04.js",
    "revision": "1739e03a78cd2e6fb696d08e1156ae0b"
  },
  {
    "url": "assets/js/25.ec57ceb2.js",
    "revision": "c3aace530646a8ac19ce83463ecaf31d"
  },
  {
    "url": "assets/js/26.9c950840.js",
    "revision": "a1b3053799e98c6c9decde9ae9fcb28f"
  },
  {
    "url": "assets/js/27.31df22ae.js",
    "revision": "6193c1bf2f8afd3a44d10b7405383469"
  },
  {
    "url": "assets/js/28.2f8c66bc.js",
    "revision": "42a03a0e05a1054eb0df1d9382379059"
  },
  {
    "url": "assets/js/29.2c6924f8.js",
    "revision": "b94a2eaeddf68edab74992bb015b81ed"
  },
  {
    "url": "assets/js/30.d49bffe1.js",
    "revision": "9c499644de57f956203d20e8eb9606ef"
  },
  {
    "url": "assets/js/31.a97900c5.js",
    "revision": "5f63ff2d58a1316002675f242b6d6fb4"
  },
  {
    "url": "assets/js/32.7b4937d5.js",
    "revision": "477c1452d11d61f132e3b0c55859a8fa"
  },
  {
    "url": "assets/js/33.71c42a4e.js",
    "revision": "049f1105e47a0e80e8cba8560b807b58"
  },
  {
    "url": "assets/js/34.5bed40de.js",
    "revision": "8d941c40fc04ef175c166a3ea7c0d387"
  },
  {
    "url": "assets/js/35.3d56cbe9.js",
    "revision": "34a3cce853fadd5690f39ffb0f752127"
  },
  {
    "url": "assets/js/36.c938b7a2.js",
    "revision": "4f795e085c7c657e66050835d69338d7"
  },
  {
    "url": "assets/js/37.c3be8cc8.js",
    "revision": "c34c90825256f1b603fe90de4fee31f3"
  },
  {
    "url": "assets/js/38.1ca8ea78.js",
    "revision": "db5922b18b03fe2250f5b12a2f61558a"
  },
  {
    "url": "assets/js/39.c99edc48.js",
    "revision": "293ef126bfbce2253ee19443b20bb7eb"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.6559f8af.js",
    "revision": "6094e03f9abc2cee46c1e202b539038d"
  },
  {
    "url": "assets/js/41.fa3b380a.js",
    "revision": "80c426b63519fb149c5184818290aca5"
  },
  {
    "url": "assets/js/42.94615fd0.js",
    "revision": "b072f40996db07eed1d5c51a72240802"
  },
  {
    "url": "assets/js/43.3f9a0e65.js",
    "revision": "46ce15882781699f14cd76e8bd18b97f"
  },
  {
    "url": "assets/js/44.c43156eb.js",
    "revision": "95cbc3a9eb83730d2f9b0567f657c005"
  },
  {
    "url": "assets/js/45.892b0aad.js",
    "revision": "1981b3450fb4bee6aa211ddf8c1df17d"
  },
  {
    "url": "assets/js/46.cb86ebcd.js",
    "revision": "9d87cb4a7b4bdf6baf5f6a095fa5bbe9"
  },
  {
    "url": "assets/js/47.f7367ca3.js",
    "revision": "8a4ba3eb59cfe84d1fe4ba422b9fa38f"
  },
  {
    "url": "assets/js/48.4901a06a.js",
    "revision": "f9471ab4c4c72a074bbd10b8f8b7f9d3"
  },
  {
    "url": "assets/js/49.daf1f086.js",
    "revision": "5984131eec64de3cdc6329701f8e5f2a"
  },
  {
    "url": "assets/js/5.03b654a4.js",
    "revision": "f7c2f4b3459d78f7961544e12ac909bd"
  },
  {
    "url": "assets/js/50.2149d8d2.js",
    "revision": "9f69664c61dd9022357252781e867b9b"
  },
  {
    "url": "assets/js/51.87d4c186.js",
    "revision": "3d76e85010e72468c2b2a03dd47f413c"
  },
  {
    "url": "assets/js/52.bff941cc.js",
    "revision": "9058073983b67d82b59ba13063ba7afe"
  },
  {
    "url": "assets/js/53.ed5cf1c1.js",
    "revision": "7b0b84f88223a4b647708ae6c0f4acfe"
  },
  {
    "url": "assets/js/54.a969365c.js",
    "revision": "3d426a0d9d2460511691cbab2b61afdb"
  },
  {
    "url": "assets/js/55.f986ade9.js",
    "revision": "84b85aab9d5055cdd8f057015c636692"
  },
  {
    "url": "assets/js/56.2b6b7203.js",
    "revision": "139ff7ab711ecb89ff22e18a0c9422f1"
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
    "url": "assets/js/app.863223a5.js",
    "revision": "54cbaeda3126e4a87988df8d901bf502"
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
    "revision": "a1afa97ada89f7149cd2597df15b772c"
  },
  {
    "url": "categories/database/index.html",
    "revision": "72bbda1c1365dcdf23d5ae58a695ae56"
  },
  {
    "url": "categories/deep learning/index.html",
    "revision": "7f49e7277403baf9d23ed1981ed9cf7c"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "5aea04c5d17f4688a7935a6d5cd431fd"
  },
  {
    "url": "categories/Gallery/index.html",
    "revision": "371fd7afda02e12b76903eb468b63da1"
  },
  {
    "url": "categories/index.html",
    "revision": "8e4c6910f6acbab890766c2d3fad0e86"
  },
  {
    "url": "categories/PM/index.html",
    "revision": "08281748f255278b06f958fb56ae93e6"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "cb466694211d0389608ffabab8c8a9d4"
  },
  {
    "url": "categories/WEB/index.html",
    "revision": "b4008e312f85fbb227c802700d70aa37"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "Deep-Learning/index.html",
    "revision": "116b9b5c8a0e6e3eb0b58c47b55e2768"
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
    "revision": "7e364512dba26ff3434e02b074d2c868"
  },
  {
    "url": "Guide/index.html",
    "revision": "5cced0d60d6819512e8074bfddfbfa1e"
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
    "revision": "b1aeb4c24449d26df68d562c4d7f932f"
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
    "url": "PM/hot plate welding.html",
    "revision": "4ebc1d355313ef10a4d30612f0d68c7b"
  },
  {
    "url": "PM/index.html",
    "revision": "4ddf6ca159292c276817bf94e2d3a6ec"
  },
  {
    "url": "Project/blog/favicon.html",
    "revision": "6740d312b10d09581f57402dc36b188b"
  },
  {
    "url": "Project/blog/index.html",
    "revision": "9aa3dbfe5d41cb4245862ed6e978de4a"
  },
  {
    "url": "Project/gallery/index.html",
    "revision": "f113cc9f82101bc4bfc60f9f6b9b03f1"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "66176c957a4c7517ed6a70a928f69451"
  },
  {
    "url": "Software/index.html",
    "revision": "448495ce9e025aa7e2d7819e804f5b3e"
  },
  {
    "url": "Software/Python tools.html",
    "revision": "cd2e5a1ed68cf2d690bef632d6bdaf7b"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "ae3d2461ca90e06b18e808e5621cf026"
  },
  {
    "url": "tag/index.html",
    "revision": "68c1daf1d315cfca886315a369577193"
  },
  {
    "url": "tags/album/index.html",
    "revision": "f315cad9b9b74b0c8f1c0eae1f21ab0d"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "572cbd6cc42af1163a65f202124b83d7"
  },
  {
    "url": "tags/CDN/index.html",
    "revision": "d866e627e10af4d757ff0db73f6d642d"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "53100dd3e8b1be43b8d5d352442a3a83"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "cd291a7da92a3b0ad35103d7716470b6"
  },
  {
    "url": "tags/Favicon/index.html",
    "revision": "e88c893b16d57c0100fa9f42561c8427"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "904259be0689e7a019375e45e4b06607"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "898b00b283c1424b17f965201f3c4987"
  },
  {
    "url": "tags/github/index.html",
    "revision": "2c4e4d406f4e18c79cef322eaecca149"
  },
  {
    "url": "tags/GM/index.html",
    "revision": "c34ada75235f84b6c70065dd5c55a02c"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "cc99f91d84a71eb4cfcee322bac14aca"
  },
  {
    "url": "tags/guide/index.html",
    "revision": "1ac77ba8373d99ef55105d0f2094cda5"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "885ce731e832465086a87ce7a7826bc6"
  },
  {
    "url": "tags/neo4j/index.html",
    "revision": "fda824d33f93e940c599ea5be7fff223"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "7c0bb44fe00905e55f10d6a113046768"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "893465613fdcba66205f192bbe25a001"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "4da10cdbe5997133ca715bcb50be7637"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "24176852ce2d3006a79004df235115ef"
  },
  {
    "url": "tags/README/index.html",
    "revision": "3d61a5a7d33c1768cb19b01e4133061c"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "de018942271e77bb396c3cda2895bf3a"
  },
  {
    "url": "tags/TESLA/index.html",
    "revision": "38b90b17c5ec1941c8c11a9683a626cc"
  },
  {
    "url": "tags/traceability/index.html",
    "revision": "ad166ed982b24d1a49d1f66df3b5d377"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "d052d4079e4a58860cd7b866f90511a6"
  },
  {
    "url": "tags/upload/index.html",
    "revision": "8e8b0b4b33e779d3b279b8dcd34bb3ce"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "ab9e82a45d0a510e6d1e8fc1eb5357a9"
  },
  {
    "url": "tags/welding/index.html",
    "revision": "37caf11476fa7958a448a79110394aa6"
  },
  {
    "url": "tags/Wheels/index.html",
    "revision": "7d5a031bb351eff22b0b54d7567620b9"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "f25aa71d0ce591983a3f841918ab1efd"
  },
  {
    "url": "tags/水印/index.html",
    "revision": "e26257437a9a3bcbb99b971db7316d65"
  },
  {
    "url": "tags/裁剪/index.html",
    "revision": "30bf2d86aebe38fce029b77d76707c41"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "f05b22ba0bfc6fc02576a29f538c635d"
  },
  {
    "url": "Timeline/index.html",
    "revision": "1e0dfd9ebf06b86c50b514b692f204e5"
  },
  {
    "url": "Web/Backend/Django/django wheels.html",
    "revision": "70553807e4acf7bfdd7587eb1c029374"
  },
  {
    "url": "Web/Backend/Django/django 云存储.html",
    "revision": "7c30e1427f6f0e02b3c5629d389ab86d"
  },
  {
    "url": "Web/Backend/Django/django 处理保存上传的图片.html",
    "revision": "8dcb3f962f97939bde93c46b31f9ab63"
  },
  {
    "url": "Web/Backend/Django/django 网站加速.html",
    "revision": "1cf49a6e40ddcad2fcd74972f3026a40"
  },
  {
    "url": "Web/Backend/Django/index.html",
    "revision": "9ad2ca8d50e1b5fac633c1cfee753eb5"
  },
  {
    "url": "Web/Backend/Nginx/configurin-systemd-service-for-nginx.html",
    "revision": "dba76d2b454082ff12c72310e3dde232"
  },
  {
    "url": "Web/Backend/Nginx/handle-error.html",
    "revision": "02d698b31f0fbfcd448e4c26ab349a40"
  },
  {
    "url": "Web/Backend/Nginx/index.html",
    "revision": "b59ecee505d927dff98d6ded53a949ab"
  },
  {
    "url": "Web/Backend/Nginx/install-goaccess.html",
    "revision": "f4a90aef764b89d14ae6ae1cc4981b6f"
  },
  {
    "url": "Web/Backend/Nginx/limit-module.html",
    "revision": "3ed7e90dc7597be5fddce19a79dc27ad"
  },
  {
    "url": "Web/Backend/Nginx/location-rules.html",
    "revision": "dcaf32534fd220ff237c83037b7ae89e"
  },
  {
    "url": "Web/Backend/Nginx/master-slave-nginx.html",
    "revision": "3a81c33bfefcbfee5e6ca3b2b83ac75a"
  },
  {
    "url": "Web/Backend/Nginx/nginx-upstream.html",
    "revision": "dda85fed8b06554f0d8cc4973681f045"
  },
  {
    "url": "Web/Backend/Nginx/proxy-pass-rules.html",
    "revision": "cff37a03cce4cb85c738469ec031cba4"
  },
  {
    "url": "Web/Backend/Nginx/referer-module.html",
    "revision": "e1d067711f6154a8f268caaa7a50734d"
  },
  {
    "url": "Web/Backend/Nginx/rewrite-rules.html",
    "revision": "9dd9de75df30d0c752e580e444589b71"
  },
  {
    "url": "Web/Backend/Nginx/the-difference-between-root-and-alias.html",
    "revision": "23ace26b4d9e9e94de069674a27f3bf7"
  },
  {
    "url": "Web/Backend/Nginx/upgrade-http-to-https.html",
    "revision": "f29560cecfabb876761c0a2d2c9304db"
  },
  {
    "url": "Web/Backend/Nginx/websocket-proxy.html",
    "revision": "7c061c527b32b528a229ed371f86d371"
  },
  {
    "url": "Web/Database/index.html",
    "revision": "73e6893c256646e6ac27747aeda9654b"
  },
  {
    "url": "Web/Database/mysql/index.html",
    "revision": "2e2e664dbb5e49ec6fb1e5bcf858ed51"
  },
  {
    "url": "Web/Database/mysql/insert-update-and-delete.html",
    "revision": "67012c566a63ec0a9054c40a6f3aa462"
  },
  {
    "url": "Web/Database/mysql/join-and-union.html",
    "revision": "e33a92dc3f4ab703b8b83f6dbc3235cf"
  },
  {
    "url": "Web/Database/mysql/select.html",
    "revision": "c39b6d80c8e74d36c0aa399d99d76908"
  },
  {
    "url": "Web/Database/mysql/stored-procedure.html",
    "revision": "75d22e5b7f1bf9dd60c6c3192ac6f7af"
  },
  {
    "url": "Web/Database/mysql/transactions.html",
    "revision": "86334e1093d774b2a11b9ab7178b23b7"
  },
  {
    "url": "Web/Database/mysql/trigger.html",
    "revision": "e34b32a64195d5cc26cb063b5c9137fb"
  },
  {
    "url": "Web/Database/mysql/views.html",
    "revision": "10ee4e95ff0025313f5db111f8cf1d3e"
  },
  {
    "url": "Web/Frondend/vue/index.html",
    "revision": "9c1d8d149710ff26c9b99f792e73a303"
  },
  {
    "url": "Web/Frondend/vue/ref-type.html",
    "revision": "9b9efb35335eb39fa96aa8dea36efd55"
  },
  {
    "url": "Web/Frondend/vue/the-next-tick.html",
    "revision": "8df180bcde152929c5c1346f71846549"
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
