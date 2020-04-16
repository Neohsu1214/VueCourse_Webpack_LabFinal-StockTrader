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
    data: function() { // ES6 下可以簡寫成 data() {}
        return {
            stocks: [
                {id: 1, name: 'BMW', price: 110},
                {id: 2, name: 'Google', price: 200},
                {id: 3, name: 'Apple', price: 250},
                {id: 4, name: 'Twitter', price: 8}
            ]
        }
    }, 
    components: {
        appStock: Stock
    }
}
</script>

<style scoped>

</style>