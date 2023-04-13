(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{732:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[s._v("TRANSACTIONS")]),s._v(" "),a("p",[s._v("事务处理是一种机制，用来管理成批的 SQL 操作，以保证数据库的完整性。如果错误发生，则进行回退（撤销）到已知安全状态的版本。")]),s._v(" "),a("p",[s._v("术语：")]),s._v(" "),a("ul",[a("li",[s._v("事务（transaction）：指一组 SQL 语句")]),s._v(" "),a("li",[s._v("回退（rollback）：指撤销指定 SQL 语句的过程")]),s._v(" "),a("li",[s._v("提交（commit）：指将未存储的 SQL 语句结果写入数据库表")]),s._v(" "),a("li",[s._v("保留点（savepoint）：指事务处理中设置的临时占位符（place-holder），你可以对它发布回退（与回退整个事务处理不同）")])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[s._v("示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" order_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20016")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" orderitems\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" order_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20016")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);