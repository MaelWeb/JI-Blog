const path = require('path');
let config = {
    port: process.env.PORT || 8080,
    mongodb: {
        url: 'mongodb://root:mael147863@127.0.0.1:27017/blog'
    },
    jwt: {
        secret: 'MAELLIANG_BLOG' //默认
    },
    mongodbSOptions: { //mongodb用户和密码
        authSource: "admin",
        useMongoClient: true
    },
    upload: {
        ACCESS_KEY: 'v6NxwNQtqVpK0Z51X0iq-YXv0Fo8qlFcVxnlYbO6',
        SECRET_KEY: 'b5p89rqZeO8KJEjEvOp3Pk2fHtKEToE5PdSmQLRq'
    },
    InvitationCode: "5620",
    wechat: {
        host: 'https://api.weixin.qq.com',
        appId: 'wx05c5964f92033acc',
        secret: '0cf16dbd475ac26d03a3e1a6d0db04e6'
    }
}
// 可在private.js定义自己私有的配置
// if (fs.existsSync(__dirname + '/private.js')) {
//     config = Object.assign(config, require('./private.js'));
// }
module.exports = config;