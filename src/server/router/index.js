import router from 'koa-router';
import _Api from './api';
import _Page from './page';

const Router = new router();

Router.use('/api', _Api.routes(), _Api.allowedMethods());
Router.use('/', _Page.routes(), _Page.allowedMethods());

// module.exports = Router;
export default Router;
