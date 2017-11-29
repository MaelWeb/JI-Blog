import User from '../models/user_model';
import md5 from "md5";
import jwt from 'jsonwebtoken';
import Config from '../config';

/**
 * 注册操作
 * @param   {obejct} ctx 上下文对象
 */

export async function singUp(ctx) {
    let formData = ctx.request.body;

    let existOne = await User.find({
        $or: [{
            username: formData.userName
        }, {
            email: formData.email
        }]
    }).exec();

    if (existOne.length == 0) {
        let newUser = new User({
            name: '',
            username: formData.userName,
            password: md5(formData.password).toUpperCase(),
            email: formData.email,
            avatar: '',
            createTime: new Date()
        });

        await newUser.save()
            .then(res => {
                ctx.body = {
                    code: 200,
                    message: '注册成功'
                };
            })
            .catch(err => {
                ctx.throw(500, err)
            });
    } else {
        ctx.body = {
            code: 501,
            message: '用户名或邮箱已注册'
        };
    }
}


/**
 * 登录操作
 * @param  {obejct} ctx 上下文对象
 */
export async function signIn(ctx) {
    let formData = ctx.request.body;

    let user = await User.findOne({
        username: formData.userName
    }).exec();

    if (user) {
        if (formData.password === user.password) {
            let exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
            const token = jwt.sign({
                uid: user._id,
                name: user.name,
                exp: exp
            }, Config.jwt.secret);

            ctx.cookies.set('access_token', token, {
                maxAge: 24 * 60 * 60 * 1000,
                expires: exp,
                httpOnly: false, // 是否只用于http请求中获取
                overwrite: false // 是否允许重写
            });

            ctx.cookies.set('uid', user.id, {
                maxAge: 24 * 60 * 60 * 1000,
                expires: exp,
                httpOnly: false, // 是否只用于http请求中获取
                overwrite: false // 是否允许重写
            });

            ctx.body = {
                code: 200,
                uid: user._id,
                name: user.name,
                token: token
            }
        } else {
            ctx.body = {
                code: 400,
                message: '密码错误'
            }
        }
    } else {
        ctx.body = {
            code: 404,
            message: '用户不存在'
        }
    }
}