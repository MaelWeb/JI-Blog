const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const mySqlSession = require('koa-mysql-session');
const koaStatic = require('koa-static');
const views = require('koa-views');
const path = require('path');

import _Config from './config';
import Router from './router';

const App = new koa();

// 配置存储session信息的mysql
let store = new mySqlSession({
    user: _Config.database.USERNAME,
    password: _Config.database.PASSWORD,
    database: _Config.database.DATABASE,
    host: _Config.database.HOST,
});

// 存放sessionId的cookie配置
let cookie = {
    maxAge: '', // cookie有效时长
    expires: '', // cookie失效时间
    path: '', // 写cookie所在的路径
    domain: '', // 写cookie所在的域名
    httpOnly: '', // 是否只用于http请求中获取
    overwrite: '', // 是否允许重写
    secure: '',
    sameSite: '',
    signed: '',

};

// 使用session中间件
App.use(session({
    key: 'USER_SID',
    store: store,
}));

// 配置静态资源加载中间件
App.use(koaStatic(
    path.join(__dirname, './public')
));

// 配置服务端模板渲染引擎中间件
App.use(views(path.join(__dirname, './views'), {
    extension: 'html',
    map: {html: 'ejs'}
}))

// 使用ctx.body解析中间件
App.use(bodyParser());

// 路由
App.use(Router.routes())
    .use(Router.allowedMethods());

// 404
App.use(pageNotFound());

App.listen(_Config.port, () => {
    console.log('\n[node-koa-test] start-quick is starting at port 8080');
});


function pageNotFound() {
    return async (ctx, next) => {
        let response = ctx.response;
        if (response.status == 404) {
            ctx.render('404');
        }
    };
}