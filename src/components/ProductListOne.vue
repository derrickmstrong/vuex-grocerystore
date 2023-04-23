<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

// equivalent of retrieving via this.$store
const store = useStore();

// access a state in computed function
const products = computed(() => {
    return store.state.products;
})

// access a getter in computed function
const saleProducts = computed(() => {
    return store.getters.saleProducts;
})

const reducePrice = () => { 
    store.commit('reducePrice'); // fires off the reducePrice mutation
}
</script>

<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts" :key="product.name">
            <span class="name">{{ product.name}} </span>
            <span class="price">{{ product.price}} </span>
        </li>
    </ul>
    <button class="product-list-btn" @click="reducePrice">Reduce Price</button>
  </div>
</template>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one h2{
    color: purple;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.name, .price{
    font-weight: bold;
    color: plum;
    margin-right: .5rem;
}
.product-list-btn {
    background-color: orange;
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 2px;
}
</style>
