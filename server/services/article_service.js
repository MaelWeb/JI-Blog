import * as ArticleModel from '../models/article_model';
/**
 * 创建文章
 * @param  {object} user 用户信息
 * @return {object} 创建结果
 */
export async function createArticle(article) {
    let result = await ArticleModel.createNewArticle(article)
    return result;
}