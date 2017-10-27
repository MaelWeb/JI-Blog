import { sqlQuery } from '../../lib/mysql';
import { INSERT_POST_DATA, SELECT_ALL_POST } from '../../lib/sql';

/**
 * 数据库创建文章
 * @param  {object} model 文章数据
 * @return {object} mysql执行结果
 */
export async function createNewArticle(model) {
    let result = await sqlQuery(INSERT_POST_DATA, [model.uid, model.userName, model.title, model.content, model.creatTime]);
    return result
};

/**
 * 通过作者查找文章
 * @param  {string} author 用户名
 * @return {array} 查找结果
 */
export async function selectArticleByAuthor(author) {
    const SELECT_ARTICLE_BY_AUTHOR = `select * from posts where name="${author}"`;
    let result = await sqlQuery(SELECT_ARTICLE_BY_AUTHOR);

    return result;
}


/**
 * 通过id查找文章
 * @param  {string} author 用户名
 * @return {array} 查找结果
 */
export async function selectArticleById(id) {
    const SELECT_ARTICLE_BY_ID = `select * from posts where id="${id}"`;
    let result = await sqlQuery(SELECT_ARTICLE_BY_ID);

    return result;
}


/**
 * 查找所有文章
 * @return {array} 查找结果
 */
export async function selectAllArticle() {
    let result = await sqlQuery(SELECT_ALL_POST);

    return result;
}