<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

// equivalent of retrieving via this.$store
const store = useStore();

// access a state via the computed function
const products = computed(() => {
  return store.state.products;
});

// access a getter via the computed function
const saleProducts = computed(() => {
  return store.getters.saleProducts;
});

// access an action with a payload
const asyncReducePriceByX = (amount) => {
  return store.dispatch('asyncReducePriceByX', amount);
};
</script>

<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name">{{ product.name }} </span>
        <span class="price">{{ product.price }} </span>
      </li>
    </ul>
    <button class="product-list-btn" @click="asyncReducePriceByX(5)">Reduce Price By X</button>
  </div>
</template>

<style scoped>
#product-list-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-two h2 {
  color: rgb(34, 7, 155);
}
#product-list-two ul {
  padding: 0;
  list-style-type: none;
}
#product-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.product-list-btn {
  background-color: turquoise;
  color: teal;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  padding: 2px;
}
.name,
.price {
  font-weight: bold;
  color: #0c31e8;
  display: block;
}
</style>
