//* 项目的启动入口 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false

// 创建 vue 根实例
// 把 router 配置到根实例中
// 通过 render 把 APP 根组件 渲染到  public/index.html 入口中的 #app 入口节点

new Vue({
  router,
  render: h => h(App)
  // el: '#app' 等价于  $mount('#app')
}).$mount('#app')
