// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');// 定义html模板插件
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 拆分合并css插件
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清理目录插件
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// // 拷贝静态资源
// const copyWebpackPlugin = require('copy-webpack-plugin');

// // function resolve (dir) {
// //   return path.join(__dirname, '..', dir)
// // }
// // 使用happypack
// const HappyPack = require('happypack');
// const os = require('os');
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// // 显示进程的完成进度
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// // 设置进度字体颜色
// const chalk = require('chalk'); // 改变命令行中输出日志颜色插件
// //一个编译提示的webpack插件！
// const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

// var TransformModulesPlugin = require('webpack-transform-modules-plugin')

// const config = {
//   entry: {
//     main: path.resolve(__dirname, "../src/main.js")
//   },
//   output: {
//     path: path.resolve(__dirname, '../dist'), // 出口目录
//     // 打包后生成的js文件，带hash值来保证文件的唯一性
//     filename: "js/[name].[hash:4].js",
//     // 生成的chunk文件名
//     chunkFilename: "js/[name].[hash:4].js",
//     // 资源的引用路径（这个跟你打包上线的配置有关系）
//     publicPath: "/"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'postcss-loader',
//         ],
//       },
//       {
//         test: /\.less$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'less-loader',
//           'postcss-loader',
//         ],
//       },
//       {
//         test: /\.(eot|woff2?|ttf|svg)$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               name: 'iconfont/[name].[hash:7].[ext]',
//               limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
//               publicPath: '/',
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
//         use: [
//           {
//             loader: 'url-loader', //是指定使用的loader和loader的配置参数
//             options: {
//               limit: 500, //是把小于500B的文件打成Base64的格式，写入JS
//               name: 'img/[name].[hash:7].[ext]',
//               publicPath: '/',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(htm|html)$/i,
//         use: [
//           'html-withimg-loader',
//         ],
//       },
//       {
//         test: /\.vue$/,
//         use: [
//           {
//             loader: 'vue-loader',
//             options: {
//               compilerOptions: {
//                 preserveWhitespace: false
//               }
//             }
//           }
//         ]
//       },
//       // 处理js
//       {
//         test: /\.js$/,
//         //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
//         loader: 'happypack/loader?id=happyBabel',
//         //排除node_modules 目录下的文件
//         exclude: /node_modules/,
//     },
//     ],
//   },
//   plugins: [
//     // html模板打包
//     new HtmlWebpackPlugin({
//       minify: {
//         removeAttributeQuotes: true,
//       },
//       // filename: '../dist/index.html',
//       // template: './src/view/index.html',
//       // 指定模板
//       template: path.resolve(__dirname, '../public/index.html'),
//       // 输出的文件
//       filename: path.resolve(__dirname, '../dist/index.html'),
//       hash: true,
//       // favicon: './src/assets/img/favicon.ico',
//     }),
//     // css整合拆分
//     new MiniCssExtractPlugin({
//       filename: 'css/[name].[contenthash:7].css',
//       chunkFilename: 'css/[name].[contenthash:7].chunk.css'
//     }),
//     new HappyPack({
//       //用id来标识 happypack处理类文件
//       id: 'happyBabel',
//       //如何处理 用法和loader 的配置一样
//       loaders: [
//           {
//               loader: 'babel-loader?cacheDirectory=true',
//           },
//       ],
//       //共享进程池
//       threadPool: happyThreadPool,
//       //允许 HappyPack 输出日志
//       verbose: true,
//   }),
//   // 解决vender后面的hash每次都改变
//   new webpack.HashedModuleIdsPlugin(),
//     // 拷贝静态资源
//     new copyWebpackPlugin([{
//       from: path.resolve(__dirname, '../public'),
//       to: path.resolve(__dirname, '../dist'),
//       ignore: ['.*'],
//     }]),
//     new TransformModulesPlugin(),
//     // 显示进度插件
//     new ProgressBarPlugin({
//       format: chalk.green('Progressing') + '[:bar]' + chalk.green(':percent') + '(:elapsed seconds)',
//       clear: false
//     }),
//     // 友好的错误提示
//     new FriendlyErrorsPlugin(),
//     // 每次编译清理目录
//     new CleanWebpackPlugin(),
//     new VueLoaderPlugin(),
//   ],
//   resolve: {
//     extensions: ['.js', '.vue', '.json','.less'],
//     alias: {
//       'vue$': 'vue/dist/vue.runtime.esm.js',
//       '@': path.resolve(__dirname, '../src'),
//       'cube-ui': 'cube-ui/lib'
//     },
//   },
// };

