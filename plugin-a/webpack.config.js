var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: './index',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        chunkFilename: '[id].js',
        publicPath: '/plugins/test/',
        libraryTarget: 'jsonp',
        library: 'test',
        jsonpCallback: 'webpackJsonptest'
    },
    plugins: [
        new webpack.BannerPlugin('testplugin')
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
