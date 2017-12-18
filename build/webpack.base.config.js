const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sourcePath = path.join(__dirname, '../web');
const nodeModules = path.resolve(__dirname, '../node_modules');

module.exports = {
    context: sourcePath,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: sourcePath,
            use: [{
                loader: 'babel-loader',
                options: {
                    // presets: ['react-hmre', 'react'],
                    cacheDirectory: true
                }
            }, ],
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.join(__dirname, './postcss.config.js')
                        }
                    }
                }]
            }),
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.join(__dirname, './postcss.config.js')
                        }
                    }
                }, 'less-loader']
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
        }],
        noParse: /node_modules\/(jquey|js-cookie\.js)/
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            nodeModules
        ],
        alias: {
            Components: path.join(__dirname, '../web/components/')
        },
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'js/[name].js' })
    ]
};