import router from 'koa-router';
import fs from 'fs';
const Router = new router();

let _Page = Router
    .get('/', async (ctx, next) => {
        await ctx.render('index', {});
    })
    .get('index', async (ctx, next) => {
        ctx.session = {
            user_id: Math.random().toString(36).substr(2),
            count: 0
        };

        await ctx.render('index', {});
    })
    .get('signup', async (ctx, next) => {
        await ctx.render('signup', {
            session: ctx.session
        });
    });

// module.exports = _Page;
export default _Page;