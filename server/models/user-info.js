import { sqlQuery } from '../../lib/mysql';
import { SELECT_USER_BY_NAME_OR_EMAIL, INSERT_USER_DATA } from '../../lib/sql';

/**
 * 查找一个存在用户的数据
 * @param  {string} name 用户名
 * @param  {string} email 邮箱
 * @return {object|null}        查找结果
 */

export async function getExistOne(name, email) {
    const SELECT_USER_BY_NAME_OR_EMAIL = `select * from users where name="${name}" or email="${email}"`;
    let result = await sqlQuery(SELECT_USER_BY_NAME_OR_EMAIL);

    if (Array.isArray(result) && result.length > 0) {
        result = result[0]
    } else {
        result = null;
    }
    return result;
};

/**
 * 数据库创建用户
 * @param  {object} model 用户数据模型
 * @return {object}       mysql执行结果
 */
export async function createUser(model) {
    let result = await sqlQuery(INSERT_USER_DATA, model);
    return result
};