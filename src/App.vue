<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        created: function() {
            // 初始化 Vuex 資料：透過叫用 Vuex dispatch 觸發 actions 從遠端取得資料
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body  {
        padding: 30px;
    }
</style>
