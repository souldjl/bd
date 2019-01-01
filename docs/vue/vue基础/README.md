---
title: vue基础
---

# vue项目的初始化
## 1.安装启动
```js
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
脚手架安装的每次端口都是8080，下一次安装的时候会出现端口被占用的问题，解决办法
 * 占用问题，config/index.js/prot=？你想要修改的端口号，重新run.

 ```

## 2.vue-router
```js
声明式 编程式
<router-link :to="..."> router.push(...)
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})

 // 获取查询参数，变成 /register?plan=private
this.$route.query.plan
```
## 3.安装 axios 请求数据
```js
`npm install axios --save -dev`
在 `main.js` 中直接引入后加入到vue原型链中可以直接使用。
```

