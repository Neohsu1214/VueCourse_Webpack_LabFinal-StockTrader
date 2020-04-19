<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
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


    /* 建立一個 transition 名為 slide 的classes */
    .slide-enter {
        /* transform: translateY(20px); 因為與slide-in 起始位置相同，可不用寫 */
    }
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave {
        
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }    
</style>
