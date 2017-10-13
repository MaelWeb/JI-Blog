const router = require('koa-router');
const Router = new router();

let _Api = Router.get('/get/helloword', (ctx, next) => {
        // set cookie
        ctx.cookies.set('helloword', "{a: 1, b:1}", {
            expires: new Date('2017-10-19'),
            overwrite: false
        });

        let ctxQuery = ctx.query;
        ctx.body = {
            status: 200,
            message: '',
            data: {
                text: 'get hello word ok',
                ctxQuery
            }
        };
    })
    .post('/post/helloword', (ctx, next) => {
        let postData = ctx.request.body;
        ctx.body = postData;
    })

module.exports = _Api;