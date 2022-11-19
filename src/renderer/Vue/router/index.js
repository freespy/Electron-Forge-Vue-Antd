import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: '首页' },
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于',
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.afterEach((to, from) => {
    //console.log(to)
    if (to.meta && to.meta.title) {
        //ipcRenderer.send("set-tray-title", to.meta.title);
        document.title = to.meta.title;
    }
});
export default router