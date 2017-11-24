import router from 'koa-router';
import { apiVerify } from '../middleware/verify';
import { singUp, signIn } from '../controllers/user_ctr';
import { createArticle, getAllArticles, getArticle, deleteArticle, modifyArticle } from '../controllers/article_ctr';
import { getOneContent } from '../controllers/common_ctr';
import { createTag, getAllTags } from '../controllers/tags_ctr';
import { fileUpload } from '../controllers/qiniu_ctrl';
import { addPhoto, getPhotoes } from '../controllers/photo_ctrl';

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
    .get("/get/photoes", getPhotoes)
    .delete('/article/:id', apiVerify, deleteArticle)
    .post('/singup', singUp)
    .post('/signin', signIn)
    .post('/create/tag', apiVerify, createTag)
    .post('/create/article', apiVerify, createArticle)
    .post('/update/article/:id', apiVerify, modifyArticle)
    .post('/fileupload', apiVerify, fileUpload)
    .post('/add/photo', apiVerify, addPhoto);

// module.exports = _Api;
export default _Api;