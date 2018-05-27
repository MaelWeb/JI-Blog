const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const outputPath = path.join(__dirname, '../dist/client/');


function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        // threadPool: happyThreadPool,
    });
}

module.exports = {
    mode: "production",
    entry: {
        react: ['react', 'react-dom', "react-router-dom"],
        common: ['axios', 'classnames', "moment"]
    },
    output: {
        path: outputPath,
        filename: 'lib/[name].dll.js',
        library: '[name]'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['happypack/loader?id=happy-babel-js']
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|en-gb/),
        new webpack.DllPlugin({
            context: path.resolve(__dirname, "../"),
            path: path.resolve(__dirname, './[name]-manifest.json'),
            name: '[name]'
        }),
        createHappyPlugin('happy-babel-js', [{
            loader: 'cache-loader',
            options: {
                cacheDirectory: path.resolve(__dirname, '.cache--happypack')
            }
        }, {
            loader: 'babel-loader',
            query: {
            }
        }]),
    ]
}