import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      user: {
          name:'张三'
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  export default store