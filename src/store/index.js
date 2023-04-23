import { createStore } from 'vuex';

export const store = createStore({
    // state - global reference to state throughout the app
    state: {
        products: [
            { name: 'Banana Beans', price: 20 },
            { name: 'Shiny Soda', price: 30 },
            { name: 'Green Grouper', price: 60 },
            { name: 'Red Ranch Bars', price: 10 }
        ],
    },
    // getters - used to perform calculations on the state
    getters: {
        saleProducts: (state) => {
            return state.products.map((product) => {
                return {
                name: `** ${product.name} **`,
                price: `${product.price / 2}`
                }
            })
        },
    },
    // mutations - used to change the data in the store
    mutations: {
        reducePrice: (state) => { 
            return state.products.forEach(product => {
                return product.price -= 1;
            })
        },
        reducePriceByX: (state, payload) => { 
            return state.products.forEach(product => {
                if (product.price <= 0) {
                    product.price = 0;
                } else {
                    product.price -= payload;
                }
            })
        },
    },
    // actions - used to change the data asynchronously ie. async/await, axios, fetch, setTimeout
    // can also be used to pass a payload to the mutation for dynamic params
    actions:  {
        reducePriceByX: (content, payload) => {
            setTimeout(() => {
                content.commit('reducePriceByX', payload);
            }, 3000);
        }
    }
})
