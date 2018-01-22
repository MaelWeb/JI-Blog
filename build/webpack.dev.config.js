var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.base.config');
var Html = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const outputPath = path.join(__dirname, '../dist/client/');
const templateSrc = path.join(__dirname, '../web/page/');

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    entry: {
        admin: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr',
            '../web/page/admin/index.js',
        ],
        blog: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr',
            '../web/page/blog/index.js',
        ]
    },
    output: {
        path: outputPath,
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: "js/[name].[chunkhash:8].js"
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new Html({
            filename: 'admin.html',
            template: path.join(templateSrc, '/admin/index.html'),
            alwaysWriteToDisk: true,
            title: '<%= title || "游走在技术与艺术边缘地带的前端攻城狮" %>',
            chunks: ["admin"],
        }),
        new Html({
            filename: 'blog.html',
            template: path.join(templateSrc, '/blog/index.html'),
            html: '<%- html %>',
            script: '<%- JSON.stringify(ServerData) %>',
            title: '<%= title || "游走在技术与艺术边缘地带的前端攻城狮" %>',
            alwaysWriteToDisk: true,
            chunks: ["blog"],
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackHarddiskPlugin()
    ]
})