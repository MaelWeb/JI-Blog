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
        ACCESS_KEY: 'ARA9LIvdx3JFZyADmwohmEMyjVLmNSIjVxgpzIA4',
        SECRET_KEY: 'aK19LEtOfStwsvn501Pl_h_wTqkVFnbzxlI5FNU7'
    },
    InvitationCode: "test",
    wechat: {
        host: 'https://qyapi.weixin.qq.com',
        corpId: 'ww7c62****4323d1',
        corpSecret: 'wP62rdpqLPkIJ*******mFL-5Wk1FTqlEpAkAQqShM'
    }
}
// 可在private.js定义自己私有的配置
// if (fs.existsSync(__dirname + '/private.js')) {
//     config = Object.assign(config, require('./private.js'));
// }
export default config;