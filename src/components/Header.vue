<template>
    <!-- 從 Bootstrap 網站取得 Nav Bar 宣告套用。還記得怎麼進去嗎？Bootstrap網站 -> Get Start -> 右上角版本選跟package.json內的相同 -> Components -> NavBar -->
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link to="/" class=navbar-brand>Stock Trader</router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <!-- 產生兩個選單 -->
                <router-link to="/portfolio" tag="li" activeClass="active"><a>Protfolio</a></router-link>
                <router-link to="/stocks" tag="li" activeClass="active"><a>Stocks</a></router-link>
            </ul>
            <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#" @click="endDay">End Day</a></li>   
                <!-- 透過 v-bind:class 來動態綁定class，做到列表的顯示或關閉 -->
                <li 
                    class="dropdown"
                    :class="{open: isDropdownOpen}"
                    @click="isDropdownOpen = !isDropdownOpen"
                    >
                    <a href="#" 
                        class="dropdown-toggle" 
                        data-toggle="dropdown" 
                        role="button" 
                        aria-haspopup="true" 
                        aria-expanded="false">Save & Load<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click="saveData">Save Data</a></li>
                        <li><a class="dropdown-item" href="#" @click="loadData">Load Data</a></li>
                    </ul>
                </li>
            </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data: function() {
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        funds: function() { // ES6下可以寫成 funds() {}
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randoamizeStocks: 'randoamizeStocks', // hint: 定義在 store/module/stocks.js 中的 actions
            fetchData: 'loadData' // hint: 定義在 store/firebase_actions.js
        }),
        endDay: function() { // ES6可簡寫為 endDay()
            // 非同步叫用遠端API更新 module stocks price資料
            this.randoamizeStocks(); // 此 randoamizeStocks 即為 mapActions 中引入的 randoamizeStocks
        },
        saveData: function() {
            // 將 store 中的資料兜成一個變數後，送到 firebase上存起來
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json', data);
        },
        loadData: function() {
            this.fetchData();
        }
    }
};
</script>

<style scoped>

</style>