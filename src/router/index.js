import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',    // 首页
        name: 'Layout',
        component: () => import('@/views/Layout/Layout.vue'),
        children: [
            {
                path: '/',     // 视频详情页
                name: 'Home',
                component: () => import('@/views/Home/Home.vue')
            },
            {
                path: '/video',     // 视频详情页
                name: 'Video',
                component: () => import('@/views/Video/Video.vue')
            },
        ]
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
