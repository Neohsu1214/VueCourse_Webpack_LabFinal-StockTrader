<template>
    <div>
        <app-stock v-for="(stock, idx) in stocks" :key="idx"></app-stock>
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