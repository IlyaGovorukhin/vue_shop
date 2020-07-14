<template>
    <div class='listitem'>
        <p>{{product_data.name}}</p>
        <p>Цена: {{product_data.price}} руб.</p>
        <div class= "listitem-btn" @click="addToCart"  >Добавить в корзину </div>
        <div class= "listitem-btn" @click="productPage" >Страница товара </div>
    </div>
</template>

<script>
    export default {
        name: "list-item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            addToCart() {
                this.$emit('addToCart',this.product_data);
            },
            productPage() {
                this.$emit('productPage',this.product_data);
            }

        }
    }
</script>

<style lang="scss">
    .listitem {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
        &-btn {
            border: solid 1px #aeaeae;
            padding: 5px;
            cursor: pointer;
        }
    }
</style>