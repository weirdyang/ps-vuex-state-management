import { createStore } from 'vuex';
import productsModule from './modules/products';
import usersModule from './modules/users';

const store = createStore({
  modules: {
    products: productsModule,
    users: usersModule,
  },
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
