import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import koaStatic from 'koa-static';
import views from 'koa-views';
import path from 'path';

import _Config from './config';
import Router from './router';


const App = new koa();

const NODE_ENV = process.env.NODE_ENV;

// 开发环境启动webpack编译
if (NODE_ENV == 'development') {
    var webpack = require('webpack');
    var { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
    var devConfig = require('../build/webpack.dev.config');

    const compile = webpack(devConfig);
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
            colors: true,
            chunks: false,
        },
        debug: true,
        lazy: false,
        historyApiFallback: true
    }))

    App.use(hotMiddleware(compile, {
        // log: console.log,
        // path: '/__webpack_hmr',
        // heartbeat: 10 * 1000
    }))
}


mongoose.Promise = Promise;
mongoose.connect(_Config.mongodb.url, _Config.mongodbSOptions);
mongoose.connection.on('error', console.error);

// 配置服务端模板渲染引擎中间件
App.use(views(path.resolve(process.cwd(), './output/client'), {
    extension: 'html',
    map: { html: 'ejs' }
}))

// 配置静态资源加载中间件
App.use(koaStatic(
    path.resolve(process.cwd(), './output/')
));

// 使用ctx.body解析中间件
App.use(bodyParser());

// 路由
App.use(Router.routes())
    .use(Router.allowedMethods());


App.listen(_Config.port, () => {
    console.log(`\n[node-koa-blog] start-quick is starting at port ${_Config.port}`);
});