import * as ArticleService from '../services/article_service';
import Moment from 'moment';
/**
 * 新增文章
 * @param   {obejct} ctx 上下文对象
 */
export async function createNewArticle(ctx) {
    let postBody = ctx.request.body;
    const userSession = ctx.session;

    let result = {
        code: 200,
        message: '发表成功'
    };

    let articleResule = await ArticleService.createArticle({
        uid: userSession.userId,
        userName: userSession.userName,
        title: postBody.title,
        content: postBody.content,
        creatTime: Moment().format('YYYY-MM-DD HH:mm')
    });


    if (!articleResule) {
        result.code = 500;
        result.message = '发表文章失败';
    }

    ctx.body = result;
}

/**
 * 获取文章
 * @param   {obejct} query
 */
export async function getArticles(query) {
    let requestQuery = query,
        articles = [];

    let result = {
        code: 200,
        articles: [],
        message: ''
    };

    if (requestQuery.author) {
        articles = await ArticleService.selectArticleByAuthor(decodeURIComponent(requestQuery.author));
        try{
            result.articles = JSON.parse(JSON.stringify(articles));
        } catch(err) {

        }
    } else {
        articles = await ArticleService.selectAllArticle();

        try{
            result.articles = JSON.parse(JSON.stringify(articles));
        } catch(err) {

        }
    }
    return result;
}

/**
 * 获取单篇文章
 * @param   {obejct} query
 */
export async function getSingleArticle(query) {
    let requestQuery = query;

    let result = {
        code: 200,
        article: {},
        comments: [],
        message: ''
    };

    let article = await ArticleService.selectArticleById(decodeURIComponent(requestQuery.aid));

    try{
        result.article = JSON.parse(JSON.stringify(article));

    } catch(err) {}

    return result;
}