(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{700:function(s,a,e){"use strict";e.r(a);var v=e(5),t=Object(v.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vim"}},[s._v("vim")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/68111471",target:"_blank",rel:"noopener noreferrer"}},[s._v("精通 VIM ，此文就够了 - 知乎 (zhihu.com)"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(":source "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYVIMRC")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 普通模式下加载VIM")]),s._v("\n:split  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分屏")]),s._v("\n:q "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出分屏")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"vim-如何进行分屏操作呢"}},[e("strong",[s._v("VIM 如何进行分屏操作呢？")])]),s._v(" "),e("p",[s._v("请记住一个重要的组合键 "),e("code",[s._v("Ctrl + w")]),s._v(" ,操作分屏离不开这个组合键(这里的组合键可没有 + ，只是 Ctrl 和 w 组合实现一个动能,下文谈到的组合健都这样描述 )。")]),s._v(" "),e("p",[s._v("按住组合键 "),e("code",[s._v("Ctrl + w")]),s._v(" ，然后在按下 s")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Ctrl + w s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这个命令将会上下分割当前打开的文件。")]),s._v(" "),e("p",[s._v("按住冒号"),e("code",[s._v("：")]),s._v("，紧接着输入 sp ,在键入文件名，如下：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(":sp "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面的这个命令将会上下分割当前文件和新打开的 file 。")]),s._v(" "),e("p",[s._v("按住组合键 "),e("code",[s._v("Ctrl + w")]),s._v(" ,然后在按下 v")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Ctrl +w "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面的这个命令将会左右分割当前的文件")]),s._v(" "),e("p",[s._v("按住冒号 "),e("code",[s._v("：")]),s._v("，紧接着输入 vsp ,在键入文件名称，如下：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(":vsp "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面的这个命令将会左右分割当前打开的文件和新打开的文件 file 。")]),s._v(" "),e("h3",{attrs:{id:"分屏以后如何在文件间切换光标-和移动分屏"}},[e("strong",[s._v("分屏以后如何在文件间切换光标，和移动分屏？")])]),s._v(" "),e("p",[s._v("1.切换左右分屏的光标 ：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w h\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前光标定位到左边的屏幕")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w l\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前的光标定位到右边的屏幕")]),s._v(" "),e("p",[s._v("2.移动左右分屏 ：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w H\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前的分屏移动到左边")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w L\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前的分屏移动到右边")]),s._v(" "),e("p",[s._v("3.切换上下分屏的光标 ：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w j\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前的光标移动到下面的分屏")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w k\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前光标移动到上面的分屏")]),s._v(" "),e("p",[s._v("4.移动上下分屏：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w J\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前的分屏移动到下面的分屏")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w K\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前的分屏移动到上面的分屏")]),s._v(" "),e("h3",{attrs:{id:"如何关闭分屏呢"}},[e("strong",[s._v("如何关闭分屏呢？")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w c\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这个命令是关闭当前的分屏")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Ctrl + w q\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面的这个命令也是关闭当前的分屏，如果是最后一个分屏将会退出 VIM 。")]),s._v(" "),e("h2",{attrs:{id:"vim-的退出"}},[e("strong",[s._v("VIM 的退出")])]),s._v(" "),e("p",[s._v("VIM 的最终操作就是 VIM 的退出，如何进行 VIM 的有效退出呢？下面针对 VIM 的退出来做一下说明：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":w\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("保存当前对文件的修改，但是不退出文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":w!\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("强制保存但是不退出文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":w file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("保存当前的文件修改到 file 文件当中。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":q!\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("退出文件，对文件的修改不做保存。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":qa!\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("退出所有的文件，对所有的文件修改都不做保存。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":wq\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("退出文件并保存对文件的修改。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":x\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("退出文件并保存对文件的修改。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":e file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开另一个文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":e!\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("放弃对文件的所有修改，恢复文件到上次保存的位置。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":saveas file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("另存为 file。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":bn` 和 `:bp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当打开多个文件的时候可以输入 "),e("code",[s._v(":bn")]),s._v(" 和 "),e("code",[s._v(":bp")]),s._v(" 进行上一个文件或者下一个文件的切换。")]),s._v(" "),e("p",[s._v("以上的命令都是在命令行模式下的操作（也就是输入冒号 "),e("code",[s._v("：")]),s._v("紧接着输入相应的字符命令如 "),e("code",[s._v(":q!")]),s._v(" 就会执行退出操作）。 zempty 在这里要推荐一个常用的操作就是 "),e("code",[s._v("ZZ")]),s._v(" , 当你对文件进行了修改，需要保存退出，那么可以在键盘上快速的键入两个大写的 Z (ZZ),这样文件就会快速的保存退出了 。")]),s._v(" "),e("h2",{attrs:{id:"vim-的输入模式"}},[e("strong",[s._v("VIM 的输入模式")])]),s._v(" "),e("p",[s._v("编辑器的主要功能就是输入文本，编辑文本，很多编辑器在打开文件的时候就可以通过键盘录入文字，但是 VIM 有稍许的不同，刚刚接触 VIM 的时候是很难对 VIM 进行编辑操作的，记得我在刚接触它的时候是很崩溃的（千万个草泥马在内心奔腾），但是你接触久了，了解的多了，也就理解如此设计的美妙之处。")]),s._v(" "),e("h3",{attrs:{id:"如何使用-vim-编辑文本"}},[e("strong",[s._v("如何使用 VIM 编辑文本？")])]),s._v(" "),e("p",[s._v("这里有必要再强调一下，在使用 VIM 打开文件的时候，这时候的状态是正常模式（Normal-mode）,请务必记住这个模式，如果你不确定当前是否处在正常模式，请连续按两下键盘上的 "),e("code",[s._v("jj")]),s._v(" (这个 "),e("code",[s._v("jj")]),s._v(" 需要读者去做相应的配置，上文有做过讲解)，VIM 处理编辑文本需要从正常模式(Normal)切换到插入模式(Insert-mode),进入插入模式的时候你应该会在屏幕底部看到 INSERT 的提示，这时候就可以编辑文本了。")]),s._v(" "),e("h3",{attrs:{id:"如何从正常模式进入插入模式呢"}},[e("strong",[s._v("如何从正常模式进入插入模式呢？")])]),s._v(" "),e("p",[s._v("请记住下面几个常用启动录入文本的键盘字符 "),e("code",[s._v("i,I,a,A,o,O,s,S")]),s._v(" 。")]),s._v(" "),e("p",[e("code",[s._v("i")]),s._v("是在光标所在的字符之前插入需要录入的文本。")]),s._v(" "),e("p",[e("code",[s._v("I")]),s._v(" 是在光标所在行的行首插入需要录入的文本。")]),s._v(" "),e("p",[e("code",[s._v("a")]),s._v(" 是在光标所在的字符之后插入需要录入的文本。")]),s._v(" "),e("p",[e("code",[s._v("A")]),s._v(" 是在光标所在行的行尾插入需要录入的文本。")]),s._v(" "),e("p",[e("code",[s._v("o")]),s._v(" 是光标所在行的下一行行首插入需要录入的文本。")]),s._v(" "),e("p",[e("code",[s._v("O")]),s._v(" 是光标所在行的上一行行首插入需要录入的文本。")]),s._v(" "),e("p",[e("code",[s._v("s")]),s._v(" 删除光标所在处的字符然后插入需要录入的文本。")]),s._v(" "),e("p",[e("code",[s._v("S")]),s._v(" 删除光标所在行，在当前行的行首开始插入需要录入的文本。")]),s._v(" "),e("p",[s._v("还有一个可能经常用到的就是 "),e("code",[s._v("cw")]),s._v(" ，删除从光标处开始到该单词结束的所有字符，然后插入需要录入的文本（这个命令是两个字符的合体 cw ）。")]),s._v(" "),e("h2",{attrs:{id:"vim-的命令模式"}},[e("strong",[s._v("VIM 的命令模式")])]),s._v(" "),e("p",[s._v("关于命令模式上文有提到过，下面主要来列举几个常用的命令模式操作（命令输入完以后，需要按下 Enter 键去执行命令）：")]),s._v(" "),e("p",[e("strong",[s._v("文本的行号设置最好不要设置在配置文件中（因为复制文件的时候行号的出现会很麻烦），在命令行实现就好")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":set nu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("该命令会显示行号。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":set nonu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("该命令会取消行号。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("定位到 n 行。")]),s._v(" "),e("h3",{attrs:{id:"vim-进行关键字的查找。"}},[e("strong",[s._v("VIM 进行关键字的查找。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/{目标字符串}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如：/zempty 会在文本中匹配 zempty 的地方高亮。")]),s._v(" "),e("p",[s._v("查找文本中匹配的目标字符串，查到以后，输入键盘上的 n 会去寻找下一个匹配，N 会去寻找上一个匹配。")]),s._v(" "),e("h3",{attrs:{id:"vim-处理大小写的区分"}},[e("strong",[s._v("VIM 处理大小写的区分")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":set ic\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("编辑器将不会区分大小写，如果你进行该设置之后，进行关键字查询如 /zempty 如果文本中有 Zempty ,zEmpty,....,只要是字符相同不会区分大小写都会进行匹配。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":set noic\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("该命令用来区分大小写的查询。")]),s._v(" "),e("h3",{attrs:{id:"vim-删除多行文本"}},[e("strong",[s._v("VIM 删除多行文本")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":n1,n2d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("n1 和 n2 指的是起始行号和结束行号，d 是删除关键字")]),s._v(" "),e("h3",{attrs:{id:"vim-处理文本的替换"}},[e("strong",[s._v("VIM 处理文本的替换")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":{作用范围}s/{目标}/{替换}/{替换的标志}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("作用范围分为当前行、全文、选区等等。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":s/zempty/handsome/g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将会把当前光标所在行的 zempty 替换成 handsome")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":%s/zempty/handsome/g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将会把全文中的 zempty 替换成 handsome")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":n1,n2s/zempty/handsome/g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里的 n1 和 n2 值得是行号，将会替换掉 n1 到 n2 的所有 zempty 为 handsome.")]),s._v(" "),e("p",[s._v("选区，在可视模式下选择区域后输入"),e("code",[s._v(":")]),s._v("，VIM 会自动补全为 "),e("code",[s._v(":'<,'>")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":'<,'>s/zempty/handsome/g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个操作咋一看起来有点懵逼，这个操作是可视模式 (Visual-mode) 下选区中的替换操作（可视模式下文会谈到），可视模式下输入"),e("code",[s._v("：")]),s._v("会自动补全 "),e("code",[s._v(":'<,'>")]),s._v(" 这个是可视范围下的操作范围，类似于 % 和 n1,n2，代表操作的文本范围，上面的例子就是替换掉可视区域的 zempty 为 handsome。")]),s._v(" "),e("p",[s._v("下面来谈谈替换的标志。")]),s._v(" "),e("p",[s._v("上文中命令结尾的 "),e("code",[s._v("g")]),s._v("即是替换标志之一，表示全局 "),e("code",[s._v("global")]),s._v("替换（即替换目标的所有出现）。 还有很多其他有用的替换标志：")]),s._v(" "),e("p",[s._v("空替换标志表示只替换从光标位置开始，目标的第一次出现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":s/zempty/handsome\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("作用于当前行，从光标处开始查找替换，仅仅替换第一次匹配 zempty 的地方为handsome 。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":%s/zempty/handsome\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("替换掉文件中所有行第一次出现 zempty 的地方为 handsome 。")]),s._v(" "),e("p",[s._v("i 表示大小写不敏感查找，I 表示大小写敏感：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":%s/zempty/handsome/i\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("替换掉所有行第一个出现 zempty (不区分大小写) 为 handsome 。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":%s/zempty/handsome/gi\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("替换掉所有行出现 zempty (不区分大小写) 为 handsome 。")]),s._v(" "),e("p",[s._v('c 表示需要确认，例如全局查找"zempty"替换为"handsome"并且需要确认：')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":%s/zempty/handsome/gc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"vim-执行-linux-命令"}},[e("strong",[s._v("VIM 执行 Linux 命令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":!command\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v(":")]),s._v(" 后面紧跟着 "),e("code",[s._v("!")]),s._v(" ，"),e("code",[s._v("!")]),s._v(" 后面紧跟着 linux 命令（ command 指操作 Linux 系统的一系列命令，如创建文件，新建文件夹，查询文件的属性的等），例子如下，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":!date\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("执行 date 命令显示时间，执行完命令以后按下键盘上的 Enter 就会返回到文件。")]),s._v(" "),e("p",[e("strong",[s._v("VIM 执行命令，并且添加结果至操作文本光标处")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":r !command\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v(": 后面紧跟着 r , r 后面是空格，紧接着是 !command( command 解释同上)，例子如下，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":r !date\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("执行 date 命令显示时间，并且添加命令结果到文本中。")]),s._v(" "),e("p",[e("strong",[s._v("定义快捷键")])]),s._v(" "),e("p",[s._v("下面举例说明：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":map ^M I#<ESC>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面的例子也就是通过快捷键 "),e("code",[s._v("Ctrl + m")]),s._v(" 在文件光标处所在行的行首插入 # （ # 代表注释）。")]),s._v(" "),e("p",[e("code",[s._v(":")]),s._v(" 后面的 map 是关键字 ，后面是 key 和 value 。")]),s._v(" "),e("p",[s._v("key 对应的是 ^M ， 这个 key 需要强调一下 ^M 是 Ctrl + v + m 打出来的（按下这三个键，VIM 会显示成 ^M ）,^M 代表快捷键是"),e("code",[s._v("Ctrl + m")]),s._v(" , Ctrl + v + n 就是 ^N ,代表快捷键是 Ctrl + n 。Ctrl + v + x 就是 ^X (这里的 x 是代表 26 个字母中的任意一个) 代表快捷键 "),e("code",[s._v("Ctrl + x")]),s._v("。")]),s._v(" "),e("p",[s._v("value 对应的是 "),e("code",[s._v("I#<ESC>")]),s._v(",表示按下快捷键以后执行的相应操作，"),e("code",[s._v("I")]),s._v(" 是切换光标至行首并切换到编辑模式，"),e("code",[s._v("#")]),s._v("是行首输入的内容（ # 是VIM 文件中的注释符号 ），"),e("code",[s._v("<ESC>")]),s._v(" 是退出编辑模式。")]),s._v(" "),e("p",[s._v("举例如下：")]),s._v(" "),e("p",[e("code",[s._v(":map ^D Ahelloworld<ESC>")]),s._v("表示在文件的光标所在行的行尾，添加 helloworld 字符串，按住组合键 ctrl + d 就会执行操作。")]),s._v(" "),e("p",[e("strong",[s._v("使用 ab")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":ab email xxxx@gmail.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v(":")]),s._v(" 后面的 ab 是关键字 ,该命令执行后，然后切换到编辑模式下,输入 email 会把输入的 email 自动替换成 xxxx@gmail.com。")]),s._v(" "),e("p",[s._v("这个命令主要是处理频繁输入同样的长串字符串。")]),s._v(" "),e("h2",{attrs:{id:"vim-的正常模式-normal-model"}},[e("strong",[s._v("VIM 的正常模式（Normal-model）")])]),s._v(" "),e("p",[s._v("VIM 正常模式下，主要进行的操作有光标的移动，复制文本，删除文本，黏贴文本等。")]),s._v(" "),e("h3",{attrs:{id:"快速移动光标"}},[e("strong",[s._v("快速移动光标")])]),s._v(" "),e("p",[s._v("几个重要的快捷键")]),s._v(" "),e("p",[s._v("请记住这几个快捷键 "),e("code",[s._v("h,j,k,l")]),s._v(" 这几个按键主要是用来快速移动光标的，"),e("code",[s._v("h")]),s._v(" 是向左移动光标，"),e("code",[s._v("l")]),s._v(" 是向右移动光标，"),e("code",[s._v("j")]),s._v(" 是向下移动光标，"),e("code",[s._v("k")]),s._v(" 是向上移动光标，"),e("code",[s._v("h , j , k ,l")]),s._v(" 在主键盘区完全可以取代键盘上的 "),e("code",[s._v("↑ ,↓ ,← , →")]),s._v(" 的功能。")]),s._v(" "),e("p",[e("strong",[s._v("在当前行上移动光标")])]),s._v(" "),e("p",[e("code",[s._v("0")]),s._v("移动到行头")]),s._v(" "),e("p",[e("code",[s._v("^")]),s._v(" 移动到本行的第一个不是 blank 字符")]),s._v(" "),e("p",[e("code",[s._v("$")]),s._v(" 移动到行尾")]),s._v(" "),e("p",[e("code",[s._v("g_")]),s._v(" 移动到本行最后一个不是 blank 字符的位置")]),s._v(" "),e("p",[e("code",[s._v("w")]),s._v(" 光标移动到下一个单词的开头")]),s._v(" "),e("p",[e("code",[s._v("e")]),s._v(" 光标移动到下一个单词的结尾")]),s._v(" "),e("p",[e("code",[s._v("fa")]),s._v(" 移动到本行下一个为 a 的字符处，fb 移动到下一个为 b 的字符处")]),s._v(" "),e("p",[e("code",[s._v("nfa")]),s._v(" 移动到本行光标处开始的第 n 个 字符为 a 的地方（n 是 1，2，3，4 ... 数字）")]),s._v(" "),e("p",[e("code",[s._v("Fa")]),s._v(" 同 "),e("code",[s._v("fa")]),s._v(" 一样，光标移动方向同 "),e("code",[s._v("fa")]),s._v(" 相反")]),s._v(" "),e("p",[e("code",[s._v("nFa")]),s._v(" 同 "),e("code",[s._v("nfa")]),s._v(" 类似，光标移动方向同 "),e("code",[s._v("nfa")]),s._v("相反")]),s._v(" "),e("p",[e("code",[s._v("ta")]),s._v(" 移动光标至 a 字符的前一个字符")]),s._v(" "),e("p",[e("code",[s._v("nta")]),s._v(" 移动到第二个 a 字符的前一个字符处")]),s._v(" "),e("p",[e("code",[s._v("Ta")]),s._v(" 同 "),e("code",[s._v("ta")]),s._v(" 移动光标方向相反")]),s._v(" "),e("p",[e("code",[s._v("nTa")]),s._v(" 同 "),e("code",[s._v("nta")]),s._v(" 移动光标方向相反")]),s._v(" "),e("p",[e("code",[s._v(";")]),s._v(" 和"),e("code",[s._v(",")]),s._v(" 当使用 f, F, t ,T, 关键字指定字符跳转的时候，使用 "),e("code",[s._v("；")]),s._v("可以快速跳转到写一个指定的字符，"),e("code",[s._v(",")]),s._v("是跳到前一个指定的字符")]),s._v(" "),e("p",[e("strong",[s._v("跨行移动光标")])]),s._v(" "),e("p",[e("code",[s._v("nG")]),s._v("光标定位到第 n 行的行首")]),s._v(" "),e("p",[e("code",[s._v("gg")]),s._v("光标定位到第一行的行首")]),s._v(" "),e("p",[e("code",[s._v("G")]),s._v("光标定位到最后一行的行首")]),s._v(" "),e("p",[e("code",[s._v("H")]),s._v("光标定位到当前屏幕的第一行行首")]),s._v(" "),e("p",[e("code",[s._v("M")]),s._v(" 光标移动到当前屏幕的中间")]),s._v(" "),e("p",[e("code",[s._v("L")]),s._v(" 光标移动到当前屏幕的尾部")]),s._v(" "),e("p",[e("code",[s._v("zt")]),s._v(" 把当前行移动到当前屏幕的最上方，也就是第一行")]),s._v(" "),e("p",[e("code",[s._v("zz")]),s._v(" 把当前行移动到当前屏幕的中间")]),s._v(" "),e("p",[e("code",[s._v("zb")]),s._v(" 把当前行移动到当前屏幕的尾部")]),s._v(" "),e("p",[e("code",[s._v("%")]),s._v(" 匹配括号移动，包括 ( , { , [ 需要把光标先移动到括号上")]),s._v(" "),e("p",[e("code",[s._v("*")]),s._v(" 和 "),e("code",[s._v("#")]),s._v(" 匹配光标当前所在的单词，移动光标到下一个（或者上一个）匹配的单词（ "),e("code",[s._v("*")]),s._v(" 是下一个，"),e("code",[s._v("#")]),s._v(" 是上一个）")]),s._v(" "),e("p",[e("strong",[s._v("翻页操作")])]),s._v(" "),e("p",[e("code",[s._v("ctrl+f")]),s._v(" 查看下一页内容")]),s._v(" "),e("p",[e("code",[s._v("ctrl+b")]),s._v(" 查看上一页内容")]),s._v(" "),e("h3",{attrs:{id:"vim-的复制-黏贴-删除"}},[e("strong",[s._v("VIM 的复制，黏贴 ，删除")])]),s._v(" "),e("p",[s._v("三个重要的快捷键 "),e("code",[s._v("d")]),s._v(" , "),e("code",[s._v("y")]),s._v(" , "),e("code",[s._v("p")])]),s._v(" "),e("p",[e("code",[s._v("d")]),s._v(" 是删除的意思，通常搭配一个字符 ( 删除范围 ) 实现删除功能，常用的如下：")]),s._v(" "),e("p",[e("code",[s._v("dw")]),s._v(" 删除一个单词")]),s._v(" "),e("p",[e("code",[s._v("dnw")]),s._v(" 删除 n 个单词，")]),s._v(" "),e("p",[e("code",[s._v("dfa")]),s._v(" 删除光标处到下一个 a 的字符处（ fa 定位光标到 a 处 ）")]),s._v(" "),e("p",[e("code",[s._v("dnfa")]),s._v(" 删除光标处到第 n 个 a 的字符处")]),s._v(" "),e("p",[e("code",[s._v("dd")]),s._v(" 删除一整行")]),s._v(" "),e("p",[e("code",[s._v("ndd")]),s._v(" 删除光标处开始的 n 行")]),s._v(" "),e("p",[e("code",[s._v("d$")]),s._v(" 删除光标到本行的结尾")]),s._v(" "),e("p",[e("code",[s._v("dH")]),s._v(" 删除屏幕显示的第一行文本到光标所在的行")]),s._v(" "),e("p",[e("code",[s._v("dG")]),s._v(" 删除光标所在行到文本的结束")]),s._v(" "),e("p",[e("code",[s._v("y")]),s._v(" 是复制的意思，通常搭配一个字符（复制范围）实现复制的功能，常用的如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yw` 复制一个单词，还有 `ynw\nyfa` 复制光标到下一个 a 的字符处,还有`ynfa\nyy` 复制一行，还有 `nyy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v("y$")]),s._v(" 复制光标到本号的结尾")]),s._v(" "),e("p",[e("code",[s._v("yH")]),s._v(" 复制屏幕显示的第一行文本到光标所在的行")]),s._v(" "),e("p",[e("code",[s._v("yG")]),s._v(" 复制光标所在行到文本的结束")]),s._v(" "),e("p",[e("code",[s._v("p")]),s._v(" ，"),e("code",[s._v("P")]),s._v("是黏贴的意思，当执行完复制或者黏贴的命令以后，VIM 会把文本寄存起来。")]),s._v(" "),e("p",[e("code",[s._v("p")]),s._v(" 在光标后开始黏贴")]),s._v(" "),e("p",[e("code",[s._v("P")]),s._v(" 大写的 P 光标前开始粘贴")]),s._v(" "),e("h3",{attrs:{id:"撤销操作和恢复"}},[e("strong",[s._v("撤销操作和恢复")])]),s._v(" "),e("p",[e("code",[s._v("u")]),s._v(" 撤销刚才的操作")]),s._v(" "),e("p",[e("code",[s._v("ctrl + r")]),s._v(" 恢复撤销操作")]),s._v(" "),e("h3",{attrs:{id:"删除字符操作和替换"}},[e("strong",[s._v("删除字符操作和替换")])]),s._v(" "),e("p",[e("code",[s._v("x")]),s._v(" 删除光标当前所在的字符")]),s._v(" "),e("p",[e("code",[s._v("r")]),s._v(" 替换掉光标当前所在的字符")]),s._v(" "),e("p",[e("code",[s._v("R")]),s._v(" 替换掉从光标开始以后的所有字符，除非 "),e("code",[s._v("<ESC >")]),s._v(" 退出，或者 "),e("code",[s._v("jj")]),s._v(" （代替 "),e("ESC",[s._v(" 上文有提到）退出。")])],1),s._v(" "),e("h3",{attrs:{id:"大小写转换"}},[e("strong",[s._v("大小写转换")])]),s._v(" "),e("p",[s._v("~ 将光标下的字母改变大小写\n3~ 将光标位置开始的3个字母改变其大小写\ng~~ 改变当前行字母的大小写\ngUU 将当前行的字母改成大写\nguu 将当前行的字母全改成小写")]),s._v(" "),e("p",[s._v("3gUU 将从光标开始到下面3行字母改成大写\ngUw 将光标下的单词改成大写。\nguw 将光标下的单词改成小写")]),s._v(" "),e("h3",{attrs:{id:"vim-的重复命令"}},[e("strong",[s._v("VIM 的重复命令")])]),s._v(" "),e("p",[s._v(". 该命令是重复上一个操作的命令\nn"),e("command",[s._v("重复某个命令 n 次，\n如 10p复制 10 次，10dd 删除十次。")])],1),s._v(" "),e("h2",{attrs:{id:"vim-可视化模式-visual-mode"}},[e("strong",[s._v("VIM 可视化模式（Visual-mode)")])]),s._v(" "),e("p",[s._v("v,V,Ctrl+v")]),s._v(" "),e("p",[s._v("v字符可视化，按下键盘上的v以后，屏幕底部应该会有一个 VISUAl 的提示，操作 h,j,k,l就选中文本，继续按 v 退出可视化模式。")]),s._v(" "),e("p",[s._v("V 行可视化，按下键盘上的 V 以后，屏幕底部应该有一个 VISUAL LINE 的提示，操作 j,k 可以向上或者向下以行为单位选中文本，继续按下 V 退出可视化模式。")]),s._v(" "),e("p",[s._v("Ctrl+v 块状可视化，按下键盘上的 Ctrl+v 以后，屏幕底部应该会有一个提示 VISUALBLOCK ，可以通过 h,j,k,l 块状的操作选择区域，这是很多编辑器都不可以做到的，继续按下 Ctrl+v 会退出可视化模式。")]),s._v(" "),e("h3",{attrs:{id:"可视化模式下操作文本"}},[e("strong",[s._v("可视化模式下操作文本")])]),s._v(" "),e("p",[s._v("可视化模式下选择操作区域以后，\n按下 d会删除选择的区域，\n按下 y 会复制选择的区域，按下 p 会黏贴选择的区域。")]),s._v(" "),e("h3",{attrs:{id:"可视化模式下-v-的特殊操作"}},[e("strong",[s._v("可视化模式下 v 的特殊操作")])]),s._v(" "),e("p",[s._v('当操作的文本光标在 “”，‘’ ，（），{} ，[（双引号，单引号，小括号，大括号，中括号）\n当中的时候,可以通过 va"选中 ”“ 内的所有内容包括双引号 ，vi" 选中 "" 内的所有内容，不包括 ""。va,vi 会快速选择区域，va 后面会紧跟一个区域结束标志，a 会选中结束符标志，i 就不会。例子如下：')]),s._v(" "),e("p",[s._v('"hello world [VI'),e("strong",[s._v("M")]),s._v(' is so strong],{we all can master vim skill}"')]),s._v(" "),e("p",[s._v("假设当前光标定位在上面的文本 M 处：\nva] 操作将会选中以下文本（加粗部分）：\n“hello world***[VIM is so strong]***,{we all can master vim skill}“\nvi] 操作将会选中如下的区域，没有包含 []：\n“hello world [*"),e("strong",[s._v("VIM is so strong*")]),s._v("],{we all can master vim skill}“")]),s._v(" "),e("h3",{attrs:{id:"块区域下的特殊操作"}},[e("strong",[s._v("块区域下的特殊操作")])]),s._v(" "),e("p",[s._v("Ctrl+v 选中块区域以后，按下大写的 I 或者 A 可以在区域的前面或者后面输入内容，按下 jj 或者 "),e("ESC",[s._v(",可以看到选中的区域前面或者后面会有输入的内容。")])],1),s._v(" "),e("p",[e("strong",[s._v("VIM 的代码提示功能")])]),s._v(" "),e("p",[s._v("在编辑模式下 ，快捷键 Ctrl+n 或者 Ctrl+p 会有代码提示功能，我们可以实现快速录入的效果。")]),s._v(" "),e("h2",{attrs:{id:"vim-的宏录制"}},[e("strong",[s._v("VIM 的宏录制")])]),s._v(" "),e("p",[s._v("假设需要操作的文本如下,需要将如下文本的每一行的行首插入入一个 tab 键。")]),s._v(" "),e("p",[s._v("hello\nhello world\nhello world , vim")]),s._v(" "),e("h3",{attrs:{id:"宏录制的录制操作"}},[e("strong",[s._v("宏录制的录制操作")])]),s._v(" "),e("p",[s._v("先将光标移动到第一行，在普通模式下按下 q 键（"),e("strong",[s._v("宏录制是 q 键启动的")]),s._v("),在按一个 a （字母随意）,表示该宏注册为 a ，按下 I 在行首插入一个 tab 键，按下jj或者 "),e("ESC",[s._v("退出编辑模式,按下 j 将光标移动到下一行行首，最后按下 q 键完成录制操作（"),e("strong",[s._v("宏录制是 q 键结束的")]),s._v("）。\n总结上面例子的操作流程：\nq → a → I → tab → jj → j → q\n上面的例子成功地把在行首插入 tab 的功能录制了下来，那么如何应用到其他行呢？")])],1),s._v(" "),e("h3",{attrs:{id:"宏录制的使用"}},[e("strong",[s._v("宏录制的使用")])]),s._v(" "),e("p",[s._v("上述的例子，在正常模式下，按 @a执行宏录制的一系列动作，将会在第二行执行插入 tab 。\n@@ 是对上一次宏使用的重复操作。n@a 就会执行 n 次一系列的动作。使用宏录制可以一次执行一系列的操作，可以针对一些重复度较高的操作进行宏录制。")]),s._v(" "),e("h2",{attrs:{id:"vimplug"}},[s._v("vimplug")]),s._v(" "),e("h3",{attrs:{id:"install-vimplug"}},[s._v("install vimplug")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fLo ~/.vim/autoload/plug.vim --create-dirs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n    \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"vim-snazzy"}},[s._v("vim-snazzy")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Plug "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'connorholyday/vim-snazzy'")]),s._v("  \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# after install, set ")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"install"}},[s._v("install")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(":PlugInstall\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"config"}},[s._v("config")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mapleader")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" g:SnazzyTransparent "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" g:lightline "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'colorscheme'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'snazzy'")]),s._v(",\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmap S :w"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CR"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nmap Q :q"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CR"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nmap R :source "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYVIMRC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CR"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" number\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cursorline\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" wrap\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" showcmd\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" wildmenu\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" hlsearch\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" incsearch\nnoremap "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LEADER"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CR"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :nohlsearch"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CR"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\ncall plug"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#begin()")]),s._v("\n\nPlug "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'connorholyday/vim-snazzy'")]),s._v("\n\ncall plug"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#end()")]),s._v("\n\ncolor snazzy\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);