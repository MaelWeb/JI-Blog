# 「JI · 记小栈」

小记的个人博客项目，项目包括了博客前台和博客后台管理系统。线上地址[https://www.liayal.com](https://www.liayal.com)  

![](https://img.shields.io/badge/node-%3E%3D7.0.0-blue.svg) ![](https://img.shields.io/badge/mongodb-v3.4.10-blue.svg) ![](https://img.shields.io/badge/koa-v2.3.0-blue.svg) ![](https://img.shields.io/badge/antd-v3.1.3-blue.svg) ![](https://img.shields.io/badge/react-v16.0.0-blue.svg) ![](https://img.shields.io/badge/webpack-v3.8.1-blue.svg)
![](https://img.shields.io/travis/rust-lang/rust.svg) ![](https://img.shields.io/github/license/mashape/apistatus.svg)

<img src="http://p1jovxa55.bkt.clouddn.com/blog_screen.jpg" />


### 特性
- ES6 + 语法，通过 async, await 解决calkback
- 全站 React
- koa2 + mongodb 强力驱动
- 博客前台首屏SSR
- webpack打包后上传cdn
- 反复优化的webpack配置  
and so on ...

### 开发
项目后端使用了koa2，所以需要将系统的 **node** 升级到 7.0.0 版本，以及确保本地装有**mongodb**数据库。
- clone 项目到本地 
```code
git clone https://github.com/MaelWeb/JI-Blog.git  
```
- 安装依赖
```code
npm install 
```
-  构建 DLL 库(如果公用库没改变不需要重复构建)
```code
npm run build:dll
```
- 本地开发服务启动
```code
npm run dev:start
```
- 打包线上版本
```code
npm run build
```

### License
The MIT License.

Copyright (c) 2017 「JI · 记小栈」
