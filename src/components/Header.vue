<template>
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

};
</script>

<style scoped>

</style>