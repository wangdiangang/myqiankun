import Router from 'vue-router'



import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
setTimeout(()=>{
    NProgress.configure({ easing: 'ease', speed: 1500, showSpinner: false,parent: '#vue'  })
},100)

let router = new Router({
    mode: 'history',
    base: '',
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: () => import('@/components/home') }
    ]
})
router.beforeEach((to, from, next) => {
    console.log('主应用路由跳转', to, from);
    NProgress.start()
    next()
})


router.afterEach(() => {
    NProgress.done()
})
export default router