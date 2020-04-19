import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// 加入 vue-route 的設定
import { routes } from './routes.js'
// 加入 Vuex 的資料
import store from './store/store';

Vue.use(VueRouter);

// 建立 global filter 幫金額數字加上＄與千分位
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString(); // 原來要加上千分位只要叫用 toLocaleString 就好啦？！
});

// 設定 VueRouter 物件 
const router = new VueRouter({
  mode: 'history',
  routes: routes // ES6支援同名簡寫，此行可以減寫成 routes
});

new Vue({
  el: '#app',
  router, // 將 VueRouter物件加到 Vue instance 中。ES6 支援同名簡寫，router: router 可以簡寫 router
  store, // 將 Vuex 物件加到 Vue instance 中，ES6 支援同名簡寫， store: store 可簡寫成 store
  render: h => h(App)
})
