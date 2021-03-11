import { initGlobalState, MicroAppStateActions } from "qiankun";
import store from "../store";
console.log('%c这是store','color:red',store);
const initialState = {
  token: '1234567865432134567',
   num:120,
   defaultselectedkeys1:['2'],
   user:{
     name:'五道杠'
   },
   ...store.state,
};

// 初始化 state
const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {
  console.log("%c主应用: 变更前",'color:blue',initialState);
  console.log(prev);
  console.log("主应用: 变更后");
  console.log(state);
});

export default actions;