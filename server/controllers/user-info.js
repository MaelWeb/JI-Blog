import { validatorSignUp, getExistOne, createUser } from '../services/user-info';
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

    let validateResult = validatorSignUp(formData);

    if (validateResult.code == 500) {
        result = validateResult;
        ctx.body = result;
        return;
    }

    let existOne = await getExistOne(formData);
    console.log(existOne);

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

    let userResult = await createUser({
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