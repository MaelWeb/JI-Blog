import router from 'koa-router';
import { apiVerify } from '../middleware/verify';
import { singUp, signIn } from '../controllers/user_ctr';
import { createArticle, getAllArticles, getArticle, deleteArticle, modifyArticle, getAllPublishArticles } from '../controllers/article_ctr';
import { getOneContent } from '../controllers/common_ctr';
import { createTag, getAllTags } from '../controllers/tags_ctr';
import { fileUpload } from '../controllers/qiniu_ctrl';
import { addPhoto, getPhotoes, updatePhoto } from '../controllers/photo_ctrl';
import { creactComment, getComments } from '../controllers/comment_ctr';

const Router = new router();

let _Api = Router.get('/signout', (ctx) => {
        ctx.session = null;
        ctx.body = {
            code: 200,
            message: '登出成功'
        };
    })
    .get("/get/alltags", getAllTags)
    .get("/get/all/articles", getAllArticles)
    .get("/get/publish/articles", getAllPublishArticles)
    .get('/get/comments', getComments)
    .get('/get/article/:id', getArticle)
    .get("/one", getOneContent)
    .get("/get/photoes", getPhotoes)
    .delete('/article/:id', apiVerify, deleteArticle)
    .post('/singup', singUp)
    .post('/signin', signIn)
    .post('/create/tag', apiVerify, createTag)
    .post('/create/article', apiVerify, createArticle)
    .post('/create/comment', creactComment)
    .post('/update/article/:id', apiVerify, modifyArticle)
    .post('/update/photo/:id', apiVerify, updatePhoto)
    .post('/fileupload', apiVerify, fileUpload)
    .post('/add/photo', apiVerify, addPhoto);

// module.exports = _Api;
export default _Api;