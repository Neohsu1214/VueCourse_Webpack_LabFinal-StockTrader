import Vue from 'vue';
import Vuex from 'vuex';
// 引用 自己建立的 modules
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
// 引用 額外建立的 actions
import * as actions from './firebase_actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions, // ES6支援同名簡寫，所以 actions: actions 可簡寫成 actions 就好
    modules: {
        stocks, // ES6支援同名簡寫，所以 stocks: stocks 可以寫成 stocks 就好
        portfolio
    }
});