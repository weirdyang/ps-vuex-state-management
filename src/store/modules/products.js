import axios from 'axios';
import filterProducts from '../../products/filter-products';

export default {
  namespaced: true,
  state() {
    return {
      products: null,
    };
  },
  getters: {
    filteredProducts(state) {
      // (state, getters, rootState, rootGetters)
      return (param) => filterProducts(param, state.products);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // ( getters, rootGetters, dispatch)
      // dispatch('users/setUser, { data }, { root: true })
      // commit('users/setUser', {data}, {root:true})
      console.log('fetching products');
      return axios.get('/api/products').then((result) => commit('setProducts', result.data));
    },
  },
};
