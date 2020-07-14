<template>
    <div class='item'>
        <router-link :to="{name: 'catalog'}">
            <div class="item-link">Назад</div>
        </router-link>
        <h1>Корзина</h1>
        <p v-if="!cart_data.length">There are no products in cart...</p>
        <cart
                v-for="(item, index) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import cart from './cart'
    import {mapActions} from 'vuex'
    export default {
        name: "item",
        components: {
            cart
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        computed: {

        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        }
    }
</script>

<style scoped>

</style>