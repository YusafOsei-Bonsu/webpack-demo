const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map', // locates the file where an error has occurred 
    devServer: {
        contentBase: './dist' // telling webpack-dev-server to serve files in '/dist' directory
    },
    plugins: [
        new HtmlWebpackPlugin({ title: "Learning Webpack" })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/' // Ensures files are served on http://localhost:3000
    }
}