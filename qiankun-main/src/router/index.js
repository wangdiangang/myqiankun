import Router from 'vue-router'



import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ easing: 'ease', speed: 1500, showSpinner: false,parent: '#vue'  })

let router = new Router({
    mode: 'history',
    base: '',
    routes: [
        // { path: '/', redirect: '/father'},
        { path: '/father', component: () => import('@/components/father') }
    ]
})
router.beforeEach((to, from, next) => {
    console.log('路由跳转', to, from);
    NProgress.start()
    next()
})


router.afterEach(() => {
    NProgress.done()
})
export default router