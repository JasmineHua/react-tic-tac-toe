var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //插件项
    plugins: [new HtmlWebpackPlugin({
        title: 'tic-tac-toe',
        filename: '../index.html',
        template: 'src/template/index.html'
    })],
    //页面入口文件配置
    entry: {
        index : './src/app.js'
    },
    //入口文件输出配置
    output: {
        path: 'static',
        filename: 'app.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            { test: /\.less$/, loader: 'style!css!less'}
        ]
    },
};
