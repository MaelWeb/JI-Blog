import { sqlQuery } from '../../lib/mysql';
import { INSERT_POST_DATA } from '../../lib/sql';

/**
 * 数据库创建文章
 * @param  {object} model 文章数据
 * @return {object} mysql执行结果
 */
export async function createNewArticle(model) {
    let result = await sqlQuery(INSERT_POST_DATA, [model.uid, model.userName, model.title, model.content, model.creatTime]);
    return result
};