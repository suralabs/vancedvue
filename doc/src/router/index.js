import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Main.vue'
import Test from '@/views/Test.vue'

import NotFound from '@/components/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'public',
        component: () => import('@/components/Layout.vue'),
        children: [
            // {path:'/', redirect:'/home/1'},
            {path: '', name: 'home', component: Home, props: true},
            {path: 'test', name: 'test', component: Test, props: true},
            // {path: '/', name: 'home2', component: Home, props: true},
            // {path:'/:pathMatch(.*)*', redirect: '/home/1'}
            { path: ':pathMatch(.*)*', name: 'NotFound', component: NotFound },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
    // if (to.matched[0].name === "admin") {
    //     await Axios.post(import.meta.env.VITE_DOMAIN_API + "me",
    //         localStorage.getItem('token'),
    //         {
    //             headers: {
    //                 'content-type': 'text/json',
    //                 'Authorization': 'Bearer ' + localStorage.getItem('token')
    //             }
    //         }).then(res => res.data)
    //         .then(data => {
    //             console.log(data.roles)
    //             if (!data.roles.includes('ROLE_ADMIN')) {
    //                 router.push('/')
    //             }
    //         })
    // }
    next();
})

export default router
        