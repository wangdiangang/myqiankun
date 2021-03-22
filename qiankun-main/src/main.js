import Vue from "vue"
import App from "./App.vue"
import Router from 'vue-router'
import router from "./router"
import store from "./store"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import actions from './shared'
Vue.use(Antd);
import { registerMicroApps, start,initGlobalState,setDefaultMountApp } from "qiankun"
Vue.use(Router);
Vue.config.productionTip = false;
console.log('qiankun-main.js');


let vue=new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

localStorage.setItem('token','13800138000')
// 在主应用中注册子应用
console.log('rpocess',process.env);
registerMicroApps([
    {
        name: "vue App",
        entry: "//localhost:8083",
        container: '#vue',
        activeRule: '/vue',
        props: {
            appContent: '我是主应用传给1子应用的值',
            store
        }
    },{
        name: "vue vueLow",
        entry: "//localhost:8084",
        container: '#vue',
        activeRule: '/vue2',
        props: {
            appContent: '我是主应用传给2子应用的值',
            store
        }
    },{
        name: "vue vue3",
        entry: "//localhost:8086",
        container: '#vue',
        activeRule: '/vue3',
        props: {
            appContent: '我是主应用传给三子应用的值',
            store
        }
    }
], {
    beforeLoad: [
        app => { // 挂载前回调
            console.log("挂载前回调 before load", app);
        }
    ],
    beforeMount: [
        app => { // 挂载后回调
            console.log("挂载后回调 before mount", app);
        }
    ],
    afterUnmount: [
        app => { // 卸载后回调
            console.log("卸载后回调 after unload", app);
        }
    ]
}

);
setDefaultMountApp('/')

// 启动
start();




