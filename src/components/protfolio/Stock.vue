<template>
    <div class="col-sm-6 col-md-4">
        <!-- Bootstrap.com -> Get Start -> 版本選 v3.3.7 -> Panel -->
        <div class="panel panel-info">
            <div class="panel-heading">
                {{ stock.name }}
                <small>(Price: {{ stock.price }} | Quantity {{ stock.quantity }})</small>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class=" insufficientQuantity ? 'danger' : '' ">
                        <!-- 也可寫成 :class="{danger: insufficientFunds}" 可以方便給定多個 classes -->
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                        @click="sellStock"
                        :disabled="disableSellBtn"
                        :title=" insufficientQuantity ? '持股數不足' : '' "
                        >
                        {{ disableSellBtn ? 'Cannot Sell' : 'Sell' }}
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
    computed: {
        insufficientQuantity: function() {
            return this.quantity > this.stock.quantity;
        },
        disableSellBtn: function() {
            return (this.quantity <= 0) || !Number.isInteger(parseInt(this.quantity)) || this.insufficientQuantity;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock' // 因為會與此 component 的 sellStock 衝突，所以要改名稱
        }),
        sellStock: function() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            // 透過 actions輔助器 直接叫用 module portfolio 的 action function: sellStock
            this.placeSellOrder(order); 
            // 或不使用 mapActions 改直接呼叫 this.$store.dispatch('sellStock', order);
        }
    }
}
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>