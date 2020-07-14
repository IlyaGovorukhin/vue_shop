<template>
    <div class='product'>
        <router-link :to="{name: 'catalog'}">
            <div class="product-link">Назад</div>
        </router-link>
        <h1>Информация о товаре</h1>
        <div class="cart">
            <p> Имя товара: {{cart_data.name}}</p>
            <p> Цена: {{cart_data.price}}</p>
            <p> Артикул: {{cart_data.article}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product",
        props: {
            cart_data: {
                type: Object,
                default() {
                    return []
                }
            }
        },
        mounted() {
            console.log(this.cart_data)
        }
    }
</script>

<style  lang="scss">



</style>