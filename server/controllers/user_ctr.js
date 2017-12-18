import User from '../models/user_model';
import md5 from "md5";
import jwt from 'jsonwebtoken';
import RandomName from 'chinese-random-name';
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

    if ( (formData.email != 'mael.liang@live.com') && (formData.code != parseInt(+ new Date() / (60 * 60 * 1000) ) ) ) {
        return ctx.body = {
            code: 501,
            message: '邀请码错误'
        };
    }

    if (existOne.length == 0) {
        let newUser = new User({
            name: RandomName.generate(),
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
                uid: user.id,
                name: user.name
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

export async function getUserInfo(ctx) {
    let userId = ctx.cookies.get('uid');

    let result = {
        code: 200,
        message: '获取成功'
    };

    const userInfo = await User.findById(userId, {createTime: 0, username: 0, password: 0}).catch(err => {
        if (err.name === 'CastError') {
            result = {
                code: 400,
                message: "用户不存在或已删除"
            }
        } else {
            result = {
                code: 500,
                message: "服务器内部错误"
            }
        }
    });

    result.user = userInfo;
    ctx.body = result;
}

export async function updateUserInfo(ctx) {
    let userId = ctx.cookies.get('uid');
    const postData = ctx.request.body;

    let result = {
        code: 200,
        message: '更改成功'
    };

    const userInfo = await User.findByIdAndUpdate(userId, postData).catch(err => {
        if (err.name === 'CastError') {
            result = {
                code: 400,
                message: "用户不存在或已删除"
            }
        } else {
            result = {
                code: 500,
                message: "服务器内部错误"
            }
        }
    });

    ctx.body = result;
}