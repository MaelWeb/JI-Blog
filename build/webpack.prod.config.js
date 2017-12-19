var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.base.config');
var Html = require('html-webpack-plugin');
const templateSrc = path.join(__dirname, '../web/page/');
const outputPath = path.join(__dirname, '../output/client/');

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    entry: {
        admin: '../web/page/admin/index.js',
        blog: '../web/page/blog/index.js',
        vendor: ['react', 'react-dom', 'axios', 'classnames']
    },
    output: {
        path: outputPath,
        publicPath: '//p17bk7uk5.bkt.clouddn.com',
        filename: 'js/[name]_[chunkhash:8].js',
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                DEBUG: false
            }
        }),
        new Html({
            filename: 'admin.html',
            template: path.join(templateSrc, '/admin/index.html'),
            chunks: ["vendor", "admin"],
        }),
        new Html({
            filename: 'blog.html',
            template: path.join(templateSrc, '/blog/index.html'),
            chunks: ["vendor", "blog"],
            html: '<%- html %>',
            script: '<%- JSON.stringify(ServerData) %>',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        })
    ]
});