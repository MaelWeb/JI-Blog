const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const Html = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const templateSrc = path.join(__dirname, '../src/client/page/');
const outputPath = path.join(__dirname, '../dist/client/');
const UploadToQiniuWebpackPlugin = require('upload-to-qiniu-webpack-plugin');
const config = require('../src/server/config');

module.exports = merge(baseWebpackConfig, {
    devtool: false,
    mode: "production",
    entry: {
        admin: './client/page/admin/index.js',
        blog: './client/page/blog/index.js'
    },
    output: {
        path: outputPath,
        publicPath: '//static.liayal.com/',
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: "js/[name].[chunkhash:8].js"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                // 开启多线程
                parallel: true,
                uglifyOptions: {
                    compress: {
                        // 去除 console
                        drop_console: true,
                        // 去除部分影响性能代码，如：1/0
                        keep_infinity: true,
                    },
                    output: {
                        // 去除注释
                        comments: false,
                        // 紧凑输出
                        beautify: false
                    }
                }
            })
        ]
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
        new HtmlWebpackIncludeAssetsPlugin({
            files: '*.html',
            assets: [{ path: 'lib', glob: '*.dll.js', globPath: 'dist/client/lib/' }],
            append: false
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new UploadToQiniuWebpackPlugin({
            qiniuAccessKey: config.upload.ACCESS_KEY,
            qiniuSecretKey: config.upload.SECRET_KEY,
            qiniuBucket: 'hynal-static',
            qiniuZone: 'Zone_z0',
            uploadLogPath: __dirname
        }),
        // new BundleAnalyzerPlugin();
    ]
});