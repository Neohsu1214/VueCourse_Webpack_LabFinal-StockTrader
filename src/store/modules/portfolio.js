/**
 * 專門用來存放 Component Portfolio.vue 中的 stocks 的 Vuex module
 */ 

const state = {
    funds: 10000, // 資金
    stocks: [] // 已購買的股票
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) { // 即 'BUY_STOCK': function(state, {stockId, quantity, stockPrice}) {}
        // 如何有效地在 js array 中找到所要的資料? 用 find( element => 條件成立 )
        // find 等於是『 foreach(element in elements) if 條件成立 return element; 』的意思，ES6支援寫成如此
        const record = state.stocks.find(element => element.id == stockId);

        if (record) {
            // 已經買過此檔股票：更新數量
            record.quantity += quantity;
        } else {
            // 還沒買過此檔股票：新增一筆 stock 到 stocks 中
            let oneStock = {
                id: stockId,
                quantity: quantity
            };
            state.stocks.push(oneStock);
        }
        // 有買當然就要從資金中扣錢啦
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        // 用find 找到指定的 stock
        const record = state.stocks.find(element => element.id == stockId);

        if (record.quantity >= quantity) {
            // 已購股票數夠賣
            record.quantity -= quantity;
            // 有賣資金就會增加啦
            state.funds += stockPrice * quantity;
        } else {
            // 已購股票數不夠賣：就出清啦！
            state.stocks.splice(state.stock.indexOf(recoed), 1);
            // 有賣資金就會增加啦
            state.funds += stockPrice * record.quantity;
        }
        
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK',  order);
    }
};

const getters = {
    stockPortfolio: function(state, getters) { // ES6可簡寫成 stockPortfolio(state, getters) {}
        // array.map() 可將 array 中挑出來的 element 進行轉換
        return state.stocks.map(stock => {
            // 從 module stocks 中取得同樣 stockId 的 name 與 price
            const record = getters.stocks.find(element => element.id == stock.id);
            // 兜出 Portfolio 專用 stock
            let oneStock = {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
            return oneStock; // 如此原本的 stock 就被 oneStock 置換掉了！
        });
    },
    funds: function(state) { // ES6可簡寫成 funds(state) {}
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}