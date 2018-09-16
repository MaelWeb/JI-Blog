import router from 'koa-router';
import fs from 'fs';
import path from 'path';
import  htmlMinifier from 'html-minifier';
import { pageVerify } from '../middleware/verify';
import { getAllTags } from '../controllers/tags_ctr';
import { getAllPublishArticles, getArticle } from '../controllers/article_ctr';
import { getPhotoes } from '../controllers/photo_ctrl';
import { getComments } from '../controllers/comment_ctr';
import { getOneContent } from '../controllers/common_ctr';
import { getBanners } from '../controllers/banner_ctr';
import { getBooks } from '../controllers/book_ctr';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import App from '../../web/page/blog/App';
const stats = require('../../dist/server/react-loadable.json');

const Router = new router();

let getHtml = (ctx, serverData = {}) => {
    let modules = [];
    const html = ReactDOMServer.renderToString(
        <Loadable.Capture report={ moduleName => modules.push(moduleName) }>
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={serverData} />
            </StaticRouter>
        </Loadable.Capture>
    );
    let bundles = getBundles(stats, modules);

    return {
        html: html,
        bundles: bundles.filter(bundle => bundle.file.endsWith('.js'))
    }
};

let _Page = Router
    .get('/', async(ctx, next) => {
        ctx.query.category = 'DEFAULT';
        ctx.query.page = 'HOME';
        ctx.query.pageSize = 20;
        // let tags = await getAllTags(ctx);
        let articleData = await getAllPublishArticles(ctx);
        let banners = await getBanners(ctx);

        let ServerData = {curTagId: ctx.query.tag, ...articleData, banners};

        let htmlObj = getHtml(ctx, ServerData);

        await ctx.render('blog', {
            html: htmlMinifier.minify(htmlObj.html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '「JI · 记小栈」_游走在技术与艺术边缘地带的前端攻城狮',
            bundles: htmlObj.bundles
        });
    })
    .get('article/:id', async(ctx, next) => {

        if (!ctx.params.id) ctx.redirect('/');
        ctx.query.filter = "web";
        let articleData = await getArticle(ctx);
        let commentsData = await getComments(ctx);

        let ServerData = {
            article: articleData.article,
            commentsData
        }
        let htmlObj = getHtml(ctx, ServerData);

        await ctx.render('blog', {
            html: htmlMinifier.minify(htmlObj.html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: articleData.article.title,
            bundles: htmlObj.bundles
        });
    })
    .get('photoes', async(ctx, next) => {

        let ServerData = await getPhotoes(ctx);
        let htmlObj = getHtml(ctx, ServerData);

        await ctx.render('blog', {
            html: htmlMinifier.minify(htmlObj.html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '「图记 · 记小栈」_游走在技术与艺术边缘地带的前端攻城狮',
            bundles: htmlObj.bundles
        });
    })
    .get('about', async(ctx, next) => {

        let ServerData = {};
        let htmlObj = getHtml(ctx, ServerData);

        await ctx.render('blog', {
            html: htmlMinifier.minify(htmlObj.html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '「关于 · 记小栈」_游走在技术与艺术边缘地带的前端攻城狮',
            bundles: htmlObj.bundles
        });
    })
    .get('travel', async(ctx, next) => {
        ctx.query.category = 'TRAVEL';
        let articleData = await getAllPublishArticles(ctx);
        const { articles, ...others } = articleData;
        let ServerData = {travels: articles, ...others};

        let htmlObj = getHtml(ctx, ServerData);

        await ctx.render('blog', {
            html: htmlMinifier.minify(htmlObj.html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '「游记 · 记小栈」_游走在技术与艺术边缘地带的前端攻城狮',
            bundles: htmlObj.bundles
        });
    })
    .get('books', async(ctx, next) => {
        let booksData = await getBooks(ctx);
        ctx.query.page = 'BOOK';
        let banners = await getBanners(ctx);
        let ServerData = { ...booksData, banner: banners[0]};

        let htmlObj = getHtml(ctx, ServerData);

        await ctx.render('blog', {
            html: htmlMinifier.minify(htmlObj.html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '「阅记 · 记小栈」_游走在技术与艺术边缘地带的前端攻城狮',
            bundles: htmlObj.bundles
        });
    })
    .get('message', async(ctx, next) => {
        let messageBanners = await getOneContent(ctx);
        ctx.query = {
            articleid: "message666",
            size: 10
        };
        let commentsData = await getComments(ctx);
        let ServerData = { messageBanners, ...commentsData };

        let htmlObj = getHtml(ctx, ServerData);

        await ctx.render('blog', {
            html: htmlMinifier.minify(htmlObj.html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '「言记 · 记小栈」_游走在技术与艺术边缘地带的前端攻城狮',
            bundles: htmlObj.bundles
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