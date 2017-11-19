import router from 'koa-router';
import { apiVerify } from '../middleware/verify';
import { singUp, signIn } from '../controllers/user_ctr';
import { createArticle, getAllArticles, getArticle } from '../controllers/article_ctr';
import { getOneContent } from '../controllers/common_ctr';
import { createTag, getAllTags } from '../controllers/tags_ctr';

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
    .get("/get/alltags", getAllTags)
    .get("/get/all/articles", getAllArticles)
    .get('/get/article/:id', getArticle)
    .get("/one", getOneContent)
    .post('/singup', singUp)
    .post('/signin', signIn)
    .post('/create/tag', apiVerify, createTag)
    .post('/create/article', apiVerify, createArticle);

// module.exports = _Api;
export default _Api;