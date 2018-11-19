import router from 'koa-router';
import fs from 'fs';
import htmlMinifier from 'html-minifier';
import ReactDOMServer from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router";
import { pageVerify } from "../middleware/verify";
import { getAllTags } from "../controllers/tags_ctr";
import { getAllPublishArticles, getArticle } from "../controllers/article_ctr";
import { getPhotoes } from "../controllers/photo_ctrl";
import { getComments } from "../controllers/comment_ctr";
import { getOneContent } from "../controllers/common_ctr";
import { getBanners } from "../controllers/banner_ctr";
import { getBooks } from "../controllers/book_ctr";
import App from '../../client/page/blog/App';

const Router = new router();

const _Page = Router
    .get('/', async (ctx, next) => {
        ctx.query.category = "DEFAULT";
        ctx.query.page = "HOME";
        ctx.query.pageSize = 10;

        const tagsPromise = getAllTags(ctx);
        const articlesPromise = getAllPublishArticles(ctx);
        const bannersPromise = getBanners(ctx);

        const tags = await tagsPromise;
        const articleData = await articlesPromise;
        const banners = await bannersPromise;

        const ServerData = {
            tags,
            curTagId: ctx.query.tag,
            ...articleData,
            banners,
        };

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={ServerData} />
        </StaticRouter>,
        );

        await ctx.render("blog", {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '游走在技术与艺术边缘地带的前端攻城狮 - 「JI · 记小栈」'
        });
    })
    .get("article/:id", async (ctx, next) => {
        if (!ctx.params.id) ctx.redirect("/");
        ctx.query.filter = "web";

        const articlePromise = getArticle(ctx);
        const commentsPromise = getComments(ctx);

        const articleData = await articlePromise;
        const commentsData = await commentsPromise;

        if (articleData.article.code === 400) {
            return ctx.redirect("/none");
        }

        const ServerData = {
            article: articleData.article,
            commentsData
        };

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{ ...ServerData }} />
            </StaticRouter>,
        );

        await ctx.render("blog", {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: articleData.article.title ?
                `${articleData.article.title}_「 JI · 记小栈」` : "当前文章不存在哦"
        });
    })
    .get('photoes', async (ctx, next) => {
        const ServerData = await getPhotoes(ctx);

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{ ...ServerData }} />
            </StaticRouter>
        );

        await ctx.render('blog', {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '图记  - 「JI · 记小栈」'
        });
    })
    .get('about', async (ctx, next) => {
        let ServerData = {};

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{ ...ServerData }} />
            </StaticRouter>
        );

        await ctx.render('blog', {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '关于  - 「JI · 记小栈」'
        });
    })
    .get('travel', async (ctx, next) => {
        ctx.query.category = 'TRAVEL';
        const articleData = await getAllPublishArticles(ctx);

        const { articles, ...others } = articleData;
        const ServerData = { travels: articles, ...others };

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{ ...ServerData }} />
            </StaticRouter>
        );

        await ctx.render('blog', {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '游记  - 「JI · 记小栈」'
        });
    })
    .get('books', async (ctx, next) => {
        ctx.query.page = 'BOOK';

        const booksPromise = getBooks(ctx);
        const bannersPromise = getBanners(ctx);

        const booksData = await booksPromise;
        const banners = await bannersPromise;
        const ServerData = { ...booksData, banner: banners[0] };

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{ ...ServerData }} />
            </StaticRouter>
        );

        await ctx.render('blog', {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '阅记  - 「JI · 记小栈」'
        });
    })
    .get('message', async (ctx, next) => {
        ctx.query = {
            articleid: 'message666',
            size: 10
        };

        const messageBannersPromise = getOneContent(ctx);
        const commentsPromise = getComments(ctx);

        const messageBanners = await messageBannersPromise;
        const commentsData = await commentsPromise;

        const ServerData = { messageBanners, ...commentsData };

        const html = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={ctx.req.url}>
                <App InitData={{ ...ServerData }} />
            </StaticRouter>
        );

        await ctx.render('blog', {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '言记  - 「JI · 记小栈」'
        });
    })
    .get('none', async (ctx, next) => {
        const ServerData = {};

        const html = '';

        await ctx.render('blog', {
            html: htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true
            }),
            ServerData,
            title: '404  - 「JI · 记小栈」'
        });
    })
    .get('admin', pageVerify, async (ctx, next) => {
        await ctx.render('admin', {
            title: '博客后台'
        });
    })
    .get('admin/*', pageVerify, async (ctx, next) => {
        await ctx.render('admin', {
            title: '博客后台'
        });
    });

// module.exports = _Page;
export default _Page;