const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware & webpack.config.js config file as the base 
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// Serve files on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));