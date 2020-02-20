const path = require('path');

module.exports = {
  // 打包的模式,，默认的模式是 production，还有一种是 development 模式，该模式下生成的输出文件不会被压缩。
  mode: 'development',
  // 入口文件也就是要打包的文件
  entry: {
    main: './JS高级面试技巧/src/index.js',
  },
  // babel
  module: {
    rules: [
      {
        test: /\.js$/,
        // 第三方的代码没必要进行转换，其实那些代码已经做好了转换。
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            // 用到什么语法就转换什么语法，而不是所有的都进行转换
            useBuiltIns: 'usage'
          }]]
        }
      }
    ],
  },
  // 打包好文件的信息
  output: {
    filename: 'bundle.js',
    // 不能直接写相对路径，必须借助node中的path模块
    path: path.resolve(__dirname, 'dist'),
  }
};