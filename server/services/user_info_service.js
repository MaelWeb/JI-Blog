import * as UserModel from '../models/user_info_model';
import validator from 'validator';
/**
 * 检验用户注册数据
 * @param  {object} userInfo 用户注册数据
 * @return {object} 校验结果
 */

export function validatorSignUp(userInfo) {
    let result = {
        code: 500,
        message: '',
    };
    if (/[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false) {
        result.message = '用户名格式为6-16位的小写字母，包括-、_';
        return result
    }
    if (!validator.isEmail(userInfo.email)) {
        result.message = '请输入正确的邮箱地址';
        return result;
    }
    if (!/[\w+]{6,16}/.test(userInfo.password)) {
        result.message = '密码长度应该为6-16';
        return result;
    }
    if (userInfo.password !== userInfo.confirmPassword) {
        result.message = '两次密码不一致';
        return result;
    }

    result.code = 200;

    return result
}


/**
 * 查找存在用户信息
 * @param  {object} formData 查找的表单数据
 * @return {object|null}  查找结果
 */
export async function getExistOne(formData) {
    let resultData = await UserModel.getExistOne({
        'email': formData.email,
        'name': formData.userName
    })
    return resultData
};

/**
 * 创建用户
 * @param  {object} user 用户信息
 * @return {object} 创建结果
 */
export async function createUser(user) {
    let result = await UserModel.createUser(user)
    return result;
}

/**
 * 登录业务操作
 * @param  {object} formData 登录表单信息
 * @return {object} 登录业务操作结果
 */
export async function signIn(formData) {
    let resultData = await UserModel.getUserByNameAndPassword({
        'password': formData.password,
        'name': formData.userName
    });

    return resultData
}