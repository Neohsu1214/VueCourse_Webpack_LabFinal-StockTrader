<template>
    <div class="col-sm-6 col-md-4">
        <!-- Bootstrap.com -> Get Start -> 版本選 v3.3.7 -> Panel -->
        <div class="panel panel-success">
            <div class="panel-heading">
                {{ stock.name }}
                <small>(Price: {{ stock.price }})</small>
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
                        @click="buyStock"
                        :disabled="(quantity <= 0) || !Number.isInteger(parseInt(this.quantity))">
                        Buy
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'], // 從前一頁傳進來的 stock 資料
    data: function() { // 也可寫成 data() {}
        return {
            quantity: 0
        }
    },
    methods: {
        testValue() {
            //console.log(Number.isInteger(this.quantity));
            console.log(isNaN(this.quantity));
        },
        buyStock: function() { // 也可以寫成 buyStock() {} 啦
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.quantity = 0; // 重設購買數量
        }
    }
}
</script>

<style scoped>

</style>