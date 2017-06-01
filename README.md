﻿# wangxinlicai-demo

vue构建的webapp单页应用

技术选型: 
vue vue-router vuex 
z-scroll (因为页面要阻止默认事件， 采用采用此框架设置滚动)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 项目目录说明
```
.
|-- build                            // 构建脚本配置以及服务文件
|   |-- webpack.base.conf.js         // 项目打包部署配置
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- back.vue                 // 返回按钮
|       |-- bar.vue                  // 顶部bar
|       |-- content.vue              // 内容组件   
|       |-- header.vue               // 页面头部公共组件
|       |-- pop.js                   // 弹窗组件   
|       |-- product-item.vue         // 产品组件
|       |-- slide.vue                // 轮播图组件
|       |-- slide.vue                // 轮播图组件
|   |-- assets                       // 全局通用css和img
|   |-- directive                    // 自定义指令
|   |-- route-data                   // 路由数据store   
|   |-- router                       // 路由配置文件
|   |-- store                        // vuex状态管理
|   |-- util                         // ajax以及各种工具
|   |-- pages                        // 各种页面组件
|       |-- buy                      // 购买页
|       |-- card                     // 银行卡绑定
|       |-- detail                   // 产品详情页
|       |-- my                       // 我的主页，和消息列表
|       |-- list                     // 列表页
|       |-- index                    // 首页
|       |-- login                    // 登录页
|       |-- register                 // 注册页
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- .postcssrc                       // css兼容处理
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
```



## 功能
- [x] 首页
- [x] 详情页
- [x] 登录页
- [x] 注册页
- [x] 下拉刷新
- [x] 拆分页面组件和功能组件 
- [x] rem适配
- [ ] 个人信息页
- [ ] 路由数据存储，前进后退不在重新发送请求
- [ ] 在路由切换时，滚动条位置还原
- [ ] 轮播图组件编写
- [ ] 优化





