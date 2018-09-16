import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import koaStatic from 'koa-static';
import views from 'koa-views';
import path from 'path';
import compress from 'koa-compress';
import session from 'koa-session-minimal'

import _Config from './config';
import Router from './router';
import Loadable from 'react-loadable';

const App = new koa();

const NODE_ENV = process.env.NODE_ENV;

mongoose.Promise = Promise;
mongoose.connect(_Config.mongodb.url, _Config.mongodbSOptions);
mongoose.connection.on('error', console.error);

// 配置服务端模板渲染引擎中间件
App.use(views(path.resolve(process.cwd(), './dist/client'), {
    extension: 'html',
    map: { html: 'ejs' }
}))

// 配置静态资源加载中间件
App.use(koaStatic(
    path.resolve(process.cwd(), './dist/client/')
));

App.use(session());

// 使用ctx.body解析中间件
App.use(bodyParser());
App.use(compress());

// 路由
App.use(Router.routes())
    .use(Router.allowedMethods());

Loadable.preloadAll().then(() => {
    App.listen(_Config.port, () => {
        console.log(`\n[JI-Blog] start-quick is starting at port ${_Config.port}`);
    });
})