// module.exports = config;

// https://gitee.com/mic_react_admin/MicReactAdmin.git
const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清理目录插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 识别某些类型的 webpack 错误并整理，以提供开发人员更好的体验。
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
// 用于根据模板或使用加载器生成 HTML 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 用于将单个文件或整个目录复制到构建目录
//  const CopyWebpackPlugin = require('copy-webpack-plugin');
//抽离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 将抽离出来的css文件进行压缩
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
// 插件时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
//为模块提供中间缓存
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
//构建进度的 Plugin
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const devMode = process.env.NODE_ENV === 'development'; // 是否是开发模式
const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'), // 出口目录
    // 打包后生成的js文件，带hash值来保证文件的唯一性
    filename: "js/[name].[hash:4].js",
    // 生成的chunk文件名
    chunkFilename: "js/[name].[hash:4].js",
    // 资源的引用路径（这个跟你打包上线的配置有关系）
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['thread-loader', 'cache-loader', 'babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader', //@import 解析路径
      //     'postcss-loader',
      //   ],
      // },
      // {
      //     test: /\.less$/,
      //     use: [
      //         'vue-style-loader',
      //         'css-loader',
      //         'postcss-loader',
      //         'less-loader',
      //     ],
      // }, {
      //     test: /\.scss$/,
      //     use: [
      //         'vue-style-loader',
      //         'css-loader',
      //         'postcss-loader',
      //         'sass-loader',
      //     ],
      // },
      // {
      //   test: /.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,    // 抽离css样式
      //     'css-loader',
      //     'postcss-loader',    // 浏览器前缀插件loader

      //   ]
      // },
      // {   // less-loader
      //   test: /.less$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //       options: {  // 配置

      //       }
      //     },
      //     'css-loader',
      //     'less-loader',  // 把less -> css
      //   ]
      // },
      // {
      //   test: /\.less$/,
      //   use: [{loader: MiniCssExtractPlugin.loader},'css-loader','less-loader'],
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, 'src')
      // },
      // {
      //   test: /\.less$/,
      //   use: [{loader: MiniCssExtractPlugin.loader},'style-loder', 'less-loader','postcss-loader'],
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, 'src')
      // },
      // {
      //   test: /\.sass$/,
      //   use: [{
      //     loader: MiniCssExtractPlugin.loader}, 'style-loder','sass-loader','postcss-loader'],
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, 'src')
      // },
      {
        test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2 * 1024,
              outputPath: 'images',
              esModule: false,
              name: '[name]_[hash:6].[ext]'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name]-[hash:5].[ext]'
            }
          }
        ]
      },
      {
        // 处理html，支持直接在html中使用img标签加载图片
        test: /\.(htm|html)$/,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
    ],
    noParse: /jquery|lodash/,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      hash: true //是否加上hash，默认是 false
    }),
    // 拷贝静态资源
    // new copyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../public'),
    //   to: path.resolve(__dirname, '../dist'),
    //   ignore: ['.*'],
    // }]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // moment ./locale
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new ProgressBarPlugin(),
    new HardSourceWebpackPlugin(),
    // 友好的错误提示
    new FriendlyErrorsPlugin(),
    // 每次编译清理目录
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src'),
      'cube-ui': 'cube-ui/lib'
    },
  },
  externals: {
    //jquery通过script引入之后，全局中即有了 jQuery 变量
    'jquery': 'jQuery'
  },
}
const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(config);