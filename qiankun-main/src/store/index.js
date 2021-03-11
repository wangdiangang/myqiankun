import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../shared/index'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      num:100,
      user: {
          name:'张三'
      },
      chengeKeys:['2'],
      channel:'2009',
      gundan:12345,
      taskList:[1,2]
    },
    mutations: {
      changeNum(state,n){
        console.log(state.num+=n);
      },
      genggai(state,pay){
        console.log(pay);
        state.chengeKeys.splice(0,1,pay+'')
        console.log(state.chengeKeys);
      },
      gundan(state,payLoad){
        state.gundan+=payLoad
      }
    },
    actions:{
      CHANGENUM(context,n){
        context.commit('changeNum',n)
      },
      GENGGAI({commit},pay){
        console.log(pay);
        commit('genggai',pay)
      },
      GUNDAN({commit},payLoad){
        console.log('1234567865432',payLoad);
        commit('gundan',payLoad)
      }
    }
  })
  export default store