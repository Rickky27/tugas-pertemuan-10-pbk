import { createStore } from 'vue';

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
    dataItems: []
  },
  mutations: {
    login(state, user) {
      state.isAuthenticated = true;
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    addData(state, item) {
      state.dataItems.push(item);
    },
    deleteData(state, index) {
      state.dataItems.splice(index, 1);
    }
  },
});
