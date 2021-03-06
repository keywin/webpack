const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  "entry": './src/index.js', // 要打包的文件
  "output": {
    // path: path.resolve('./dist'),
    "path": path.join(__dirname, './dist'), // 输出到文件夹,2+以后必须使用绝对路径
    "filename": 'outputIndex.js' // 输出文件名
  },
  "mode": 'development', // 开发环境, 仅打包不压缩
  // mode: 'production' // 默认, 线上, 打包+压缩
  "devServer": {
    "hot": true,
    "open": true,
    "port": 8091,
    "compress": true,
    // "contentBase": './src'
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "filename": 'index.html',
      "template": './src/index.html'
    })
  ]
}