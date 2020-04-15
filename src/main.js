import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// 加入 vue-route 的設定
import { routes } from './routes.js'

Vue.use(VueRouter);

// 設定 VueRouter 物件 
const router = new VueRouter({
  mode: 'history',
  routes: routes // ES6支援同名簡寫，此行可以減寫成 routes
});

new Vue({
  el: '#app',
  router: router, // 將 VueRouter物件加到 Vue instance 中。 ES6支援同名簡寫，此行可以減寫成 router
  render: h => h(App)
})
