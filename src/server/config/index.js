const path = require('path');
let config = {
    port: process.env.PORT || 8080,
    mongodb: {
        url: 'mongodb://root:j******@127.0.0.1:27017/blog'
    },
    jwt: {
        secret: 'MAELLIANG_BLOG' //默认
    },
    mongodbSOptions: { //mongodb用户和密码
        authSource: "admin",
        useMongoClient: true
    },
    upload: {
        ACCESS_KEY: 'v6NxwNQtq******@-YXv0Fo8qlFcVxnlYbO6',
        SECRET_KEY: 'b5p89rqZeO******@HtKEToE5PdSmQLRq'
    },
   geetest: {
        ID: "108814b3c******@d988bc76d12",
        KEY: "48b9103e******@6679ceabd6e08c"
    },
    InvitationCode: "1123",
    wechat: {
        host: 'https://api.weixin.qq.com',
        appId: 'wx05******@2033acc',
        secret: '0cf16******@3e1a6d0db04e6'
    }
}
// 可在private.js定义自己私有的配置
// if (fs.existsSync(__dirname + '/private.js')) {
//     config = Object.assign(config, require('./private.js'));
// }
module.exports = config;