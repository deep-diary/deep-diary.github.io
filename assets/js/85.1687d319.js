(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{705:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"root-与-alias-区别"}},[t._v("root 与 alias 区别")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),a("p",[t._v("alias 与 "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#root",target:"_blank",rel:"noopener noreferrer"}},[t._v("root"),a("OutboundLink")],1),t._v(" 有相似的用法，主要是介绍他们之间的区别。")]),t._v(" "),a("p",[t._v("其实在了解这个的时候，突然就想起 ”Linux 中一切皆文件“ 的概念（可能有些牵强），alias（root）的作用即将 URL 映射为文件路径，然后返回对应的静态文件。")]),t._v(" "),a("blockquote",[a("p",[t._v("待如今了解到 "),a("code",[t._v("$request_filename")]),t._v(" 后发现与想法一致。")])]),t._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# alias")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Syntax:")]),t._v(" alias path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Default:")]),t._v(" —\nContext: location\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# root")]),t._v("\nSyntax: root path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Default:")]),t._v(" root html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nContext: http, server, location, if in location\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"区别"}},[t._v("区别")]),t._v(" "),a("p",[t._v("此中区别与 "),a("RouterLink",{attrs:{to:"/backend/nginx/proxy-pass-rules.html"}},[t._v("proxy_pass")]),t._v(" 相似。")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("directives")]),t._v(" "),a("th",[t._v("difference")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("root")]),t._v(" "),a("td",[t._v("将完整的 url 映射到文件路径。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("alias")]),t._v(" "),a("td",[t._v("将 location 后的 url 映射到文件路径。")])])])]),t._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /usr/share/nginx/html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v(" /usr/share/nginx/html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /root/dir/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /usr/share/nginx/html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /alias/dir/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v(" /usr/share/nginx/html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~* /root(\\d+\\.txt)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /usr/share/nginx/html/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~* /alias(\\d+\\.txt)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v(" /usr/share/nginx/html/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("curl($request)")]),t._v(" "),a("th",[t._v("$request_filename")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("/root")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html/root")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/root/index.html")])]),t._v(" "),a("td",[a("code",[t._v("usr/share/nginx/html/root/index.html")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/alias")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/alias/index.html")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html/index.html")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/root/dir/")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html/root/dir/")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/root/dir/index.html")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html/root/dir/index.html")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/alias/dir/")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/alias/dir/index.html")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/htmlindex.html")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/root/123456.txt")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html/root/123456.txt")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/alias/123456.txt")])]),t._v(" "),a("td",[a("code",[t._v("/usr/share/nginx/html/123456.txt")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/alias123456.txt")])]),t._v(" "),a("td",[a("code",[t._v("/usr<br/>/share/nginx/html/123456.txt")])])])])]),t._v(" "),a("p",[t._v("当使用 "),a("code",[t._v("alias")]),t._v(" 且 "),a("code",[t._v("location")]),t._v(" 以 "),a("code",[t._v("/")]),t._v(" 结尾时需注意 "),a("code",[t._v("/")]),t._v(" 被废弃，与 "),a("code",[t._v("proxy_pass")]),t._v(" 中情况一致。")])])}),[],!1,null,null,null);s.default=e.exports}}]);