import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import koaStatic from 'koa-static';
import views from 'koa-views';
import path from 'path';
import webpack from 'webpack';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import devConfig from '../build/webpack.dev.config';
import BaseConfig from '../build/webpack.base.config.js';
import SourceMapSupport from 'source-map-support';

import _Config from './config';
import Router from './router';

// SourceMapSupport.install();

const App = new koa();
const compile = webpack(devConfig);

mongoose.Promise = Promise;
mongoose.connect(_Config.mongodb.url, _Config.mongodbSOptions);
mongoose.connection.on('error', console.error);

App.use(devMiddleware(compile, {
    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: BaseConfig.output.publicPath,

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
App.use(views(path.join(__dirname, '../output/views'), {
    extension: 'html',
    map: { html: 'ejs' }
}))

// 配置静态资源加载中间件
App.use(koaStatic(
    path.join(__dirname, '../output/')
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