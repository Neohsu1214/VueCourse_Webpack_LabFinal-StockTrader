<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data(大富翁的SL大法啦！)</h6>
        <h6>Click on 'End Day' 來結束這一天</h6>
        <hr>
        <p>Your Funds: {{ funds | currency }} </p>
        <!-- currenncy 註冊在 main.js -->
    </div>
</template>

<script>

export default {
    computed: {
        funds: function() {
            return this.$store.getters.funds;
        }
    }
}
</script>

<style scoped>

</style>