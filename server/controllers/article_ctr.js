import * as ArticleService from '../services/article_service';
/**
 * 新增文章
 * @param   {obejct} ctx 上下文对象
 */
export async function createNewArticle(ctx) {
    let postBody = ctx.request.body;
    const userSession = ctx.session;

    let result = {
        code: 200,
        message: '创建成功'
    };
}