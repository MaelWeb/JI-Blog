const koa = require('koa');
const fs = require('fs');
const router = require('koa-router');

const App = new koa();
const Router = new router();

Router
    .get('/', async (ctx, next) => {
        let html = await render( 'index.html' );
        ctx.body = html;
    })
    .get('/index', async (ctx, next) => {
        let html = await render( 'index.html' );
        ctx.body = html;
    })


App.use(Router.routes())
    .use(Router.allowedMethods());

App.use(pageNotFound());

App.listen(8080, ()=> {
    console.log('\n[node-koa-test] start-quick is starting at port 8080');
});


function render(page) {
    return new Promise((resolve, reject) => {
        let viewUrl = `./view/${page}`
        fs.readFile(viewUrl, "binary", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
};

function pageNotFound() {
    return async (ctx, next) => {
        let response = ctx.response;
        if (response.status == 404) {
            ctx.body = await render('404.html');
        }
    };
}