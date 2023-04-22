import { createStore } from 'vuex';

export const store = createStore({
  state: {
    products: [
      { name: 'Banana Beans', price: 20 },
      { name: 'Shiny Soda', price: 20 },
      { name: 'Green Grouper', price: 20 },
      { name: 'Red Ranch Bars', price: 20 }
    ],
  },
})
