<script setup>
import { reactive } from 'vue';
import ProductListOne from './ProductListOne.vue'
import ProductListTwo from './ProductListTwo.vue'

  const products =  reactive(
    [
      {name: 'Banana Beans', price: 20},
      {name: 'Shiny Soda', price: 20},
      {name: 'Green Grouper', price: 20},
      {name: 'Red Ranch Bars', price: 20},
    ]
  )
</script>

<template>
  <div>
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>
