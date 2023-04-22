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
        }
    }
})
