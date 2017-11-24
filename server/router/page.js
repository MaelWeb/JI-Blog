import router from 'koa-router';
import fs from 'fs';
import { pageVerify } from '../middleware/verify';
import { getAllTags } from '../controllers/tags_ctr';
import { getAllArticles, getArticle } from '../controllers/article_ctr';

const Router = new router();

let _Page = Router
    .get('/', async(ctx, next) => {
        let tags = await getAllTags(ctx);
        let { articles, allPage} = await getAllArticles(ctx);

        await ctx.render('articles', {
            tags,
            articles,
            allPage
        });
    })
    .get('article/:id', async(ctx, next) => {

        if (!ctx.params.id) ctx.redirect('/');

        let result = await getArticle(ctx);

        await ctx.render('article', {
           ...result
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