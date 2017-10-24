import router from 'koa-router';
import fs from 'fs';
const Router = new router();

let _Page = Router
    .get('/', async (ctx, next) => {
        // await ctx.render('index', {
        //     session: ctx.session
        // });
        ctx.redirect('/index');
    })
    .get('index', async (ctx, next) => {
        await ctx.render('index', {
            session: ctx.session
        });
    })
    .get('signup', async (ctx, next) => {
        await ctx.render('signup', {
            session: ctx.session
        });
    })
    .get('signin', async (ctx, next) => {
        await ctx.render('signin', {
            session: ctx.session
        });
    })
    .get('addarticle', async (ctx, next) => {
        await ctx.render('add_article', {
            session: ctx.session
        });
    });

// module.exports = _Page;
export default _Page;