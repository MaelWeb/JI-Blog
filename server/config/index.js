import fs from 'fs'
let config = {
    port: process.env.PORT || 8080,
    mongodb: {
        url: 'mongodb://localhost:27017/koa-blog'
    },
    jwt: {
        secret: 'me' //默认
    },
    mongodbSOptions: { //mongodb用户和密码
        // user: '',
        // pass: '',
        useMongoClient: true
    },
    upload: {
        ACCESS_KEY: 'ARA9LIvdx3JFZyADmwohmEMyjVLmNSIjVxgpzIA4',
        SECRET_KEY: 'aK19LEtOfStwsvn501Pl_h_wTqkVFnbzxlI5FNU7'
    },
    InvitationCode: 123456
}
// 可在private.js定义自己私有的配置
// if (fs.existsSync(__dirname + '/private.js')) {
//     console.log(111);
//     config = Object.assign(config, require('./private.js'));
// }
export default config;