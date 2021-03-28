import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    registerUser({ commit }, user) {
      console.log('in state');
      return axios.post('/api/register', user).then((result) => {
        commit('setUser', result.data);
      });
    },
    signIn({ commit }, userLogin) {
      return axios.post('/api/sign-in', userLogin).then((result) => commit('setUser', result.data));
    },
  },
};
