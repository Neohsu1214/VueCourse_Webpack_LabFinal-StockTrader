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
                <li class="dropdown">
                    <a href="#" 
                        class="dropdown-toggle" 
                        data-toggle="dropdown" 
                        role="button" 
                        aria-haspopup="true" 
                        aria-expanded="false">Save & Load<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Save Data</a></li>
                        <li><a class="dropdown-item" href="#">Load Data</a></li>
                    </ul>
                </li>
            </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>    
</template>

<script>
export default {
    computed: {
        funds: function() { // ES6下可以寫成 funds() {}
            return this.$store.getters.funds;
        }
    }
};
</script>

<style scoped>

</style>