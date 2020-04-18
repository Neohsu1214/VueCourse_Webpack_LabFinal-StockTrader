import Vue from 'vue';
import Vuex from 'vuex';
// 引用 自己建立的 modules
import stocks from './modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks // ES6支援同名簡寫，所以 stocks: stocks 可以寫成 stocks 就好
    }
});