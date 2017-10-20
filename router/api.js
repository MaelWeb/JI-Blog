import router from 'koa-router';
import { singUp } from '../server/controllers/user-info';

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
    .post('/singup', singUp)

// module.exports = _Api;
export default _Api;