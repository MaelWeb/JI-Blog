import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session-minimal';
import mySqlSession from 'koa-mysql-session';
import koaStatic from 'koa-static';
import views from 'koa-views';
import path from 'path';
import webpack from 'webpack';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import devConfig from './web/build/webpack.dev.config';

import _Config from './config';
import Router from './router';

const App = new koa();
const compile = webpack(devConfig);

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

App.use(devMiddleware(compile, {
    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: devConfig.output.publicPath,

    // options for formating the statistics
    stats: {
        colors: true
    }
}))

App.use(hotMiddleware(compile, {
    // log: console.log,
    // path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
}))

// 配置服务端模板渲染引擎中间件
App.use(views(path.join(__dirname, './views'), {
    extension: 'html',
    map: { html: 'ejs' }
}))

// 配置静态资源加载中间件
App.use(koaStatic(
    path.join(__dirname, './web/output/')
));

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