import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

export const store = createStore({
  // state - global reference to state throughout the app
  state: {
    products: [
      { name: 'Banana Beans', price: 20 },
      { name: 'Shiny Soda', price: 30 },
      { name: 'Green Grouper', price: 60 },
      { name: 'Red Ranch Bars', price: 10 }
    ]
  },
  // getters - used to perform calculations on the state
  getters: {
    saleProducts: (state) => {
      return state.products.map((product) => {
        return {
          name: `** ${product.name} **`,
          price: `${product.price / 2}`
        };
      });
    }
  },
  // mutations - used to change the data in the store
  mutations: {
    setReducePrice: (state) => {
      return state.products.forEach((product) => {
        return (product.price -= 1);
      });
    },
    setReducePriceByX: (state, payload) => {
      return state.products.forEach((product) => {
        if (product.price <= 0) {
          return (product.price = 0);
        } else {
          return (product.price -= payload);
        }
      });
    }
  },
  // actions - used to change the data in the store asynchronously ie. async/await, axios, fetch, setTimeout
  // can also be used to pass a payload to the mutation for dynamic params
  actions: {
    asyncReducePriceByX: (content, payload) => {
      setTimeout(() => {
        return content.commit('setReducePriceByX', payload); // runs the setReducePriceByX mutation
      }, 3000);
    }
  },
  plugins: [new VuexPersistence().plugin]
});
