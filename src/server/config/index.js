const path = require('path');
let config = {
    port: process.env.PORT || 8080,
    mongodb: {
        url: 'mongodb://root:8888888@127.0.0.1:27017/blog'
    },
    jwt: {
        secret: '88888' //默认
    },
    mongodbSOptions: { //mongodb用户和密码
        authSource: "admin",
        useMongoClient: true
    },
    upload: {
        ACCESS_KEY: '999999',
        SECRET_KEY: '9999999'
    },
   geetest: {
        ID: "999",
        KEY: "9999"
    },
    InvitationCode: "iiiiii",
    wechat: {
        host: 'https://api.weixin.qq.com',
        appId: '000',
        secret: '99999'
    }
}
// 可在private.js定义自己私有的配置
// if (fs.existsSync(__dirname + '/private.js')) {
//     config = Object.assign(config, require('./private.js'));
// }
module.exports = config;