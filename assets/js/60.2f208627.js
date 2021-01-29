(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{212:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"思维导图-索引篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思维导图-索引篇","aria-hidden":"true"}},[a._v("#")]),a._v(" 思维导图-索引篇")]),a._v(" "),e("blockquote",[e("p",[a._v("系列思维导图源文件（数据库+架构）以及思维导图制作软件—XMind8 破解安装，公众号后台回复："),e("strong",[a._v("“思维导图”")]),a._v(" 免费领取！（下面的图片不是很清楚，原图非常清晰，另外提供给大家源文件也是为了大家根据自己需要进行修改）")])]),a._v(" "),e("p",[e("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-2/70973487.jpg",alt:"【思维导图-索引篇】"}})]),a._v(" "),e("blockquote",[e("p",[e("strong",[a._v("下面是我补充的一些内容")])])]),a._v(" "),e("h1",{attrs:{id:"为什么索引能提高查询速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么索引能提高查询速度","aria-hidden":"true"}},[a._v("#")]),a._v(" 为什么索引能提高查询速度")]),a._v(" "),e("blockquote",[e("p",[a._v("以下内容整理自：\n地址： https://juejin.im/post/5b55b842f265da0f9e589e79\n作者 ：Java3y")])]),a._v(" "),e("h3",{attrs:{id:"先从-mysql-的基本存储结构说起"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先从-mysql-的基本存储结构说起","aria-hidden":"true"}},[a._v("#")]),a._v(" 先从 MySQL 的基本存储结构说起")]),a._v(" "),e("p",[a._v("MySQL的基本存储结构是页(记录都存在页里边)：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-2/28559421.jpg",alt:"MySQL的基本存储结构是页"}})]),a._v(" "),e("p",[e("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-2/82053134.jpg",alt:""}})]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("各个数据页可以组成一个双向链表")])]),a._v(" "),e("li",[e("strong",[a._v("每个数据页中的记录又可以组成一个单向链表")]),a._v(" "),e("ul",[e("li",[a._v("每个数据页都会为存储在它里边儿的记录生成一个页目录，在通过主键查找某条记录的时候可以在页目录中使用二分法快速定位到对应的槽，然后再遍历该槽对应分组中的记录即可快速找到指定的记录")]),a._v(" "),e("li",[a._v("以其他列(非主键)作为搜索条件：只能从最小记录开始依次遍历单链表中的每条记录。")])])])]),a._v(" "),e("p",[a._v("所以说，如果我们写select * from user where indexname = 'xxx'这样没有进行任何优化的sql语句，默认会这样做：")]),a._v(" "),e("ol",[e("li",[e("strong",[a._v("定位到记录所在的页:需要遍历双向链表，找到所在的页")])]),a._v(" "),e("li",[e("strong",[a._v("从所在的页内中查找相应的记录:由于不是根据主键查询，只能遍历所在页的单链表了")])])]),a._v(" "),e("p",[a._v("很明显，在数据量很大的情况下这样查找会很慢！这样的时间复杂度为O（n）。")]),a._v(" "),e("h3",{attrs:{id:"使用索引之后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用索引之后","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用索引之后")]),a._v(" "),e("p",[a._v("索引做了些什么可以让我们查询加快速度呢？其实就是将无序的数据变成有序(相对)：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-2/5373082.jpg",alt:""}})]),a._v(" "),e("p",[a._v("要找到id为8的记录简要步骤：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-2/89338047.jpg",alt:""}})]),a._v(" "),e("p",[a._v("很明显的是：没有用索引我们是需要遍历双向链表来定位对应的页，现在通过 "),e("strong",[a._v("“目录”")]),a._v(" 就可以很快地定位到对应的页上了！（二分查找，时间复杂度近似为O(logn)）")]),a._v(" "),e("p",[a._v("其实底层结构就是B+树，B+树作为树的一种实现，能够让我们很快地查找出对应的记录。")]),a._v(" "),e("h1",{attrs:{id:"关于索引其他重要的内容补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于索引其他重要的内容补充","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于索引其他重要的内容补充")]),a._v(" "),e("blockquote",[e("p",[a._v("以下内容整理自：《Java工程师修炼之道》")])]),a._v(" "),e("h3",{attrs:{id:"最左前缀原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最左前缀原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 最左前缀原则")]),a._v(" "),e("p",[a._v("MySQL中的索引可以以一定顺序引用多列，这种索引叫作联合索引。如User表的name和city加联合索引就是(name,city)o而最左前缀原则指的是，如果查询的时候查询条件精确匹配索引的左边连续一列或几列，则此列就可以被用到。如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("select * from user where name=xx and city=xx ; ／／可以命中索引\nselect * from user where name=xx ; // 可以命中索引\nselect * from user where city=xx; // 无法命中索引            \n")])])]),e("p",[a._v("这里需要注意的是，查询的时候如果两个条件都用上了，但是顺序不同，如 "),e("code",[a._v("city= xx and name ＝xx")]),a._v("，那么现在的查询引擎会自动优化为匹配联合索引的顺序，这样是能够命中索引的.")]),a._v(" "),e("p",[a._v("由于最左前缀原则，在创建联合索引时，索引字段的顺序需要考虑字段值去重之后的个数，较多的放前面。ORDERBY子句也遵循此规则。")]),a._v(" "),e("h3",{attrs:{id:"注意避免冗余索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意避免冗余索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 注意避免冗余索引")]),a._v(" "),e("p",[a._v("冗余索引指的是索引的功能相同，能够命中 就肯定能命中 ，那么 就是冗余索引如（name,city ）和（name ）这两个索引就是冗余索引，能够命中后者的查询肯定是能够命中前者的 在大多数情况下，都应该尽量扩展已有的索引而不是创建新索引。")]),a._v(" "),e("p",[a._v("MySQLS.7 版本后，可以通过查询 sys 库的 "),e("code",[a._v("schemal_r dundant_indexes")]),a._v(" 表来查看冗余索引")]),a._v(" "),e("h3",{attrs:{id:"mysql如何为表字段添加索引？？？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql如何为表字段添加索引？？？","aria-hidden":"true"}},[a._v("#")]),a._v(" Mysql如何为表字段添加索引？？？")]),a._v(" "),e("p",[a._v("1.添加PRIMARY KEY（主键索引）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTER TABLE `table_name` ADD PRIMARY KEY ( `column` ) \n")])])]),e("p",[a._v("2.添加UNIQUE(唯一索引)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTER TABLE `table_name` ADD UNIQUE ( `column` ) \n")])])]),e("p",[a._v("3.添加INDEX(普通索引)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTER TABLE `table_name` ADD INDEX index_name ( `column` )\n")])])]),e("p",[a._v("4.添加FULLTEXT(全文索引)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTER TABLE `table_name` ADD FULLTEXT ( `column`) \n")])])]),e("p",[a._v("5.添加多列索引")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTER TABLE `table_name` ADD INDEX index_name ( `column1`, `column2`, `column3` )\n")])])]),e("h1",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("ul",[e("li",[a._v("《Java工程师修炼之道》")]),a._v(" "),e("li",[a._v("《MySQL高性能书籍_第3版》")]),a._v(" "),e("li",[a._v("https://juejin.im/post/5b55b842f265da0f9e589e79")])])])}],!1,null,null,null);t.default=r.exports}}]);