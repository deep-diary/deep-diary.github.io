(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{725:function(s,t,n){"use strict";n.r(t);var e=n(5),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"websocket-反向代理"}},[s._v("websocket 反向代理")]),s._v(" "),n("p",[s._v("在理解"),n("RouterLink",{attrs:{to:"/backend/nginx/nginx-upstream.html"}},[s._v("反向代理与负载均衡")]),s._v("后就可以快速实现 websocket 的反向代理。")],1),s._v(" "),n("h2",{attrs:{id:"config"}},[n("a",{attrs:{href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("config"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vim")]),s._v(" /etc/nginx/conf.d/default.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改为以下内容")]),s._v("\nserver")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  nginx.example.com")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#charset koi8-r;")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v("  /var/log/nginx/nginx.access.log  main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v("  /var/log/nginx/nginx.error.log warn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /chat/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://echo.websocket.org")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_http_version")]),s._v(" 1.1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Upgrade "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Connection "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upgrade"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nnginx -s reload "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重载配置")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"test"}},[s._v("test")]),s._v(" "),n("p",[s._v("接着在"),n("a",{attrs:{href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("测试页面"),n("OutboundLink")],1),s._v("将 Location 中的 "),n("code",[s._v("ws://echo.websocket.org")]),s._v(" 替换为目标地址 "),n("code",[s._v("ws://nginx.example.com/chat/")]),s._v(" （需要修改本地 DNS），Connect 成功即为成功。")])])}),[],!1,null,null,null);t.default=a.exports}}]);