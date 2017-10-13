const router = require('koa-router');
const Router = new router();

const _Api = require('./api');
const _Page = require('./page');

Router.use('/api', _Api.routes(), _Api.allowedMethods());
Router.use(_Page.routes(), _Page.allowedMethods());


module.exports = Router;