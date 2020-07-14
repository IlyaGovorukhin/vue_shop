<template>
    <div class='hoverItem'>
        <h1>Корзина</h1>
        <p v-if="!cartdata.length">There are no products in cart...</p>
        <div  class='hoverItem-item' v-for="(item) in cartdata"
                :key="item.article">
            <p>{{item.name}}</p>
            <p>Количество: {{item.quantity}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hover-item",
        components: {
        },
        props: {
            cartdata: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        mounted() {
           console.log(this.cart_data)
        }

    }
</script>

<style scoped>
    .hoverItem{
        position: absolute;
        width: 300px;
        left: -200px;
        top: 30px;
    }
</style>