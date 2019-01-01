---
title: vue常用
---


## vue 利用 `keep-alive` 实现缓存
> 在列表页进入详情页面的时候可以将列表页缓存，这样，当从详情页返回列表页的时候不需要重新读取数据

- 在app.vue中
```javascript
  <keep-alive>
      <router-view v-if="$route.meta.keepAlive"> </router-view>
  </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"> </router-view>
```
- 在需要缓存的文件路由上的meta 标签加上
```javascript
 {
      path:'/orders/vote',
      name: 'vote',
      component: Vote,
      meta:{
        title:'xx',
        keepAlive:true,
      }
}
```

##  vue 利用 `router` 实现动态`title `
> 在列表页进入详情页面的时候可以将列表页缓存，这样，当从详情页返回列表页的时候不需要重新读取数据

- 在文件路由上的meta 标签加上 title 属性
```javascript
 {
      path:'/orders/vote',
      name: 'vote',
      component: Vote,
      meta:{
        title:'xx',
      }
}
```
- 在main.js中加上路由守卫,进入前，将title 渲染出来
```javascript
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
}
```

## vue打包分析
在`package.json`中加入脚本
```
"analyz": "NODE_ENV=production npm_config_report=true npm run build"；
```
执行 `npm run analyz`
可以查看
