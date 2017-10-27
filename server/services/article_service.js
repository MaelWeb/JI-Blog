import * as ArticleModel from '../models/article_model';
/**
 * 创建文章
 * @param  {object} article 文章信息
 * @return {object} 创建结果
 */
export async function createArticle(article) {
    let result = await ArticleModel.createNewArticle(article);

    return result;
}


/**
 * 通过作者查找文章
 * @param  {string} author 用户名
 * @return {array} 查找结果
 */
export async function selectArticleByAuthor(author) {
    let result = await ArticleModel.selectArticleByAuthor(author);

    return result;
}

/**
 * 通过id查找文章
 * @param  {string} id
 * @return {array} 查找结果
 */
export async function selectArticleById(id) {
    let result = await ArticleModel.selectArticleById(id);

    return result;
}

/**
 * 查找所有文章
 * @return {array} 查找结果
 */
export async function selectAllArticle() {
    let result = await ArticleModel.selectAllArticle();

    return result;
}