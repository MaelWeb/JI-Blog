import router from 'koa-router';
import { singUp, signIn } from '../server/controllers/user_info_ctr';
import { createNewArticle, getArticles } from '../server/controllers/article_ctr';

const Router = new router();

let _Api = Router.get('/signout', (ctx) => {
        ctx.session = null;
        ctx.body = {
            code: 200,
            message: '登出成功'
        };
    })
    .get('/get/article', async (ctx) => {
        let result = await getArticles(ctx.request.query);

        ctx.body = result;
    })
    .post('/singup', singUp)
    .post('/signin', signIn)
    .post('/create/article', createNewArticle);

// module.exports = _Api;
export default _Api;