const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const Router = require('./router/index');

const App = new koa();

// 配置存储session信息的mysql
let store = new MysqlSession({
    user: 'root',
    password: 'abc123',
    database: 'koa_demo',
    host: '127.0.0.1',
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
    key: 'SESSION_ID',
    store: store,
    cookie: cookie
}))

// 使用ctx.body解析中间件
App.use(bodyParser());

// 路由
App.use(Router.routes())
    .use(Router.allowedMethods());

// 404
App.use(pageNotFound());

App.listen(8080, () => {
    console.log('\n[node-koa-test] start-quick is starting at port 8080');
});


function pageNotFound() {
    return async (ctx, next) => {
        let response = ctx.response;
        if (response.status == 404) {
            ctx.body = await render('404.html');
        }
    };
}