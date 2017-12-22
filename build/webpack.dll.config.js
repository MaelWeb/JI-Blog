const path = require('path');
const webpack = require('webpack');
const outputPath = path.join(__dirname, '../dist/client/');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'axios', 'classnames', "moment", "react-router-dom"]
    },
    output: {
        path: outputPath,
        filename: 'lib/[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                DEBUG: false
            }
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|en-gb/),
        new webpack.DllPlugin({
            context: path.resolve(__dirname, "../"),
            path: path.resolve(__dirname, './[name]-manifest.json'),
            name: '[name]'
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
        })
    ]
}