const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sourcePath = path.join(__dirname, '../web');
const outputPath = path.join(__dirname, '../output/dist/');

module.exports = {
    context: sourcePath,
    entry: {
        admin: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            '../web/page/admin/index.js',
        ],
        blog: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            '../web/page/blog/index.js',
        ],
        vendor: ['react', 'react-dom', 'axios', 'classnames', 'antd']
    },
    output: {
        path: outputPath,
        publicPath: '/output/dist/',
        filename: 'js/[name].js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react-hmre', 'react'],
                    cacheDirectory: true
                }
            }, ],
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader']
            }),
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /.(gif|jpg|png)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192,
                        name: 'font/[name].[hash:8].[ext]'
                    }
                }

            ]
        }, {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: '$'
            }, {
                loader: 'expose-loader',
                options: 'Zepto'
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            'node_modules'
        ],
        alias: {
            Components: path.join(__dirname, '../web/components/')
        }
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity,
            filename: 'js/[name].js',
        })
    ]
};