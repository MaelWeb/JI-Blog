import jwt from 'jsonwebtoken';
import config from '../config/';


export async function apiVerify(ctx, next) {
    const token = ctx.cookies.get('access_token');
    if (token === '') {
        ctx.throw(401, 'no token detected in http header \'Authorization\'');
    }
    let tokenContent;
    try {
        tokenContent = await jwt.verify(token, config.jwt.secret);
    } catch (err) {
        if ('TokenExpiredError' === err.name) {
            ctx.throw(401, 'token expired,请及时本地保存数据！');
        }
        ctx.throw(401, 'invalid token');
    }
    await next();
}

export async function pageVerify(ctx, next) {
    const token = ctx.cookies.get('access_token'),
        url = ctx.request.url,
        adminReg = /admin/g,
        loginReg = /admin\/login|admin\/registe/g;

    if (adminReg.test(url) && !loginReg.test(url)) {

        if (token === '') {
            ctx.redirect('/admin/login');
        }

        let tokenContent;
        try {
            tokenContent = await jwt.verify(token, config.jwt.secret);
        } catch (err) {
            ctx.redirect('/admin/login');
        }
    }

    await next();
}