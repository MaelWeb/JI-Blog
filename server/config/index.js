import fs from 'fs'
let config = {
    port: process.env.PORT || 8080,
    mongodb: {
        url: 'mongodb://root:root@127.0.0.1:27017/koa-blog'
    },
    jwt: {
        secret: 'test' //默认
    },
    mongodbSOptions: { //mongodb用户和密码
        authSource: "admin",
        useMongoClient: true
    },
    upload: {
        ACCESS_KEY: 'ARA9LIvdx3JFZyA*****hmEMyjVLmNSIjVxgpzIA4',
        SECRET_KEY: 'aK19LEtOfStwsvn*****h_wTqkVFnbzxlI5FNU7'
    },
    InvitationCode: "1111",
    wechat: {
        host: 'https://api.weixin.qq.com',
        appId: 'wx05c59****92033acc',
        secret: '0cf16dbd*****26d03a3e1a6d0db04e6'
    }
}
// 可在private.js定义自己私有的配置
// if (fs.existsSync(__dirname + '/private.js')) {
//     config = Object.assign(config, require('./private.js'));
// }
export default config;