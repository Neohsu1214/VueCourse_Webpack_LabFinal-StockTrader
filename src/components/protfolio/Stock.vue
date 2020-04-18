<template>
    <div class="col-sm-6 col-md-4">
        <!-- Bootstrap.com -> Get Start -> 版本選 v3.3.7 -> Panel -->
        <div class="panel panel-success">
            <div class="panel-heading">
                {{ stock.name }}
                <small>(Price: {{ stock.price }} | Quantity {{ stock.quantity }})</small>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                        @click="sellStock"
                        :disabled="(quantity <= 0) || !Number.isInteger(parseInt(this.quantity))">
                        Sell
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'; // 將 vuex 的 actions 透過 mapActions 變成此 component 的 method 來叫用，可以避免一直寫 dispatch，但 Spread Operator 不是很好支援 Orz

export default {
    props: ['stock'], // 從前一頁傳進來的 stock 資料
    data: function() { // 也可寫成 data() {}
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),
        sellStock: function() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            // 透過 actions輔助器 直接叫用 module portfolio 的 action function: sellStock
            this.sellStock();
        }
    }
}
</script>

<style scoped>

</style>