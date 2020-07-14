<template>
    <div class="wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'wrapper',
        data() {
            return {
            }
        },
    }
</script>

<style>
    .wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>