<template>
    <div>
        <!-- 將 每一筆 stock 都傳入 Stock Component 去呈現 -->
        <!-- 注意：要傳進去的資料，務必要用 v-bind傳入，此處要傳入的有兩個 key 與 stock -->
        <app-stock v-for="(stock, idx) in stocks" :key="idx" :stock="stock"></app-stock>        
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    /* 資料改用 Vuex 的，所以要用 computed 取得
    data: function() { // ES6 下可以簡寫成 data() {}
        return {
            stocks: [
                {id: 1, name: 'BMW', price: 110},
                {id: 2, name: 'Google', price: 200},
                {id: 3, name: 'Apple', price: 250},
                {id: 4, name: 'Twitter', price: 8}
            ]
        }
    }, */ 
    computed: {
        stocks: function() {
            // 改用 Vuex 後，stocks 資料就變成要用 computed 透過 this.$store.getters 取得
            return this.$store.getters.stocks;
        }
    },
    components: {
        appStock: Stock
    },
    
}
</script>

<style scoped>

</style>