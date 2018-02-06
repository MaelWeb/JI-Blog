const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const Html = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const templateSrc = path.join(__dirname, '../web/page/');
const outputPath = path.join(__dirname, '../dist/client/');

module.exports = merge(baseWebpackConfig, {
    devtool: false,
    entry: {
        admin: '../web/page/admin/index.js',
        blog: '../web/page/blog/index.js'
    },
    output: {
        path: outputPath,
        publicPath: '//static.liayal.com/',
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: "js/[name].[chunkhash:8].js"
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
            chunks: ["admin"],
            title: '<%= title || "游走在技术与艺术边缘地带的前端攻城狮" %>',
        }),

        new Html({
            filename: 'blog.html',
            template: path.join(templateSrc, '/blog/index.html'),
            chunks: ["blog"],
            html: '<%- html %>',
            script: '<%- JSON.stringify(ServerData) %>',
            title: '<%= title || "游走在技术与艺术边缘地带的前端攻城狮" %>',
        }),

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
        }),

        new webpack.optimize.OccurrenceOrderPlugin(),
        new OptimizeCSSPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new BundleAnalyzerPlugin()
    ]
});