const path = require('path');
let config = {
    port: process.env.PORT || 8080,
    mongodb: {
        url: 'mongodb://root:********@127.0.0.1:27017/blog'
    },
    jwt: {
        secret: '******' //默认
    },
    mongodbSOptions: { //mongodb用户和密码
        authSource: "admin",
        useMongoClient: true
    },
    upload: {
        ACCESS_KEY: 'v6NxwNQ*********qlFcVxnlYbO6',
        SECRET_KEY: 'b5p89rqZ*********KEToE5PdSmQLRq'
    },
    geetest: {
        ID: "108814b3c9*********d988bc76d12",
        KEY: "48b9103ef*********79ceabd6e08c"
    },
    InvitationCode: "1123",
    wechat: {
        host: 'https://api.weixin.qq.com',
        appId: 'wx05c*********2033acc',
        secret: '0cf16dbd*********3a3e1a6d0db04e6'
    }
}
// 可在private.js定义自己私有的配置
// if (fs.existsSync(__dirname + '/private.js')) {
//     config = Object.assign(config, require('./private.js'));
// }
module.exports = config;