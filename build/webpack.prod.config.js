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
    mode: "production",
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

        new Html({
            filename: 'admin.html',
            template: path.join(templateSrc, '/admin/index.html'),
            chunks: ["admin"],
            title: '<%= title || "游走在技术与艺术边缘地带的前端攻城狮" %>',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        new Html({
            filename: 'blog.html',
            template: path.join(templateSrc, '/blog/index.html'),
            chunks: ["blog"],
            html: '<%- html %>',
            script: '<%- JSON.stringify(ServerData) %>',
            title: '<%= title || "游走在技术与艺术边缘地带的前端攻城狮" %>',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        // new OptimizeCSSPlugin({
        //     cssProcessorOptions: {
        //         discardComments: {
        //             removeAll: true
        //         }
        //     },
        //     canPrint: true
        // }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new BundleAnalyzerPlugin()
    ]
});