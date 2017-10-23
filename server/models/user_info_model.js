import { sqlQuery } from '../../lib/mysql';
import { SELECT_USER_BY_NAME_OR_EMAIL, INSERT_USER_DATA } from '../../lib/sql';

/**
 * 查找一个存在用户的数据
 * @param  {object} user 用户数据
 * @return {object|null} 查找结果
 */

export async function getExistOne(user) {
    const SELECT_USER_BY_NAME_OR_EMAIL = `select * from users where name="${user.name}" or email="${user.email}"`;
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
 * @return {object} mysql执行结果
 */
export async function createUser(model) {
    let result = await sqlQuery(INSERT_USER_DATA, [model.name, model.password, model.email, model.create_time]);
    return result
};


/**
 * 根据用户名和密码查找用户
 * @param  {object} options 用户登录数据
 * @return {object} mysql执行结果
 */
export async function getUserByNameAndPassword(options) {
    const SELECT_USER_BY_NAME_AND_PASSWORD = `select * from users where password="${options.password}" and name="${options.name}"`;
    let result = await sqlQuery(SELECT_USER_BY_NAME_AND_PASSWORD);

    if (Array.isArray(result) && result.length > 0) {
        result = result[0]
    } else {
        result = null;
    }

    return result
};