<template>
    <div class='list'>
        <div class='list_wrapper'>
            <router-link :to="{name: 'Item', params: {cart_data: CART}}">
                <div @mouseover="hover = true"
                     @mouseleave="hover = false"
                     @click="hover = false"
                     class="list_wrapper-link">Корзина: {{CART.length}}
                </div>
            </router-link>
            <hover-item v-if="hover" :cartdata="CART"/>
        </div>
        <h1>Товары</h1>
        <div class="list-array">
            <list-item
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :product_data="product"
                    @addToCart="addToCart"
                    @productPage="productPage"

            />
        </div>
    </div>
</template>

<script>
    import listItem from './listItem'
    import hoverItem from './hoverItem'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "list",
        components: {
            listItem,
            hoverItem
        },
        props: {},
        data() {
            return {
                hover: false
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data);
            },
            productPage(data) {
                this.$router.push({name:'product', params: {cart_data: data} })
            }

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log('Data arrived!')
                    }
                })


        }
    }
</script>

<style lang="scss">
    .list {
        &-array {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &_wrapper{
            width: 100px;
            height: 30px;
            position: absolute;
            right: 50px;
            &-link{
                top:0;
                right: 0;
            }
        }
    }
</style>