import fs from 'fs'
let config = {
    app: {
        port: process.env.PORT || 8889,
        baseApi: '/api'
    },
    mongodb: {
        url: 'mongodb://localhost:27017/koa-blog'
    },
    jwt: {
        secret: 'me' //默认
    },
    mongodbSecret: { //mongodb用户和密码
        user: '',
        pass: ''
    },
    admin: { //后台初始化的用户名密码
        user: 'admin',
        pwd: 'password'
    },
    port: 8080,
    database: {
        DATABASE: 'node_koa_test',
        USERNAME: 'root',
        PASSWORD: "1123",
        PORT: 3306,
        HOST: 'localhost'
    },
    upload: {
        ACCESS_KEY: 'ARA9LIvdx3JFZyADmwohmEMyjVLmNSIjVxgpzIA4',
        SECRET_KEY: 'aK19LEtOfStwsvn501Pl_h_wTqkVFnbzxlI5FNU7'
    }
}
// 可在private.js定义自己私有的配置
// module.exports = {
//   mongodbSecret: {
//     user: '',
//     pass: ''
//   },
//   jwt: {
//     secret: 'xxx'
//   },
//   admin: {
//       user: '',
//       pwd: ''
//   }
// }
// if (fs.existsSync(__dirname + '/private.js')) {
//     console.log(111);
//     config = Object.assign(config, require('./private.js'));
// }
export default config;