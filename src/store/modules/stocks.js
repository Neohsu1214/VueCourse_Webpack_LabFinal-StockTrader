/**
 * 專門用來存放 Component Stocks.vue 中的 stocks 的 Vuex module
 */ 
import stocks from "../../mock_data/stocks.js";

const state = {
    stocks: []
};

// 要取得 Vuex state 中的資料，就是要這個 getters 啦！
const getters = {
    stocks: (state) => {
        return state.stocks;
    }
};

// 要(同步)異動 Vuex state 中的資料，就是要這個 mutations 啦!
const mutations = {
    'SET_STOCKS': function(state, stocks) { // 也可寫成 ES6格式 'SET_STOCKS' (state, stocks)
        // 更新 Vuex 的 stocks 資料
        state.stocks = stocks;
    },
    'RND_STOCKS': function(state) { // 也可以寫成 ES6格式 ‘RUN_STOCKS’ (state) {}
        // 將股價亂數一下
    }
};

// 要非同步(從Server端拿資料)異動 Vuex state中的資料，就是要靠這個 actions 去觸發 mutations 啦！
const actions = {
    buyStock: ({commit}, order) => {
        // 此時要觸發 Vuex module stocks 的 BUY_STOCK mutation
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        // 模擬從 server 端拿到所有可購買的 stocks 資料
        // 此 stocks 變數即 mock_data/stocks.js 中假造的遠端資料
        commit('SET_STOCKS', stocks); // 觸發 mutation 的事件來更新 Vuex 的 stocks 資料
    },
    randoamizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

// 最後這個 module 要湊成 Vuex 物件才能用喔！
// 然後要記得把這 Vuex 物件包進 store.js 才能用喔
export default {
    state,
    mutations,
    actions,
    getters
}