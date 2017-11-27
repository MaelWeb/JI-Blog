import router from 'koa-router';
import fs from 'fs';
import { pageVerify } from '../middleware/verify';
import { getAllTags } from '../controllers/tags_ctr';
import { getAllArticles, getArticle } from '../controllers/article_ctr';
import { getPhotoes } from '../controllers/photo_ctrl';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router';
import App from '../../web/page/blog/App';

const Router = new router();

let _Page = Router
    .get('/', async(ctx, next) => {
        let tags = await getAllTags(ctx);
        let { articles, allPage} = await getAllArticles(ctx);

        let ServerData = {tags, articles, allPage, curTagId: ctx.query.tag};

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={ServerData} />
            </StaticRouter>
        )

        await ctx.render('blog', {
            html,
            ServerData
        });
    })
    .get('article/:id', async(ctx, next) => {

        if (!ctx.params.id) ctx.redirect('/');

        let ServerData = await getArticle(ctx);

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{...ServerData}} />
            </StaticRouter>
        )

        await ctx.render('blog', {
            html,
            ServerData
        });
    })
    .get('photoes', async(ctx, next) => {

        let ServerData = await getPhotoes(ctx);

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{...ServerData}} />
            </StaticRouter>
        )

        await ctx.render('blog', {
            html,
            ServerData
        });
    })
    .get('about', async(ctx, next) => {

        let ServerData = {};

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App />
            </StaticRouter>
        )

        await ctx.render('blog', {
            html,
            ServerData
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