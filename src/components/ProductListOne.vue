<script setup>
// import { useStore } from 'vuex';
// import { computed } from 'vue';
import { mapState, mapGetters, mapMutations, mapActions } from '../store/mapping';

// equivalent of retrieving via this.$store
// const store = useStore();

// access a state in computed function
// const products = computed(() => {
//   return store.state.products;
// });

// access a getter in computed function
// const saleProducts = computed(() => {
//   return store.getters.saleProducts;
// });

// const setReducePrice = () => {
//   return store.commit('setReducePrice'); // fires off the setReducePrice mutation
// };

// mapping allows access to the entire VueX store eliminating all of the above code
const { products } = mapState(); // currently not used in the v-for below
const { saleProducts } = mapGetters(); // used in ProductListOne
const { setReducePrice, setReducePriceByX } = mapMutations(); // used in ProductListOne
const { asyncReducePriceByX } = mapActions(); // used in ProductListTwo
</script>

<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name">{{ product.name }} </span>
        <span class="price">{{ product.price }} </span>
      </li>
    </ul>
    <button class="product-list-btn" @click="setReducePrice">Reduce Price</button>
  </div>
</template>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one h2 {
  color: purple;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
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
.name,
.price {
  font-weight: bold;
  color: plum;
  margin-right: 0.5rem;
}
</style>
