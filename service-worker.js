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
    "revision": "49a484aadfc5beb71a0003492122cddd"
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
    "url": "assets/js/1.7be8d87d.js",
    "revision": "6bc839eb66bca8a03fb643ec6af57ef8"
  },
  {
    "url": "assets/js/10.218194af.js",
    "revision": "9d72c961a05973927b9e475f0db06747"
  },
  {
    "url": "assets/js/11.7b5d9167.js",
    "revision": "a97fcc614d83609f939ca3c5564ffcb5"
  },
  {
    "url": "assets/js/12.ad5e3a52.js",
    "revision": "cf36b033ccaf6220cd2a7cc70104823b"
  },
  {
    "url": "assets/js/13.da458018.js",
    "revision": "0966dda08579596b535b8c4c47d1cdb2"
  },
  {
    "url": "assets/js/14.deae2bc2.js",
    "revision": "ce386051bdc868a7f3f01da59afbae3e"
  },
  {
    "url": "assets/js/15.0a3558bd.js",
    "revision": "f26db3250f3e934d5a97ef3eda92f10a"
  },
  {
    "url": "assets/js/16.ce2af93e.js",
    "revision": "f18b0505057017166173576dafc66983"
  },
  {
    "url": "assets/js/17.c138985f.js",
    "revision": "b481fbaa1770fd234437347ffd3b61c4"
  },
  {
    "url": "assets/js/18.b013517e.js",
    "revision": "846bd95b33a34e096414596eb7090f2c"
  },
  {
    "url": "assets/js/19.281a11ff.js",
    "revision": "36c7a63461779467440f6dc5266365b1"
  },
  {
    "url": "assets/js/20.3306c8ad.js",
    "revision": "dcc770670aeacacb003cc662c7a51b88"
  },
  {
    "url": "assets/js/21.621ca5e7.js",
    "revision": "f5af57157a6bd086c726862693a60a6a"
  },
  {
    "url": "assets/js/22.0ff8695d.js",
    "revision": "493adfe16f3b2a09f14d7c1c4038b9e8"
  },
  {
    "url": "assets/js/23.4bf1b15a.js",
    "revision": "5505ca27156091be940d502457f27284"
  },
  {
    "url": "assets/js/24.cdd87ad2.js",
    "revision": "daf67aadb612749bbbeaa8dd4aeb2be8"
  },
  {
    "url": "assets/js/25.991df8a8.js",
    "revision": "f48232d7bb9a7a75b1f0d579c064e1df"
  },
  {
    "url": "assets/js/26.22f675bc.js",
    "revision": "cf25850d5483c4a346fee542efccd589"
  },
  {
    "url": "assets/js/27.39b27f3b.js",
    "revision": "6e50f2fe67712c0340c57f8494991333"
  },
  {
    "url": "assets/js/28.691da842.js",
    "revision": "c0050033ab04b33617c947414f4914b9"
  },
  {
    "url": "assets/js/29.ddc26ea5.js",
    "revision": "384497c185b61e4625fd8f1d6b947290"
  },
  {
    "url": "assets/js/30.2fbeb8b3.js",
    "revision": "4e6f93b3106ab8bdf25d4b7dc002353d"
  },
  {
    "url": "assets/js/31.e52126b0.js",
    "revision": "17ccf10719ee978099e5d667ead7eaa0"
  },
  {
    "url": "assets/js/32.8d928bb5.js",
    "revision": "9502657da92e9bc409cc11f241b9f106"
  },
  {
    "url": "assets/js/33.f2ec3ff2.js",
    "revision": "2685453e729ca0ff7e2a6c86e4b1835b"
  },
  {
    "url": "assets/js/34.f994384f.js",
    "revision": "cc0a0131741ad729f85593f1308e2fbc"
  },
  {
    "url": "assets/js/35.44b2e021.js",
    "revision": "f0666abfa99110fe691e9348818c27cc"
  },
  {
    "url": "assets/js/36.9cda1ad3.js",
    "revision": "c3254ad6a96984417d5fb483ec6ca801"
  },
  {
    "url": "assets/js/37.f0f4ea23.js",
    "revision": "9e030c5de09f485590d29a180d6013bb"
  },
  {
    "url": "assets/js/38.6538f80d.js",
    "revision": "1c2475f722be94a217d97c8ace3d0a38"
  },
  {
    "url": "assets/js/39.b9755b7f.js",
    "revision": "5079359cb7f95981c02c2bd556a254db"
  },
  {
    "url": "assets/js/4.eba9f4ec.js",
    "revision": "e08b4a694e49d0ae2601d84befa4fa87"
  },
  {
    "url": "assets/js/40.b5758c15.js",
    "revision": "bb04cbfd83b0fbf2dff82ec3cfddfd09"
  },
  {
    "url": "assets/js/41.396d5d84.js",
    "revision": "6f7275767ab36cb048d15e8367e828d3"
  },
  {
    "url": "assets/js/42.286aad5f.js",
    "revision": "e4670a4a3b8d54061a76fcced889be8e"
  },
  {
    "url": "assets/js/43.f6eae49a.js",
    "revision": "2627011732de2364aec6b654d0c56592"
  },
  {
    "url": "assets/js/44.b7d1c063.js",
    "revision": "72fb3169b946fb76a623aca67a44d70b"
  },
  {
    "url": "assets/js/45.7b5e4b05.js",
    "revision": "8962293a534bb0b8d26e15c7ff00da70"
  },
  {
    "url": "assets/js/46.9a887eeb.js",
    "revision": "dee813ca6c04fcb09304cfdcab8ca441"
  },
  {
    "url": "assets/js/47.a07d90a7.js",
    "revision": "d83735ac3905fefeaf687b76591e7ed0"
  },
  {
    "url": "assets/js/5.c46bdf41.js",
    "revision": "78779d170070f4dc0102297d87d57d34"
  },
  {
    "url": "assets/js/6.1fbecbe7.js",
    "revision": "6cdbf7d10c22b4b617b95ca709cd060a"
  },
  {
    "url": "assets/js/7.daf33f3c.js",
    "revision": "e793fef4c13770876e6ef68247a9f74e"
  },
  {
    "url": "assets/js/8.b4355d96.js",
    "revision": "6d36511568555df5882796431e47d569"
  },
  {
    "url": "assets/js/9.8476c639.js",
    "revision": "c0013dd62c4db97196de3ca2e6afa895"
  },
  {
    "url": "assets/js/app.c7b57ac9.js",
    "revision": "ca08b6e00aef20dc8cfc0421fe8b9b92"
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
    "revision": "34b9f02cfe90d0f1866a7569a39119b9"
  },
  {
    "url": "avatar1.png",
    "revision": "09465b7df36e185ec6c524acd9d6213a"
  },
  {
    "url": "backend/mysql/index.html",
    "revision": "f5b177a0cf9a30f1476dff594483e3c5"
  },
  {
    "url": "backend/mysql/insert-update-and-delete.html",
    "revision": "998ba952821c356f5880ccde32ac1b06"
  },
  {
    "url": "backend/mysql/join-and-union.html",
    "revision": "2a2bc8c5657c70739296619170f4049f"
  },
  {
    "url": "backend/mysql/select.html",
    "revision": "269ad5f67a92e1ff61f5ef6f60c0a882"
  },
  {
    "url": "backend/mysql/stored-procedure.html",
    "revision": "3e490ae85ef8afce15fde40e63d8e3f2"
  },
  {
    "url": "backend/mysql/transactions.html",
    "revision": "7dcdea0f553a1f850e0bb217e27ebf51"
  },
  {
    "url": "backend/mysql/trigger.html",
    "revision": "7bc91cf1ad203b397715d2308a224382"
  },
  {
    "url": "backend/mysql/views.html",
    "revision": "46f5712c169d1ed2406dc3ad6bdc256a"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "fb8e6db52d42227719d60c02da2b3061"
  },
  {
    "url": "backend/nginx/handle-error.html",
    "revision": "facc6da73d4d2724c6cd6d3283680c69"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "15acceba4312fa91352944d0f1bdbfca"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "2e8f4bb183e7a4c9de007c6a285f2832"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "08c2261841f2ccb623e14a7be9e59852"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "cc521dfa3af3e02d1a9d3611b86bdfcb"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "78d30d97dc78717f641578c8c758bcf8"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "cd785c317a0b000307b80dbf09669861"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "c91537c5509e8ebeed114ffd238bedfc"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "41c284bd2335eb2079aea43d8a9b927c"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "99180ffed07b51cf708b1804564ba014"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "1350dec62e7998776dd53ed9801bc8c9"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "3a3f4643ecff3feb405ab12033af2ec0"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "f254f7dfb2905750d31f80fe4f30cb16"
  },
  {
    "url": "categories/index.html",
    "revision": "09c39f1c4e3fdd9e51a5ad6177d2ef23"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1a628becc7e66aba6acd339a4ceaecad"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2f270ccc22ab134ad8a7e70cd6b36f0b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fabdbcf73573c72341e7c199661314c6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "272ee0863606225f61b1b970fa1a76bb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "frondend/vue/index.html",
    "revision": "904a8ef67111fd1849faa75f33953909"
  },
  {
    "url": "frondend/vue/ref-type.html",
    "revision": "95bf86b5ad193fafae22b9cca3a32ca8"
  },
  {
    "url": "frondend/vue/the-next-tick.html",
    "revision": "b0e3a3bfee42b2fbf341d5f282c1eddd"
  },
  {
    "url": "guide/index.html",
    "revision": "778226a9496368f0497cd5ca00ffa36a"
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
    "revision": "15ba5c9bcf77b48041d15698dd3d6ae1"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "136d685ef8bc8cf75904f1fd08e8c03f"
  },
  {
    "url": "tags/goaccess/index.html",
    "revision": "25d93d9cfc05896625734f2a0a6c40a7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d3277a5b3a55e7e4fa1c2403f5902341"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cd11f838075fa7a4c038e391f184ead5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8980cffb3ac675e575b590b45115ed29"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "4289d857341eb0d5f95b137d2ef4ff82"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2c8fd4baef958130bd5f0f2630d9f64c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c828b16617a8a518f045c27fce0a599f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "29801f1dd8de391c8e6d6bb06c69699a"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "77160a499d369ee9457744c3725abc02"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "42d78fc0d20507923dd056e4a46b95b6"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "436233e11b433a0ee4f097abdc385023"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c62833a636c7d52c51c74e0aab378852"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d4c40918229cbedadad199e2532f951d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "9875c1fafc75a429e5ec466776eab5a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "dc945509514fff77f75842d74e737e47"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "52676f6a5ad51acc2833ddcfd4571352"
  },
  {
    "url": "技术文章/java/index.html",
    "revision": "07d93e5ee1052f2305eb27ca3f5a1652"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "05c15b22f3acaee739b4b37b2138e15d"
  },
  {
    "url": "技术文章/java高级/index.html",
    "revision": "ebb87d9e0a88a8aac56bc5f159cd55b1"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6922523c06c9b55a76429fb9e3da0da6"
  },
  {
    "url": "技术文章/vue/index.html",
    "revision": "a0ba478a24e307411339fa20d895b699"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f306ce094a09fcb16a82eda9e83b2150"
  },
  {
    "url": "生活分享/diary.html",
    "revision": "3c6969c3b340f55cafdbae23e29d120d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e45da964f37da59315ae5d25a49c5ff6"
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
