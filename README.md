# vue移动端模板

## 使用方法
```
npm install
npm run dev
or
npm run build
```
## 添加sourcetree 工具
## 项目结构
```
├─build                       webpack编译配置文件目录
│  ├─webpack.base.config.js   webpack基础配置文件
│  ├─webpack.dev.config.js    webpack开发配置文件
│  └─webpack.prod.config.js   webpack生产配置文件
├─dist                        build完成生成的目录
├─src                         前端代码目录
│  ├─assets                   静态资源目录
│  │  └─styles                公用样式目录
│  ├─components               公用组件目录
│  ├─framework                webpack入口目录
│  │  ├─App.vue               vue根组件
│  │  └─index.js              webpack主入口js，实例化vue
│  ├─layout                   布局页面文件夹
│  │  └─App.vue               布局文件
│  ├─pages                    vue页面目录
│  │  ├─home                  页面目录（示例）
│  │  │  ├─components         页面私有组件目录
│  │  │  └─index.vue          页面组件
│  │  └─login                 页面目录（示例）
│  │     ├─components         页面私有组件目录
│  │     └─index.vue          页面组件
│  ├─router                   路由目录
│  ├─services                 请求api方法目录
│  ├─store                    vuex目录
│  │  ├─modules               不同模块的store管理目录
│  │  │  ├─user.js            user模块的store（示例）
│  │  │  └─index.js           汇总导出不同模块的store
│  │  ├─getters.js            vuex的getters
│  │  └─index.js              实例化vuex文件
│  ├─tools                    公用方法，请求拦截器目录
│  │  ├─utils.js              公用方法目录
│  │  └─request.js            请求拦截器
│  ├─view                     index.html目录
│  │  └─index.html            html根
```
