const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const os = require('os');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const sourcePath = path.resolve(__dirname, '../src');
const nodeModules = path.resolve(__dirname, '../node_modules');

const isDev = !!(process.env.NODE_ENV != 'production');
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        // threadPool: happyThreadPool,
    });
}

module.exports = {
    context: sourcePath,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: nodeModules,
            include: sourcePath,
            use: ['happypack/loader?id=happy-babel-js'],
            // use: [{
            //     loader: 'babel-loader',
            //     options: {
            //         cacheDirectory: true,
            //         presets: ['react-hmre']
            //     }
            // }],
        }, {
            test: /\.css$/,
            exclude: nodeModules,
            use: isDev ? ['style-loader', 'happypack/loader?id=happy-css'] : ["style-loader", MiniCssExtractPlugin.loader, 'happypack/loader?id=happy-css']
        }, {
            test: /\.less$/,
            use: isDev ? ['style-loader', 'happypack/loader?id=happy-less'] : ["style-loader", MiniCssExtractPlugin.loader, 'happypack/loader?id=happy-less']
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
            // use: ['happypack/loader?id=happy-font']
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: 'font/[name].[hash:8].[ext]'
                }
            }]
        }],
        noParse: /node_modules\/(jquey|js\-cookie\.js)/
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            nodeModules
        ],
        alias: {
            Components: path.join(sourcePath, './client/components')
        }
    },
    externals: {
        jquery: "$",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "[name].css"
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, "../"),
            manifest: require('./react-manifest.json'),
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, "../"),
            manifest: require('./common-manifest.json'),
        }),
        createHappyPlugin('happy-babel-js', [{
            loader: 'cache-loader',
            options: {
                cacheDirectory: path.resolve(__dirname, '.cache--happypack')
            }
        }, {
            loader: 'babel-loader',
            query: {
                // cacheDirectory: isDev,
                presets: isDev ? ['react-hmre'] : []
            }
        }]),
        createHappyPlugin('happy-css', [{
            loader: 'css-loader',
            query: {
                minimize: false,
                importLoaders: 1
            }
        }, {
            loader: 'postcss-loader',
            query: {
                config: {
                    path: path.join(__dirname, './postcss.config.js')
                },
            }
        }]),
        createHappyPlugin('happy-less', [{
            loader: 'css-loader',
            query: {
                minimize: false,
                importLoaders: 2
            }
        }, {
            loader: 'postcss-loader',
            query: {
                config: {
                    path: path.join(__dirname, './postcss.config.js')
                },
            }
        }, {
            loader: 'less-loader',
            query: {}
        }]),
        // createHappyPlugin('happy-font', [{
        //     loader: "file-loader",
        //     query: {
        //         limit: 8192,
        //         name: 'font/[name].[hash:8].[ext]'
        //     }
        // }]),
        new ProgressBarPlugin({
            format: chalk.blue.bold("build  ") + chalk.cyan("[:bar]") + chalk.green.bold(':percent') + ' (' + chalk.magenta(":elapsed") + ' seconds) ',
            clear: false
        }),
        new LodashModuleReplacementPlugin(),
    ]
};