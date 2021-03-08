import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      num:100,
      user: {
          name:'张三'
      }
    },
    mutations: {
      changeNum(state,n){
        console.log(state.num+=n);
      }
    },
    actions:{
      CHANGENUM(context,n){
        context.commit('changeNum',n)
      }
    }
  })
  export default store