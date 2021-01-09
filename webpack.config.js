const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
       index: './src/index.js',
       print: './src/print.js'
    },
    devtool: 'inline-source-map', // locates the file where an error has occurred 
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // prevents the deletion of index.html (as a result of another build)
        new HtmlWebpackPlugin({ title: "Learning Webpack" })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}