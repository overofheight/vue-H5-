// // const path = require('path');
// // const config = require('./webpack.base.config');

// // config.devServer = {
// //   historyApiFallback: true,
// //   contentBase: path.resolve(__dirname, '../dist'),
// //   host: '127.0.0.1',
// //   compress: true,
// //   port: 8080,
// //   open: true,
// // };

// // module.exports = config;

// // build/webpack.dev.js
// // 引入webpack
// const webpack = require('webpack');
// // 引入webpack通用配置
// const webpackCommonConfig = require('./webpack.base.config.js');
// // 引入配置合并插件
// const merge = require('webpack-merge');
// const open = require('opn'); //打开浏览器
// const chalk = require('chalk'); // 改变命令行中输出日志颜色插件

// module.exports = merge(webpackCommonConfig, {
//   // 指定模式，这儿有none production development三个参数可选
//   // 具体作用请查阅官方文档
//   mode: "development",
//   module: {
//   },
//   devtool: 'inline-source-map',
//     stats: 'errors-only',
//     devServer: {
//         port: 8080,
//         contentBase: '../dist',
//         host: '192.168.124.28',
//         overlay: true,
//         after() {
//             open('192.168.124.28:' + this.port)
//                 .then(() => {
//                     console.log(
//                         chalk.cyan(
//                             '成功打开链接： 192.168.124.28:' + this.port
//                         )
//                     );
//                 })
//                 .catch(err => {
//                     console.log(chalk.red(err));
//                 });
//         },
//     },
//   plugins: [
//     // 辅助HotModuleReplacementPlugin插件，给模块增加标识
//     // 生产环境可以用new webpack.HashedModuleIdsPlugin()
//     new webpack.NamedModulesPlugin(),
//     // 启用热更新必须的
//     new webpack.HotModuleReplacementPlugin(),
//   ],
//   // devServer: {
//   //   // 默认情况不设置这个只能通过localhost:9000来访问，现在可以通过本机局域网ip来访问，
//   //   // 比如192.168.12.21:9000，手机在这个局网内也可以访问
//   //   host: '0.0.0.0',
//   //   hot: true,
//   //   port: 9200,
//   //   contentBase: './dist'
//   // }
// });
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');
module.exports = merge(commonConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  // 开发环境本地启动的服务配置
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8080,
    hot: true,
    // hotOnly: false, hmr失效时是否刷新页面
    open: true
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-module-eval-source-map',
});