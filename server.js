const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')

const app = express()
const compile = webpack(config)

app.use(webpackDevMiddleware(compile, {
  publicPath: '/'
}))

app.listen(3000, function () {
  console.log('服务开启了: http://localhost:3000')
})