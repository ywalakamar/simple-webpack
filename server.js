import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();
const config = require('./webpack.config');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { publicPath: config.publicPath }));

app.listen(3000, () => {
  console.log('Server listening at port 3000!');
});
