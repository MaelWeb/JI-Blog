import router from 'koa-router';
import { apiVerify } from '../middleware/verify';
import { singUp, signIn, getUserInfo, updateUserInfo } from '../controllers/user_ctr';
import { createArticle, getAllArticles, getArticle, deleteArticle, modifyArticle, getAllPublishArticles, publishArticle, notPublishArticle } from '../controllers/article_ctr';
import { getOneContent, pushToBaidu } from '../controllers/common_ctr';
import { createTag, getAllTags, updateTagCount } from '../controllers/tags_ctr';
import { fileUpload, articleImageUpload, deleteFile } from '../controllers/qiniu_ctrl';
import { addPhoto, getPhotoes, updatePhoto, deletePhoto } from '../controllers/photo_ctrl';
import { creactComment, getComments, showAndHideComent, deleteComment } from '../controllers/comment_ctr';
import { createBanner, getBanners, updateBanner, deleteBanner } from '../controllers/banner_ctr';
import { createBook, getBooks, updateBook, deleteBook } from '../controllers/book_ctr';

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
    .get("/get/userinfo", apiVerify, getUserInfo)
    .get('/get/banners', getBanners)
    .get('/get/books', getBooks)
    .delete('/article/:id', apiVerify, deleteArticle)
    .post('/singup', singUp)
    .post('/signin', signIn)
    .post('/update/userinfo', apiVerify, updateUserInfo)
    .post('/create/tag', apiVerify, createTag)
    .post('/update/tag/count', apiVerify, updateTagCount)
    .post('/create/article', apiVerify, createArticle)
    .post("/publish/article/:id", apiVerify, publishArticle)
    .post("/recall/article/:id", apiVerify, notPublishArticle)
    .post('/create/comment', creactComment)
    .post('/toggle/comment', apiVerify, showAndHideComent)
    .delete('/comment/:id', apiVerify, deleteComment)
    .post('/update/article/:id', apiVerify, modifyArticle)
    .post('/update/photo/:id', apiVerify, updatePhoto)
    .post('/fileupload', apiVerify, fileUpload)
    .post('/filedelete', apiVerify, deleteFile)
    .post('/article/image/upload', apiVerify, articleImageUpload)
    .post('/add/photo', apiVerify, addPhoto)
    .delete('/photo/:id', apiVerify, deletePhoto)
    .post('/create/banner', apiVerify, createBanner)
    .post('/update/banner/:id', apiVerify, updateBanner)
    .delete('/banner/:id', apiVerify, deleteBanner)
    .post('/create/book', apiVerify, createBook)
    .post('/update/book/:id', apiVerify, updateBook)
    .delete('/book/:id', apiVerify, deleteBook)
    .post('/push/baidu', pushToBaidu)

// module.exports = _Api;
export default _Api;