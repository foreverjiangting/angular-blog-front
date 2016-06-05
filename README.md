# 前端说明文档

> 本文档为 `everyone-java-blog` 前端部分说明文档，供内部开发人员阅读。
>
> 更新日志见：[CHANGELOG.md](https://github.com/xiaolongzuo/everyone-java-blog/blob/master/blog-front/README.md)

## 目录（index）

* [文档结构](#contents)
* [页面说明](#instruction)
    - [UI框架（Materialize）](#materialize)
    - [index.html](#indexhtml)
    - [article.html](#articlehtml)
* [前端开发参与说明](#develop)
    - [包管理](#bower)
    - [自动化构建](#gulp)


-----------------------------------------------------------------


## 文档结构（Contents）

* .tmp/                         【临时文件】
* bower_components/             【Bower 依赖】
* coverage/                     【代码覆盖率报告】
* e2e/                          【端对端测试】
* gulp/                         【gulp task】
* node_modules/                 【node 依赖】
* src/                          【源文件】
    - app/                      【预编译后的 CSS 文件，没啥卵用】
    - assets/                   【资源文件】
    - data-test/                【测试数据】
    - index.html                【首页】
* .bowerrc                      【Bower 配置文件】
* .editorconfig                 【编辑器统一配置文件】
* .eslintrc                     【ESLint 规则】
* .gitignore                    【gitignore 文件】
* .yo-rc.json                   【yeoman 配置文件】
* bower.json                    【Bower 配置文件】
* gulpfile.js                   【Gulp 配置文件】
* karma.conf.js                 【Karma 配置文件】
* package.json                  【npm 配置文件】
* README.md                     【项目说明】
* CHANGELOG.md                  【更新日志】
* LICENSE


-----------------------------------------------------------------


## 页面详细说明（Instruction）

### 框架（Materialize）

前端部分没有使用 `Bootstrap` 作 UI 框架，使用了和 `Bootstrap` 同类的 `Materialize` 。因为 `Bootstrap 3` 的组件在处理移动端响应式时候有缺陷，而且 UI 风格和咱们项目差别较大；而 `Bootstrap 4` 还在初期测试，所以没有采用。

`Materialize` 和 `Bootstrap` 使用方法基本一致。

> `Materialize` 官方网站：[http://materializecss.com/](http://materializecss.com/)

### index.html

> 首页 - 对应 技术/职场/生活 三个分类的页面

**头部样式和脚本引用，要保证 css、img、js、lib 四个目录间的相对路径和我这里的文件结构一致。**

* 移动端顶部左侧抽屉菜单
    - 放在 `ul.side-nav` 中的内容，会被折叠到左侧抽屉，默认不显示，点击左上角按钮显示；
* 桌面端左侧菜单
    - 内容还没确定，里面几个链接是随便写的；
    - 需要靠顶部排列的，就放在 `div.dropdown` 中；需要靠底部排列的，就放在 `div.nav-user` 中。
* 主体左侧大图部分
    - 图片以后可能会做成好几张可以替换或随机显示的，所以我把图片地址的样式写在了行内： `<div class="cover-img" style="background-image: url('img/recommended.jpg')"></div>` ；
* 主体右侧文章列表部分
    - 文章分类
        + 现在分为三类，当前分类的样式 控制 `<li>` 标签的 `class="active"` 就可以切换了；
    - ~~推荐文章 列表（`div.list-group-rank`）~~
        + ~~比下面的 常规列表 ，多了个~~
        > ~~`<div class="rank-ctg"> <span>最多阅读</span> </div>`~~
        + ~~其余部分一样~~
    - **推荐文章 列表 精简版** （`div.list-group-rank.simple`）
        + 新的简化的推荐文章列表，没有缩略图、作者信息、文章阅读量等信息；
    - 常规文章 列表（`div.list-group`）
        + 和上面结构基本一致


### article.html

> 文章页

* 沿用首页的左侧导航；
* 比首页多了个 `js/go_to_top.js` 脚本引用。


-----------------------------------------------------------------


## 前端开发参与说明（Develop）

*开发过程中使用的包依赖管理工具 `Bower` 和自动化构建工具 `Gulp` 依赖于 `NodeJS` 。*


### 包管理（Bower）

本项目前端部分使用 `Bower` 进行外部的包和依赖的管理。

> `Bower` 官方网站：[http://bower.io/](http://bower.io/)
>
> `Bower` 使用教程：[Bower——前端开发包管理工具](http://www.tuicool.com/articles/v2a2yq)

安装完成后，在命令行中进入项目目录，执行 `bower install --save-dev` ，下载相关资源。


### 自动化构建（Gulp）

本项目前端部分使用 `Gulp` 进行外部的包和依赖的管理。

> `Gulp` 官方网站：[http://gulpjs.com/](http://gulpjs.com/)

安装完成后，在命令行中进入项目目录，执行 `npm install` ，下载 `Gulp` 及相关插件。

本项目自动构建的内容包括：

* 创建本地服务器： [http://localhost:3000/](http://localhost:3000/)
* 监听项目文件修改（src 文件夹），文件修改后，浏览器自动重载资源；
* 自动注入 bower_components 文件夹和 src 文件夹下的 css 和 js 文件；
* 保存 `LESS` 文件后，自动执行预编译生成 `CSS` 文件到 `.tmp/serve/app/index.css` ；
* 打包项目生产内容到 `dist` 目录。

克隆本项目后，需执行 `npm install && bower install` 命令安装依赖。
安装完成后，在命令行中进入项目目录，执行 `gulp serve` ，即可开始执行上述构建工作。


### 常用 Gulp Task

* `gulp serve` : 启动服务器。
* `gulp build` : 生成 APP，存储在 dist 文件夹。
* `gulp inject` : 文件注入，自动添加 bower_components 和 src 中的源文件。
* `gulp test` : 使用 Karma 进行单元测试。
* `gulp protractor ` : 使用 Protractor 进行端对端测试。

