/**
 * 新增一個獨立的 action 來處理向 firebase 取得所有已儲存的 funds, stocks 與 portfolio 資料
 */
import Vue from 'vue';

export const loadData = ({ commit }) => {
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