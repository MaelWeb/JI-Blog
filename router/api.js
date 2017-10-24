import router from 'koa-router';
import { singUp, signIn } from '../server/controllers/user_info_ctr';
import { createNewArticle } from '../server/controllers/article_ctr';

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
    .get('/signout', (ctx) => {
        ctx.session = null;
        ctx.body = {
            code: 200,
            message: '登出成功'
        };
    })
    .post('/singup', singUp)
    .post('/signin', signIn)
    .post('/create/article', createNewArticle);

// module.exports = _Api;
export default _Api;