const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 定义html模板插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 拆分合并css插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清理目录插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 拷贝静态资源
const copyWebpackPlugin = require('copy-webpack-plugin');

// function resolve (dir) {
//   return path.join(__dirname, '..', dir)
// }
// 使用happypack
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const config = {
  entry: {
    main: path.resolve(__dirname, "../src/main.js")
  },
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'iconfont/[name].[hash:7].[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: '/',
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
        use: [
          {
            loader: 'url-loader', //是指定使用的loader和loader的配置参数
            options: {
              limit: 500, //是把小于500B的文件打成Base64的格式，写入JS
              name: 'img/[name].[hash:7].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.(htm|html)$/i,
        use: [
          'html-withimg-loader',
        ],
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
      // 处理js
      {
        test: /\.js$/,
        //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
        loader: 'happypack/loader?id=happyBabel',
        //排除node_modules 目录下的文件
        exclude: /node_modules/,
    },
    ],
  },
  plugins: [
    // html模板打包
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: true,
      },
      // filename: '../dist/index.html',
      // template: './src/view/index.html',
      // 指定模板
      template: path.resolve(__dirname, '../public/index.html'),
      // 输出的文件
      filename: path.resolve(__dirname, '../dist/index.html'),
      hash: true,
      // favicon: './src/assets/img/favicon.ico',
    }),
    // css整合拆分
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:7].css',
      chunkFilename: 'css/[name].[contenthash:7].chunk.css'
    }),
    new HappyPack({
      //用id来标识 happypack处理类文件
      id: 'happyBabel',
      //如何处理 用法和loader 的配置一样
      loaders: [
          {
              loader: 'babel-loader?cacheDirectory=true',
          },
      ],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
  }),
  // 解决vender后面的hash每次都改变
  new webpack.HashedModuleIdsPlugin(),
    // 拷贝静态资源
    new copyWebpackPlugin([{
      from: path.resolve(__dirname, '../public'),
      to: path.resolve(__dirname, '../dist'),
      ignore: ['.*'],
    }]),
    // 每次编译清理目录
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json','.less'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src'),
    },
  },
};

module.exports = config;
