const nodeExternals = require('webpack-node-externals');
const path = require('path');
const sourcePath = path.join(__dirname, '../server');
const outputPath = path.join(__dirname, '../output/server/');

module.exports = {
    context: sourcePath,
    entry: '../server/index.js',
    output: {
        path: outputPath,
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    externals: nodeExternals(),
    devtool: 'source-map'
};