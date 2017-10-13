const router = require('koa-router');
const Router = new router();
const fs = require('fs');

let _Page = Router
    .get('/', async (ctx, next) => {
        let html = await render('index.html');
        ctx.body = html;
    })
    .get('/index', async (ctx, next) => {
        let html = await render('index.html');

        ctx.session = {
            user_id: Math.random().toString(36).substr(2),
            count: 0
        };

        ctx.body = html;
    })

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
}
;

module.exports = _Page;