import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 100
  },
  modules: {
    moduleA: {
      namespaced: true,
      state: {
        age: 18
      },
      mutations: {
        inc(state){
          state.age += 1
        }
      }
    },
    moduleB: {
      namespaced: true,
      state: {
        age: 88
      },
      mutations: {
        inc(state){
          state.age += 1
        }
      }
    }
  },
  mutations: {
    inc(state){
      state.num += 1
    },
    dec(state){
      state.num -= 1
    }
  },
  actions: {
    incAction({commit}){
      commit('inc')
    },
    decAction({commit}){
      commit('dec')
    }
  },
  getters: {
    getnum(state){
      return state.num
    }
  }
})