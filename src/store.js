import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dreams:[],

  },
  mutations: {
    SaveDream(state, data){
      state.dreams.push(data);
      console.log(state.dreams);
    }
  },
  actions: {
    actionSaveDream({commit}, data){
      commit('SaveDream', data)
    }
  }
})
