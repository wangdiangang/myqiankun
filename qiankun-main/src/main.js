import Vue from "vue"
import App from "./App.vue"
import Router from 'vue-router'
import router from "./router"
import store from "./store"
import { registerMicroApps, start } from "qiankun"
Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// 在主应用中注册子应用

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
            appContent: '我是主应用传给2子应用的值'
        }
    },{
        name: "vue vue3",
        entry: "//localhost:8086",
        container: '#vue',
        activeRule: '/vue3',
        props: {
            appContent: '我是主应用传给三子应用的值'
        }
    }
], {
    beforeLoad: [
        app => { // 挂载前回调
            console.log("before load", app);
        }
    ],
    beforeMount: [
        app => { // 挂载后回调
            console.log("before mount", app);
        }
    ],
    afterUnmount: [
        app => { // 卸载后回调
            console.log("after unload", app);
        }
    ]
}

);
// setDefaultMountApp("/app1");
// 启动
start();




