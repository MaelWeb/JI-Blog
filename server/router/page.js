import router from 'koa-router';
import fs from 'fs';
import { pageVerify } from '../middleware/verify';

const Router = new router();

let _Page = Router
    .get('/', async(ctx, next) => {
        let result = await getArticles(ctx.request.query);
        await ctx.render('index', {
            session: ctx.session,
            posts: result.articles
        });
    })
    .get('admin', pageVerify, async(ctx, next) => {
        await ctx.render('admin', {
            title: '博客后台'
        });
    })
    .get('admin/*', pageVerify, async(ctx, next) => {

        await ctx.render('admin', {
            title: '博客后台'
        });
    });

// module.exports = _Page;
export default _Page;