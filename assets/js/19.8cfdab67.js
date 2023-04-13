(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{643:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("嵌入式开发领域，MBD是未来的趋势，现有比较好用的工具就是simulink，可以实现代码自动生成，这样就大大提高了开发效率及可靠性。本章主要介绍simulink如何快速入门，有兴趣的朋友可以进来看看。")]),t._v(" "),a("p",[a("a",{attrs:{href:"www.deep-diary.com"}},[t._v("点击免费观看教学视频")])])]),t._v(" "),a("h1",{attrs:{id:"simulink"}},[t._v("Simulink")]),t._v(" "),a("h2",{attrs:{id:"基本模块"}},[t._v("基本模块")]),t._v(" "),a("p",[t._v("constant")]),t._v(" "),a("p",[t._v("scope")]),t._v(" "),a("h2",{attrs:{id:"模块属性"}},[t._v("模块属性")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gcbh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%获取模块句柄")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inspect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gcbh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 窗口形式打开属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gcbh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[1,2,3]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gcbh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'block'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 找到系统中的模块")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"信号线"}},[t._v("信号线")]),t._v(" "),a("ul",[a("li",[t._v("scalar")]),t._v(" "),a("li",[t._v("Vector")]),t._v(" "),a("li",[t._v("Matrix")]),t._v(" "),a("li",[t._v("Bus")]),t._v(" "),a("li",[t._v("function-call")]),t._v(" "),a("li",[t._v("尺寸可变信号")]),t._v(" "),a("li",[t._v("未连接信号")])]),t._v(" "),a("h2",{attrs:{id:"端口回调函数"}},[t._v("端口回调函数")]),t._v(" "),a("p",[t._v("选中模块后")]),t._v(" "),a("div",{staticClass:"language-matla line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("port_h = get_param(gcb,'PortHanles')\nget(port_h.Inport) % 获得输入口的句柄\n\nset_param(port_h.Inport, 'ConnectionCallback','') % 设置端口变化的回调函数\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"自定义模块gui控件"}},[t._v("自定义模块GUI控件")]),t._v(" "),a("h2",{attrs:{id:"自定义模块库"}},[t._v("自定义模块库")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_44281768/article/details/109061062",target:"_blank",rel:"noopener noreferrer"}},[t._v("(31条消息) Simulink学习——自定义库的创建和使用_simulink 自定义库_一大块肥皂的博客-CSDN博客"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"基于模型的设计开发流程"}},[t._v("基于模型的设计开发流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230312172228404.png",alt:"image-20230312172228404"}})]),t._v(" "),a("h2",{attrs:{id:"rtw文件"}},[t._v("rtw文件")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rtwbuild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 自动代码生成 == Ctrl + B")]),t._v("\n\nslx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("rtw"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("ert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TLC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("C \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230312185008619.png",alt:"image-20230312185008619"}})]),t._v(" "),a("h3",{attrs:{id:"提升代码可读性"}},[t._v("提升代码可读性")]),t._v(" "),a("p",[t._v("CSC = custom storage class")]),t._v(" "),a("ul",[a("li",[t._v("信号线")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230312192825697.png",alt:"image-20230312192825697"}})]),t._v(" "),a("ul",[a("li",[t._v("常数优化 Inline parameters\n"),a("ul",[a("li",[t._v("把常量，直接用数字表示，不用结构体变量，保存到ROM中")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230312193009627.png",alt:"image-20230312193009627"}})]),t._v(" "),a("ul",[a("li",[t._v("数据变量")])]),t._v(" "),a("p",[t._v("Simulink模型生成代码详解（2） - 丁旭的文章 - 知乎 https://zhuanlan.zhihu.com/p/141651589")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("k1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Simulink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Parameter\nk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CoderInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StorageClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Custom'")]),t._v("\nk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CoderInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CustomStorageClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExportGloble'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 双击workspace 中的变量名，可以进行对话框方式进行配置，不多对大量变量来说，使用脚本会更加方便")]),t._v("\n\nin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Simulink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Signal\nin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CoderInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StorageClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExportGloble'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("信号线跟数据字典绑定")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230312194017160.png",alt:"image-20230312194017160"}})]),t._v(" "),a("h2",{attrs:{id:"信号别名"}},[t._v("信号别名")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Simulink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AliasType\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230312202101929.png",alt:"image-20230312202101929"}})]),t._v(" "),a("h2",{attrs:{id:"定义枚举类"}},[t._v("定义枚举类")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("classdef week "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Simulink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IntEnumType\n\tenumeration\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methods")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Static "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 从外部头文件中导入")]),t._v("\n\t\tfunctin retVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeaderFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tretVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'week.h'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("头文件导入")]),t._v(" "),a("h2",{attrs:{id:"pid-模型"}},[t._v("pid 模型")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u013288925/article/details/122139081",target:"_blank",rel:"noopener noreferrer"}},[t._v("Simulink建模：PID控制模型_pid simulink_chhttty的博客-CSDN博客"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);