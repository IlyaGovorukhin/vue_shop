import Vue from 'vue'
import Router from 'vue-router'

import List from '../components/list'
import Item from '../components/item'
import product from '../components/product'
Vue.use(Router);

let router = new Router({
    hashbang: false,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: List
        },
        {
            path: '/Item',
            name: 'Item',
            component: Item,
            props: true
        },
        {
            path: '/product',
            name: 'product',
            component: product,
            props: true
        }
    ]
})
export default router;