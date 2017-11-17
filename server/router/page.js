import router from 'koa-router';
import fs from 'fs';
import { getArticles, getSingleArticle } from '../controllers/article_ctr';
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
    .get('articles', async(ctx, next) => {
        let result = await getArticles(ctx.request.query);
        await ctx.render('index', {
            session: ctx.session,
            posts: result.articles
        });
    })
    .get('article/:aid', async(ctx, next) => {
        let result = await getSingleArticles(ctx.params);
        await ctx.render('article', {
            session: ctx.session,
            post: result.article,
            comments: []
        });
    })
    .get('signup', async(ctx, next) => {
        await ctx.render('signup', {
            session: ctx.session
        });
    })
    .get('signin', async(ctx, next) => {
        await ctx.render('signin', {
            session: ctx.session
        });
    })
    .get('addarticle', async(ctx, next) => {
        await ctx.render('add_article', {
            session: ctx.session
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