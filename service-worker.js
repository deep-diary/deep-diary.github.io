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
    "revision": "048217230524e3ba1320c449ce8d2ff2"
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
    "url": "assets/js/11.fb66f811.js",
    "revision": "0b5f23f47e2347d2bfc9eaec009b46f7"
  },
  {
    "url": "assets/js/12.4c092a46.js",
    "revision": "afcea55c5ab266066584bc9b13748b0f"
  },
  {
    "url": "assets/js/13.35cb78ac.js",
    "revision": "ec09f43154158627fb7069ba31b8c166"
  },
  {
    "url": "assets/js/14.c5816d28.js",
    "revision": "3905c57d67aead3f4e4f82e9e143ec80"
  },
  {
    "url": "assets/js/15.fdc6a846.js",
    "revision": "99e2d5cc9e72c7f0fdd70e9b6a397f1d"
  },
  {
    "url": "assets/js/16.fe23022b.js",
    "revision": "91412a641f6ef061f6909c8b56da2f81"
  },
  {
    "url": "assets/js/17.1a31eb11.js",
    "revision": "72b5210ddaf0e915268d99912405b006"
  },
  {
    "url": "assets/js/18.66d4c6cf.js",
    "revision": "37d3c8333107950107884bd35c4e637d"
  },
  {
    "url": "assets/js/19.42422af7.js",
    "revision": "f1cf98ee8584d955d7a647ef44c1daec"
  },
  {
    "url": "assets/js/20.ed6e6c3d.js",
    "revision": "63380080c944885273545df48ffb35c9"
  },
  {
    "url": "assets/js/21.1a784aea.js",
    "revision": "f918cf563b12887c280d6220d20f4acc"
  },
  {
    "url": "assets/js/22.8bd53904.js",
    "revision": "c2a217fe90cee65d9c857b1c0a8d4273"
  },
  {
    "url": "assets/js/23.a3a2aaad.js",
    "revision": "64cdc4eab67f361236aa6dbd8ba5d5c3"
  },
  {
    "url": "assets/js/24.2b2ecd12.js",
    "revision": "678f2762dcb17a53431760e2be7bd99f"
  },
  {
    "url": "assets/js/25.40a6d405.js",
    "revision": "07f86f33e5258f0a0d0f3f79026667be"
  },
  {
    "url": "assets/js/26.9c6af062.js",
    "revision": "a73e58a8c3b05dbdf721fd9e17058b5a"
  },
  {
    "url": "assets/js/27.b0c209b4.js",
    "revision": "ed1e94440c6823a6e37b2426fd926d58"
  },
  {
    "url": "assets/js/28.089d0c18.js",
    "revision": "1780c9e8a291195fc02069b49d887aef"
  },
  {
    "url": "assets/js/29.327c0986.js",
    "revision": "84ae2bb7e4bc11a81039a43b1413fc0b"
  },
  {
    "url": "assets/js/30.ed574e61.js",
    "revision": "51d0b810ec6de9907affe4de6b73264a"
  },
  {
    "url": "assets/js/31.22de3eca.js",
    "revision": "7402063a71e9b7441b0fcac1f9f6efb5"
  },
  {
    "url": "assets/js/32.7fa4c407.js",
    "revision": "22c570d4edf8868127bbb428e1dbacf0"
  },
  {
    "url": "assets/js/33.fc6288e5.js",
    "revision": "1261477fa108b6bf77110da6c4282214"
  },
  {
    "url": "assets/js/34.a2284905.js",
    "revision": "02acbf37abd9f767a6545a2c8ea9f5c0"
  },
  {
    "url": "assets/js/35.e16bc36b.js",
    "revision": "da2e7915f0aba1d1783d3a7987bfeacd"
  },
  {
    "url": "assets/js/36.8933ab22.js",
    "revision": "258c479fbad6f6f075c0fa56b8f7b7c5"
  },
  {
    "url": "assets/js/37.c8708c2d.js",
    "revision": "4c196fe874ffa9c5d91a1176a480f16b"
  },
  {
    "url": "assets/js/38.0e49992a.js",
    "revision": "75e57a11984df430341c2f4ffef61731"
  },
  {
    "url": "assets/js/39.a5343f2f.js",
    "revision": "59049d09d3ce13db09d55639cd22c358"
  },
  {
    "url": "assets/js/4.5e854a94.js",
    "revision": "532b890d2f8943be06dda7f48ae083fc"
  },
  {
    "url": "assets/js/40.028ae324.js",
    "revision": "e767f0f41b1c5348a13bdb85f5d34579"
  },
  {
    "url": "assets/js/41.d1e1db06.js",
    "revision": "664c7203976658651caa490106fd5b48"
  },
  {
    "url": "assets/js/42.4c30c5f0.js",
    "revision": "5bcde9c83c506768e1d8340b097419b7"
  },
  {
    "url": "assets/js/43.746190f0.js",
    "revision": "b74408840e0071a50d55ce46732e960f"
  },
  {
    "url": "assets/js/44.5e7ae7b6.js",
    "revision": "5ba07af29aaf6dd2b9e2f487bd4c4d23"
  },
  {
    "url": "assets/js/45.53b85b0c.js",
    "revision": "cc931da1f0bcbbb83cd648430b4d3a3a"
  },
  {
    "url": "assets/js/46.b56fe8e7.js",
    "revision": "8cab744c04dc06f0d7ea49e86cd0116f"
  },
  {
    "url": "assets/js/47.bf32be9e.js",
    "revision": "7133efa67ac4b8b483cf7b01f67e1fe7"
  },
  {
    "url": "assets/js/48.a95638b8.js",
    "revision": "cb466e4c424e36b37ad310155cd76775"
  },
  {
    "url": "assets/js/49.c39681e9.js",
    "revision": "4cdce1a337d88e16638f78f22cbc9c19"
  },
  {
    "url": "assets/js/5.03b654a4.js",
    "revision": "f7c2f4b3459d78f7961544e12ac909bd"
  },
  {
    "url": "assets/js/50.9dd6d4cf.js",
    "revision": "b46b567e02470f3f483d850ed96f3c5a"
  },
  {
    "url": "assets/js/51.37646a35.js",
    "revision": "58c373ff48c120b4a0556df54a14934e"
  },
  {
    "url": "assets/js/52.9891e5f0.js",
    "revision": "c84411cc2b5de2585bcbc67ff565196b"
  },
  {
    "url": "assets/js/53.6b5b1d14.js",
    "revision": "810eb5ac478f91dbcd7531996fb83a0e"
  },
  {
    "url": "assets/js/54.def96dee.js",
    "revision": "b0b1299435219cad43c9b36d851d234d"
  },
  {
    "url": "assets/js/55.f7892c7c.js",
    "revision": "1a8699d1eab47f4ab3a9b206ed13cf34"
  },
  {
    "url": "assets/js/56.5f5f204c.js",
    "revision": "bc621b8d4a5c329b28ee2e426685e706"
  },
  {
    "url": "assets/js/57.50f6279d.js",
    "revision": "5df4c99efe966fa19c19ec53e5704f55"
  },
  {
    "url": "assets/js/58.1f186d61.js",
    "revision": "eeaadc23b0f2a08a9689f0088a748018"
  },
  {
    "url": "assets/js/59.d844658f.js",
    "revision": "5a84aa5d1ad137f7212e28e6b61d1284"
  },
  {
    "url": "assets/js/6.ac399d41.js",
    "revision": "1e4d356e7f16bf810ad61ff73a102584"
  },
  {
    "url": "assets/js/60.c56afb78.js",
    "revision": "66bdd721f2dee0de0b77bc871dbd2c8e"
  },
  {
    "url": "assets/js/61.a78f1fa4.js",
    "revision": "81233bd27c19e53b23e5e3cffc115868"
  },
  {
    "url": "assets/js/62.1ffdbfc6.js",
    "revision": "74074d2c7bf56e846aada944f6116a93"
  },
  {
    "url": "assets/js/63.84d50267.js",
    "revision": "1c22033813cbd0ca470b6f8587493b48"
  },
  {
    "url": "assets/js/64.c5b65bc1.js",
    "revision": "2e04fc25827145b21ab484dd220d8ce3"
  },
  {
    "url": "assets/js/65.284acdeb.js",
    "revision": "b5e3e7a08a73c10280603d2073cae11f"
  },
  {
    "url": "assets/js/66.2ddc2745.js",
    "revision": "97f865bc5cec081ef73fd7ac9192e82b"
  },
  {
    "url": "assets/js/67.eb37ac4c.js",
    "revision": "d663acb862b8ba489c46ad5c154e9f2a"
  },
  {
    "url": "assets/js/68.959a8bc5.js",
    "revision": "950588db88fc3397538fd545fabcd1f5"
  },
  {
    "url": "assets/js/69.02b77ce0.js",
    "revision": "24fbfd3b71ceffcb7a88ec978eea32a6"
  },
  {
    "url": "assets/js/7.706f533b.js",
    "revision": "a83549b610690ac80e35f8011468bcf5"
  },
  {
    "url": "assets/js/70.bfe280be.js",
    "revision": "b11925b69804e21617c911de47672a7e"
  },
  {
    "url": "assets/js/71.7aef00da.js",
    "revision": "aa5d3b5130341a5a04a79eaf20b36a3c"
  },
  {
    "url": "assets/js/72.be85292b.js",
    "revision": "bf2500b4a33c7241f9c62b35aedbca26"
  },
  {
    "url": "assets/js/73.fac9947d.js",
    "revision": "f070cc003d31b2ab5988da2ee53bd14c"
  },
  {
    "url": "assets/js/74.694aa9a8.js",
    "revision": "99a9f872b4778b7e59723cb37e6e0f65"
  },
  {
    "url": "assets/js/75.2efdf72f.js",
    "revision": "7ee6efb1e06e767f3d80e4d4354bc3fe"
  },
  {
    "url": "assets/js/76.f6792410.js",
    "revision": "6bdc6910ec605ac7e8d98954ab5b3623"
  },
  {
    "url": "assets/js/77.cb19fd0e.js",
    "revision": "571f803e1900a29acbb3c25059affef0"
  },
  {
    "url": "assets/js/78.20a98f34.js",
    "revision": "b5629dcea0146bbff1bc263e409c0a8e"
  },
  {
    "url": "assets/js/79.6030e847.js",
    "revision": "55aebbd91f579a353a18b36278af286d"
  },
  {
    "url": "assets/js/8.5e0abf00.js",
    "revision": "e0c7a61f8b51ed40a0806a4dde22edb2"
  },
  {
    "url": "assets/js/80.b95919e9.js",
    "revision": "a007ff38e67a1225c04202f1f59d8454"
  },
  {
    "url": "assets/js/81.409820c4.js",
    "revision": "1bc0f3a9011efe8cc7aa0a2e7746dec0"
  },
  {
    "url": "assets/js/82.cea68c6c.js",
    "revision": "fe641aa0d9433ea1240d72444c4aa8a6"
  },
  {
    "url": "assets/js/83.9603771c.js",
    "revision": "7c5e69fa123d4793a6798c4872807a4c"
  },
  {
    "url": "assets/js/84.f94304e2.js",
    "revision": "a9dbe6e179b758662fb48e7e9289bfd7"
  },
  {
    "url": "assets/js/85.1687d319.js",
    "revision": "03cf52ca56d022703b8d199524e40a73"
  },
  {
    "url": "assets/js/86.d9d59341.js",
    "revision": "6a2d7275ff0e1d610a84c7045f892b04"
  },
  {
    "url": "assets/js/87.9ec44d88.js",
    "revision": "61c143e83938b173c8e8f8c149271b12"
  },
  {
    "url": "assets/js/88.c5cd7561.js",
    "revision": "1a7ebb348c9cca38f36b1c8d295b30ac"
  },
  {
    "url": "assets/js/89.9e3e5049.js",
    "revision": "ad5a84c5db25baea7587c23147d3944b"
  },
  {
    "url": "assets/js/9.2d9184d6.js",
    "revision": "2e2314a05dafeef350c98581209adb72"
  },
  {
    "url": "assets/js/90.99760ff2.js",
    "revision": "666824913a02ca0926d7824595c82376"
  },
  {
    "url": "assets/js/91.59046907.js",
    "revision": "82d92e69a5bafff3e855f04f6b5ddd39"
  },
  {
    "url": "assets/js/92.e0d2a51c.js",
    "revision": "f29210f3e9ca4405e8e72e4f1175a4b5"
  },
  {
    "url": "assets/js/93.116e2aed.js",
    "revision": "c4780ac55447a98632128c0eaa7136eb"
  },
  {
    "url": "assets/js/94.88804724.js",
    "revision": "e4df5b55575cf926783c59dd247ddc11"
  },
  {
    "url": "assets/js/95.e1cef1ca.js",
    "revision": "f79f87f57a042e40f3769590fd688900"
  },
  {
    "url": "assets/js/96.cce16545.js",
    "revision": "dd89758e827d2b46fe198bbefb75f679"
  },
  {
    "url": "assets/js/97.868a50a6.js",
    "revision": "0091b557bf55bd2d144f3d2a60083fde"
  },
  {
    "url": "assets/js/98.5ea81e85.js",
    "revision": "22ae95116a1b70a669070d217f348585"
  },
  {
    "url": "assets/js/99.0fef2eb3.js",
    "revision": "8e1d6bee3dee0a12153bc463f675b2dd"
  },
  {
    "url": "assets/js/app.8fd3f559.js",
    "revision": "5be9fe3ac42da243f56d748d6d126bba"
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
    "revision": "8a6fb81b1e1979b400c8cd9ee91efcc2"
  },
  {
    "url": "categories/conference/index.html",
    "revision": "234f4b1de14de3df0d38520262cf55ae"
  },
  {
    "url": "categories/database/index.html",
    "revision": "5f489a62e9ef1cd4750a83a19536a2e6"
  },
  {
    "url": "categories/deep learning/index.html",
    "revision": "8ac4a35d4986ca44a8c2cc6bcd193882"
  },
  {
    "url": "categories/Develop/index.html",
    "revision": "49b27f64ba38f6151a2e75fc07a648c6"
  },
  {
    "url": "categories/Django/index.html",
    "revision": "0be8fa76c432f9c4d4f4e6e24914e812"
  },
  {
    "url": "categories/Gallery/index.html",
    "revision": "4b668911b6741605a357727f3da48f1a"
  },
  {
    "url": "categories/Gallery/page/2/index.html",
    "revision": "05f3d5febbb1415684fdacfa121c437e"
  },
  {
    "url": "categories/Gallery/page/3/index.html",
    "revision": "9792b781ce60a96e3953c807b5e39e1e"
  },
  {
    "url": "categories/index.html",
    "revision": "366a6b78c19424db53073c78b2920802"
  },
  {
    "url": "categories/PM/index.html",
    "revision": "1627b6d1bb59736b0a369843f7d6e5d1"
  },
  {
    "url": "categories/project/index.html",
    "revision": "94cec23a85701b5c9b903a26ef5a472b"
  },
  {
    "url": "categories/Software/index.html",
    "revision": "9548aef913e6d8341143fef1f295470f"
  },
  {
    "url": "categories/Synology/index.html",
    "revision": "7d0fe78c37162248807d7bcb53188733"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "9b295573b1cfb62e22eb08a1c156928e"
  },
  {
    "url": "categories/WEB/index.html",
    "revision": "ca06ed3bab93ff1d249c03a1fd109069"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "Deep-Learning/index.html",
    "revision": "a20c8fe78d1ebd2e300b871ca0f1845a"
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
    "revision": "f16fd81edc5e4487741a039d71753687"
  },
  {
    "url": "Guide/index.html",
    "revision": "553c076fe6c46b4ed82f92793aa34f11"
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
    "revision": "febd154db5efb2b07e8a38f0412162e1"
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
    "url": "Others/使命，愿景，价值观.html",
    "revision": "fdf2aa7b605df983fc14a15a25129de4"
  },
  {
    "url": "Others/测控专业访谈会议.html",
    "revision": "4d2330169ad84e375aebc06d07a9b98b"
  },
  {
    "url": "Others/第八届区块链全球峰会.html",
    "revision": "2b6085e7b81d571ca883c22a7a5e04bd"
  },
  {
    "url": "PM/blow molding process.html",
    "revision": "3ff9808413c9883486fc2416e3a3c534"
  },
  {
    "url": "PM/hot plate welding.html",
    "revision": "92517fb46b600fc860526755eb1f2ad4"
  },
  {
    "url": "PM/index.html",
    "revision": "02f748e16b8f7ddf132a94f9cb7ca562"
  },
  {
    "url": "Project/autowin/index.html",
    "revision": "95ba3c4e350e0edf8d448fddd52aabae"
  },
  {
    "url": "Project/autowin/tesla manifold.html",
    "revision": "02d6d6e24d752ce0367d8f93f63a892b"
  },
  {
    "url": "Project/blog/favicon.html",
    "revision": "fb3b14e1773423d988cea4dc488987d6"
  },
  {
    "url": "Project/blog/index.html",
    "revision": "c08395f6e516cbac7381c0596c03a834"
  },
  {
    "url": "Project/blog/博客前端.html",
    "revision": "7159b1cf49881a6972dc95aa3e54be19"
  },
  {
    "url": "Project/blog/博客后端.html",
    "revision": "7a63e85cd129a70d6bb144d12d6bdaec"
  },
  {
    "url": "Project/blog/标签系统后端.html",
    "revision": "f2c9830c6bc7d4bb8cdd11257fb00674"
  },
  {
    "url": "Project/blog/评论后端.html",
    "revision": "3d89cd4d2e68b6f6e65e47470925e0e6"
  },
  {
    "url": "Project/gallery/1. user login backend.html",
    "revision": "4bd416ae96d30aa58cb7207656dd146f"
  },
  {
    "url": "Project/gallery/2. user login frontend.html",
    "revision": "5683e8736aa90e8efde8883db17496e3"
  },
  {
    "url": "Project/gallery/3. gallery backend.html",
    "revision": "98fecaf91751a2c1ff4b5c62b2f11f8e"
  },
  {
    "url": "Project/gallery/4. gallery frontend.html",
    "revision": "fedaf990e9d613952b5daa53f8e77d5e"
  },
  {
    "url": "Project/gallery/Amap.html",
    "revision": "77dc15e0dac8547fa0ae04d43fa34bf7"
  },
  {
    "url": "Project/gallery/Asynchronous tasks_celery.html",
    "revision": "3e82a501a84a22a120d07ee6267854cc"
  },
  {
    "url": "Project/gallery/build the face group.html",
    "revision": "2ff98167e0ba284ae8a804c0c5817f69"
  },
  {
    "url": "Project/gallery/Development environment setup.html",
    "revision": "4980bacaf49eb8b5ffb1649068e0c568"
  },
  {
    "url": "Project/gallery/face recognition.html",
    "revision": "3525b4a1fe829d7f22abe4c40cad1f5c"
  },
  {
    "url": "Project/gallery/fetch basic info from image.html",
    "revision": "775323e8e2121159322430eca018b2ee"
  },
  {
    "url": "Project/gallery/fetch categorizers from image.html",
    "revision": "70e39f1b11ada2e5ae641af5e157312f"
  },
  {
    "url": "Project/gallery/fetch colors from image.html",
    "revision": "af054945dcd822148f77f3bf28b15d4d"
  },
  {
    "url": "Project/gallery/fetch tags from image.html",
    "revision": "10212ce36de7a300aed7fba7dd76ec1b"
  },
  {
    "url": "Project/gallery/GCN training_pending.html",
    "revision": "e5c08251b31f756a18b053329e9ca77f"
  },
  {
    "url": "Project/gallery/graph database_Neo4j.html",
    "revision": "f88f8cb6e0089dd9fa678bcfd5367418"
  },
  {
    "url": "Project/gallery/GraphNavigator.html",
    "revision": "8e04cbe5157a6c79ce8d745cfe5823b9"
  },
  {
    "url": "Project/gallery/index.html",
    "revision": "79e7d830f4ae066999d46b19a705ed2f"
  },
  {
    "url": "Project/gallery/infinite scroll.html",
    "revision": "f297303fb76c209cc3377a4dd3a5edb4"
  },
  {
    "url": "Project/gallery/object identification.html",
    "revision": "761e7e3936f606443280367cc7322010"
  },
  {
    "url": "Project/gallery/oss storage.html",
    "revision": "89a333b9cd81832ca2195b41ff3ecf11"
  },
  {
    "url": "Project/gallery/quick search.html",
    "revision": "96ee63b76c5a27b9a7978e0ea28856ad"
  },
  {
    "url": "Project/gallery/seeting of backend.html",
    "revision": "5019b80d267f58e650a5f23ee4fafbe3"
  },
  {
    "url": "Project/gallery/Server Deployment.html",
    "revision": "3e71e3465bfe5195e7ff35c3d08a893a"
  },
  {
    "url": "Project/gallery/synology.html",
    "revision": "9ec9fb4e2d128af820c641c29ed61d9b"
  },
  {
    "url": "Project/gallery/trademark registration.html",
    "revision": "ba2986e5c6632ff31eeb360751c61b79"
  },
  {
    "url": "Project/gallery/upload.html",
    "revision": "eca2f0d243dae2903cd7a2ce85ab7562"
  },
  {
    "url": "Project/gallery/vue-awesome-swiper.html",
    "revision": "39ba382c7a37bdfdda1981a92a170538"
  },
  {
    "url": "Project/gallery/web3.html",
    "revision": "5ac21ac11bbf3585e05aee22d7c0b175"
  },
  {
    "url": "Project/management/index.html",
    "revision": "99c711c7b010e5927bb82ff9c5a40f8b"
  },
  {
    "url": "Project/management/项目管理后台.html",
    "revision": "2ce8d7550fbb4f77b720a97320ac9e3a"
  },
  {
    "url": "Project/vuepress/index.html",
    "revision": "7731673f2b15929c27cc5b93010d5c1c"
  },
  {
    "url": "Software/Git ingore.html",
    "revision": "006c50cec84d0502ee94182b7f689b1e"
  },
  {
    "url": "Software/Git 常用命令大全.html",
    "revision": "aaa0ee1c357577ccc78bc7f976ec9691"
  },
  {
    "url": "Software/index.html",
    "revision": "120f8c729c4153473d299756fee57aa8"
  },
  {
    "url": "Software/pycharm函数调用关系可视化（Graphviz + pycallgraph画图）.html",
    "revision": "9e56bccf20b06982c42a8627b883c237"
  },
  {
    "url": "Software/Python tools.html",
    "revision": "59d20e6f5768001d2bd95cc6556479f2"
  },
  {
    "url": "Software/Typora+PicGo+阿里云oss实现云笔记.html",
    "revision": "075d026bc4ffaadef2763e919a286109"
  },
  {
    "url": "tag/index.html",
    "revision": "5d6e18bea4f0dafe3605e6604f6bdc19"
  },
  {
    "url": "tags/address /index.html",
    "revision": "f97354cc7b1548f68682b58896748ae2"
  },
  {
    "url": "tags/amap/index.html",
    "revision": "a1e8f13543f827540e133bdb909086ae"
  },
  {
    "url": "tags/axios/index.html",
    "revision": "3f16e730e485365774c929d075a4827f"
  },
  {
    "url": "tags/backend/index.html",
    "revision": "afc12fe7d38969277ba24405f9717f19"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "95365e8ccc863e99f90577da94584e17"
  },
  {
    "url": "tags/blow molding/index.html",
    "revision": "d1b852186110e571e2cecd9dedc034c1"
  },
  {
    "url": "tags/categorizers /index.html",
    "revision": "91ce4b40cc06fb60efb7e6dd3050f681"
  },
  {
    "url": "tags/CDN/index.html",
    "revision": "a01a0bf0e60d81e679d0c3eb07c70208"
  },
  {
    "url": "tags/celery/index.html",
    "revision": "2cecd635f103f71268bbdcac1fb4bc03"
  },
  {
    "url": "tags/color/index.html",
    "revision": "6511bc9ef3ba1eaa61c6452ad937d1eb"
  },
  {
    "url": "tags/comment/index.html",
    "revision": "c2273995be25d136f3224797550ffc1a"
  },
  {
    "url": "tags/config/index.html",
    "revision": "e570619da90e996b92eca7d0aef00ef5"
  },
  {
    "url": "tags/date/index.html",
    "revision": "fa5caec380611e3fcfb7c7bd34246724"
  },
  {
    "url": "tags/deploy/index.html",
    "revision": "cf24c7f960881af1277aa4b984f8548b"
  },
  {
    "url": "tags/developing environment/index.html",
    "revision": "f4ed736a1a42e30825440a68d3b03900"
  },
  {
    "url": "tags/django/index.html",
    "revision": "6003b149711d1420302f2b79528194be"
  },
  {
    "url": "tags/element plus/index.html",
    "revision": "bd46a5ed06a0833edd89b736ff7b5022"
  },
  {
    "url": "tags/face/index.html",
    "revision": "fb238cde11ae6a04790e0184ba38e1c1"
  },
  {
    "url": "tags/Favicon/index.html",
    "revision": "a0ca0a737453be0c840c84d4804aceac"
  },
  {
    "url": "tags/Filswan/index.html",
    "revision": "e4c6607965b9ca4c67ba3024db23967b"
  },
  {
    "url": "tags/filter/index.html",
    "revision": "48c7d39593177649878f0fed0dc1537c"
  },
  {
    "url": "tags/gallery/index.html",
    "revision": "a2d1e8f97ca9d9ae005a90f485b09b4f"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "9b3260b58959609c79a25d7c0f6837a0"
  },
  {
    "url": "tags/gitee/index.html",
    "revision": "d3e3ce7c6f07699bfffabbfd520eff75"
  },
  {
    "url": "tags/github/index.html",
    "revision": "4d0c649ac2193865338d7b28e38d7fcd"
  },
  {
    "url": "tags/GM/index.html",
    "revision": "f77375d8d77fdf2f3ec121e92127f83f"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "4cb9e65c44635d956c66089969e1ae3e"
  },
  {
    "url": "tags/gps/index.html",
    "revision": "6f5789cedcb898cc13680b3c85bd3edb"
  },
  {
    "url": "tags/GraphNavigator/index.html",
    "revision": "84361e0d54385e09c143b1d826054a23"
  },
  {
    "url": "tags/Graphviz/index.html",
    "revision": "6f1ed41724f044c4170a580de79adf6a"
  },
  {
    "url": "tags/guide/index.html",
    "revision": "68ba3325d5fc0e5c4548b91c54a96add"
  },
  {
    "url": "tags/infinite/index.html",
    "revision": "34dc53309648304e0042f53127562245"
  },
  {
    "url": "tags/job/index.html",
    "revision": "ad0d75ff9755e9e6453ae6e2376f602e"
  },
  {
    "url": "tags/lightroom/index.html",
    "revision": "2a3fb3f189b1a52bf4e0a34490cb274a"
  },
  {
    "url": "tags/login/index.html",
    "revision": "6c24364443bf885cc59682617593574d"
  },
  {
    "url": "tags/management/index.html",
    "revision": "3cc32191c0b048c2e5a947df3f362fef"
  },
  {
    "url": "tags/manifold/index.html",
    "revision": "c003eda1b8e04f951291db387ed2262c"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "425919ded4f9d37bc959390cefb75f11"
  },
  {
    "url": "tags/neo4j/index.html",
    "revision": "009be54523cdd29746e9f4b5d2fb0365"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "7370b982c3e4fae14528457aedaadf09"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "5b2b8b786a1c88c8be9a852c19b53ac3"
  },
  {
    "url": "tags/PicGo/index.html",
    "revision": "63950e3f283f904a7a0af4ff088cad69"
  },
  {
    "url": "tags/project/index.html",
    "revision": "e88f63201040c51f926771e9da92f489"
  },
  {
    "url": "tags/pycallgraph/index.html",
    "revision": "686f6d316ed606d58279ce44597ce5a2"
  },
  {
    "url": "tags/pycharm/index.html",
    "revision": "6efb348a8c972c665598aee8c47bdabf"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "dd7c84b925df829418fc2a2348048feb"
  },
  {
    "url": "tags/README/index.html",
    "revision": "6ab94849b81849ce87bb8b52de0b0eff"
  },
  {
    "url": "tags/README/page/2/index.html",
    "revision": "0beab6158cc95b72bf3abdc6382a9422"
  },
  {
    "url": "tags/redis/index.html",
    "revision": "194bf3784f051954ba9ab788b418d692"
  },
  {
    "url": "tags/Scroll/index.html",
    "revision": "e3fa829c23a429810f961df7f90a44bc"
  },
  {
    "url": "tags/search/index.html",
    "revision": "d2ade9142d1274df9b62eea34ab28da7"
  },
  {
    "url": "tags/Serializer/index.html",
    "revision": "7d5b5ab5939afa2425b71ffd00aa1a72"
  },
  {
    "url": "tags/setting/index.html",
    "revision": "e519538f79316ccab9495e142c4205a6"
  },
  {
    "url": "tags/Software/index.html",
    "revision": "c27c7dc6dab00e67724a62527a8dbe09"
  },
  {
    "url": "tags/swiper/index.html",
    "revision": "b7f0ee4d1a5af81359c1fa0d1b7f9255"
  },
  {
    "url": "tags/Synology/index.html",
    "revision": "fcc1fed3fa18cc7875fc692a6e9d27dd"
  },
  {
    "url": "tags/tag/index.html",
    "revision": "abfd1ffcadb9f13da59e973b18c87a07"
  },
  {
    "url": "tags/target/index.html",
    "revision": "418e256633a91abee6cb9b8db464279e"
  },
  {
    "url": "tags/TESLA/index.html",
    "revision": "6839de6ecafad73738e55cddfd1929e6"
  },
  {
    "url": "tags/token/index.html",
    "revision": "4fd8ec7b9e10539a4d59b2ec15dbf657"
  },
  {
    "url": "tags/traceability/index.html",
    "revision": "2a65bdc67253f97685069463258194e5"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "21bd8ce9ec8f31348facab9981aab072"
  },
  {
    "url": "tags/upload/index.html",
    "revision": "0d5bad53240b75055f861b095372f35c"
  },
  {
    "url": "tags/vue-element-admin/index.html",
    "revision": "1d81ff1ac749283132d0c47c4e6d065c"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "8b25f71033fcf3a1adfe9a06e2e7e20c"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "5d9d1265171f70e3d00b8a91865375dd"
  },
  {
    "url": "tags/welding/index.html",
    "revision": "a92e342fb8648a8757f8ba0f1f4ac2a3"
  },
  {
    "url": "tags/Wheels/index.html",
    "revision": "360c070f4e762597b7de1316200febb5"
  },
  {
    "url": "tags/使命,愿景,价值观/index.html",
    "revision": "cf696aa80897ad5c561b6109141fd33c"
  },
  {
    "url": "tags/区块链/index.html",
    "revision": "010cf2b75580b7f71a20499b1d4c7f62"
  },
  {
    "url": "tags/命令/index.html",
    "revision": "51419f73122f0657100b6fa32efd7c59"
  },
  {
    "url": "tags/商标/index.html",
    "revision": "6cf889ddf0b96367ce4891e4c03c7703"
  },
  {
    "url": "tags/序列化/index.html",
    "revision": "cfbacbddc7de85a20ddb4b93b37fdcd0"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "435fabfcab21e3c9abdd92ad1a4860aa"
  },
  {
    "url": "tags/水印/index.html",
    "revision": "0e7aa2a5805d50a6156c22fcccc36b7e"
  },
  {
    "url": "tags/裁剪/index.html",
    "revision": "8ecf6886d6c7155d80a950a67e30258d"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "bddc6c3a7f02ec2fd456806b834e1f21"
  },
  {
    "url": "tags/阿里云/index.html",
    "revision": "599189f3a972cfccf9c95d3f4a276357"
  },
  {
    "url": "Timeline/index.html",
    "revision": "51605b4a2d5ee3e3919625b12161d921"
  },
  {
    "url": "Web/Backend/Django/django wheels.html",
    "revision": "b6417797601af86c692732c6f22f62e9"
  },
  {
    "url": "Web/Backend/Django/django 处理保存上传的图片.html",
    "revision": "675dd0155744706a8899471a3d78bb82"
  },
  {
    "url": "Web/Backend/Django/django 网站加速.html",
    "revision": "36deb9770bb4128e7f03cbb59a782dd4"
  },
  {
    "url": "Web/Backend/Django/index.html",
    "revision": "f956a0ab8e86a1b2d6586d4e35b15aca"
  },
  {
    "url": "Web/Backend/Django/序列化.html",
    "revision": "4c37ce2263abea6bef23d6d9b7ac5618"
  },
  {
    "url": "Web/Backend/Django/自定义配置文件.html",
    "revision": "253dada928f836f899035a246fa20514"
  },
  {
    "url": "Web/Backend/Nginx/configurin-systemd-service-for-nginx.html",
    "revision": "44f78edbdfd842318353ec0178985506"
  },
  {
    "url": "Web/Backend/Nginx/handle-error.html",
    "revision": "f0314bd2aecc28b3f3d63b217707796a"
  },
  {
    "url": "Web/Backend/Nginx/index.html",
    "revision": "3ee9c160ae7b18dd9e68bb39f8686fe7"
  },
  {
    "url": "Web/Backend/Nginx/install-goaccess.html",
    "revision": "9ebe22f079cc122e689d9b3f0d87a2e1"
  },
  {
    "url": "Web/Backend/Nginx/limit-module.html",
    "revision": "f3071e31cc84a22eb39ce3fe0a0aca65"
  },
  {
    "url": "Web/Backend/Nginx/location-rules.html",
    "revision": "93bb75d8313fd8ad044ee173e2a1726a"
  },
  {
    "url": "Web/Backend/Nginx/master-slave-nginx.html",
    "revision": "236224c0e6d056794ab1f7b9f40d6e52"
  },
  {
    "url": "Web/Backend/Nginx/nginx-upstream.html",
    "revision": "89851a38b5872051ef2a055aae4d7f87"
  },
  {
    "url": "Web/Backend/Nginx/proxy-pass-rules.html",
    "revision": "bec9849ad1ef8c771cc97453478cfa30"
  },
  {
    "url": "Web/Backend/Nginx/referer-module.html",
    "revision": "e9245e791d343acb3064ffe012e14b0e"
  },
  {
    "url": "Web/Backend/Nginx/rewrite-rules.html",
    "revision": "98f89dd80f6ff5e80d24f5ffd0426ce8"
  },
  {
    "url": "Web/Backend/Nginx/the-difference-between-root-and-alias.html",
    "revision": "ac198f76b474b3c3de03aaa8b2bcc487"
  },
  {
    "url": "Web/Backend/Nginx/upgrade-http-to-https.html",
    "revision": "4411057560f954684de8145519951c5a"
  },
  {
    "url": "Web/Backend/Nginx/websocket-proxy.html",
    "revision": "3434444365bfcb738c8a877acb382753"
  },
  {
    "url": "Web/Database/index.html",
    "revision": "7ac8b95575b64992fa01fecf15866281"
  },
  {
    "url": "Web/Database/mysql/index.html",
    "revision": "7a5405243aa5a055f45b033def90b1eb"
  },
  {
    "url": "Web/Database/mysql/insert-update-and-delete.html",
    "revision": "35e04a40d66bda9f28111e74499ba9bf"
  },
  {
    "url": "Web/Database/mysql/join-and-union.html",
    "revision": "a147b7a1d925f4d1981a54c5a28b7cc3"
  },
  {
    "url": "Web/Database/mysql/select.html",
    "revision": "61355e334cca2d8773bcc044a92bb41e"
  },
  {
    "url": "Web/Database/mysql/stored-procedure.html",
    "revision": "2a3cc541a0c97703ecac91b59e18a6e1"
  },
  {
    "url": "Web/Database/mysql/transactions.html",
    "revision": "07a3288196b2c07779d29e65b5e16440"
  },
  {
    "url": "Web/Database/mysql/trigger.html",
    "revision": "7633de6360c97af49272ea1bba8d3fb8"
  },
  {
    "url": "Web/Database/mysql/views.html",
    "revision": "a69e86c61451f227d6b0955ca9cb81dc"
  },
  {
    "url": "Web/Frondend/vue/index.html",
    "revision": "83b8d0f96e27b1bd8638c5fb5e018a1b"
  },
  {
    "url": "Web/Frondend/vue/ref-type.html",
    "revision": "bf8f93f7bd7652ee2ee159d7d63655fb"
  },
  {
    "url": "Web/Frondend/vue/the-next-tick.html",
    "revision": "a88dafce0a2bcc673c18722f9166ba53"
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
