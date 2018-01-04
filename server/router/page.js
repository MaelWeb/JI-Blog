import router from 'koa-router';
import fs from 'fs';
import { pageVerify } from '../middleware/verify';
import { getAllTags } from '../controllers/tags_ctr';
import { getAllPublishArticles, getArticle } from '../controllers/article_ctr';
import { getPhotoes } from '../controllers/photo_ctrl';
import { getComments } from '../controllers/comment_ctr';
import { getBanners } from '../controllers/banner_ctr';
import { getBooks } from '../controllers/book_ctr';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router';
import App from '../../web/page/blog/App';

const Router = new router();

let _Page = Router
    .get('/', async(ctx, next) => {
        ctx.query.category = 'DEFAULT';
        ctx.query.page = 'HOME';
        let tags = await getAllTags(ctx);
        let articleData = await getAllPublishArticles(ctx);
        let banners = await getBanners(ctx);

        let ServerData = {tags, curTagId: ctx.query.tag, ...articleData, banners};

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

        let articleData = await getArticle(ctx);
        let commentsData = await getComments(ctx);

        let ServerData = {
            article: articleData.article,
            comments: commentsData.comments
        }

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
    .get('travel', async(ctx, next) => {
        ctx.query.category = 'TRAVEL';
        let articleData = await getAllPublishArticles(ctx);
        const { articles, ...others } = articleData;
        let ServerData = {travels: articles, ...others};

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{...ServerData}}/>
            </StaticRouter>
        )

        await ctx.render('blog', {
            html,
            ServerData
        });
    })
    .get('books', async(ctx, next) => {
        let booksData = await getBooks(ctx);
        ctx.query.page = 'BOOK';
        let banners = await getBanners(ctx);
        let ServerData = { ...booksData, banner: banners[0]};

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{...ServerData}}/>
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