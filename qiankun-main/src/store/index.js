import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      num:100,
      user: {
          name:'张三'
      },
      chengeKeys:['0']
    },
    mutations: {
      changeNum(state,n){
        console.log(state.num+=n);
      },
      genggai(state,pay){
        console.log(pay);
        state.chengeKeys.splice(0,1,pay+'')
        console.log(state.chengeKeys);
      }
    },
    actions:{
      CHANGENUM(context,n){
        context.commit('changeNum',n)
      },
      GENGGAI({commit},pay){
        console.log(pay);
        commit('genggai',pay)
      }
    }
  })
  export default store