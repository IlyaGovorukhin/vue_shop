<template>
    <div class='cart'>
        <div class="cart-data">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="cart-amount">
            <p>Количество:</p>
            {{cart_item_data.quantity}}
        </div>
        <div class="cart-btn" @click="deleteFromCart">Delete</div>
    </div>
</template>

<script>
    export default {
        name: "cart",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },

    }
</script>

<style lang="scss">
    .cart{
        &-btn{
            border: solid 1px #aeaeae;
            padding: 5px;
            cursor: pointer;
        }
    }

</style>