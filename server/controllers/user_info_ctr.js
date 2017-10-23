import * as UserService from '../services/user_info_service';
/**
 * 注册操作
 * @param   {obejct} ctx 上下文对象
 */

export async function singUp(ctx) {
    let formData = ctx.request.body;
    let result = {
        code: 500,
        message: '',
        data: null
    };

    let validateResult = UserService.validatorSignUp(formData);

    if (validateResult.code == 500) {
        result = validateResult;
        ctx.body = result;
        return;
    }

    let existOne = await UserService.getExistOne(formData);

    if (existOne) {
        if (existOne) {
            if (existOne.name === formData.userName) {
                result.message = '用户名已被注册';
                ctx.body = result;
                return
            }
            if (existOne.email === formData.email) {
                result.message = '邮箱已被注册';
                ctx.body = result
                return
            }
        }
    }
    let userResult = await UserService.createUser({
        email: formData.email,
        password: formData.password,
        name: formData.userName,
        create_time: new Date().getTime(),
        level: 1,
    });

    if (userResult && userResult.insertId * 1 > 0) {
        result.code = 200;
    } else {
        result.message = '系统错误';
    }

    ctx.body = result;
}

/**
 * 登录操作
 * @param  {obejct} ctx 上下文对象
 */
export async function signIn(ctx) {
    let formData = ctx.request.body
    let result = {
        message: '登录成功',
        data: null,
        code: 200
    }

    let userResult = await UserService.signIn(formData);

    if (userResult) {
        if (formData.userName === userResult.name) {
            result.code = 200
        } else {
            result.message = '用户名或登录密码错误';
            result.code = 5001;
        }
    } else {
        result.code = 5004;
        result.message = '用户不存在';
    }

    result.data = {
        userName: userResult.name,
        userId: userResult.id
    };

    let session = ctx.session;
    session.isLogin = true;
    session.userName = userResult.name;
    session.userId = userResult.id;


    if (formData.source === 'form' && result.code === 200) {
        ctx.redirect('/index');
    } else {
        ctx.body = result
    }
};