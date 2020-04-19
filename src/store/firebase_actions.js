/**
 * 新增一個獨立的 action 來處理向 firebase 取得所有已儲存的 funds, stocks 與 portfolio 資料
 */
import Vue from 'vue';

export const loadData = ({ commit }) => {
    /**
     * 因為只有一個context在進行，而且我們只需要用到 context.commit 這個 function
     * ES6支援將 (context) => { context.commit('mutations函式名稱'); } 簡化語法為 ({commit}) => {commit('mutations函式名稱')} 
     * 箭頭函式（）=>的用法與簡化規則詳見：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions
     */
    Vue.http.get('data.json')
        .then(response => response.json()) // 將 response.json() 的結果回傳
        .then(data => { // 此時 data 即為 response.json() 的結果，已經是 json 格式的內容，可以進行處理
            const funds = data.funds;
            const stocks = data.stocks;
            const stockPortfolio = data.stockPortfolio;

            const portfolio = {
                funds,
                stockPortfolio
            };

            // 將取得的資料寫入 store: stocks 跟 portfolio 中
            commit('SET_STOCKS', stocks); // hint: 定義在 store/module/stocks.js 的 mutations
            commit('SET_PORTFOLIO', portfolio); // hint: 定義在 store/module/portfolio.js 的 mutations
        });
};