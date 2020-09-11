import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/layOut'
    },
    {
        path: '/layOut',
        component: () => import('../page/layOut'),
        redirect: '/layOut/dataList',
        children: [
            {
                path: '/layOut/dataList',
                component: () => import('../page/dataList')
            },
            {
                path: '/layOut/Echert',
                component: () => import('../page/Echert')
            },
            {
                path: '/layOut/Mine',
                component: () => import('../page/Mine')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
