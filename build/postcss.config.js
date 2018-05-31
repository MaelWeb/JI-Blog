module.exports = {
    plugins: [
        // require('autoprefixer')({browsers:["last 2 versions", "ie 8", "ie 9", "> 1%"]}),
        require('css-mqpacker')(),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                },
                autoprefixer: {
                    browsers: ["last 2 versions", "ie 8", "ie 9", "> 1%"]
                }
            }]
        })
    ]
}