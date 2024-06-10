import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView/index.vue')
    },
    {
      path: '/dump',
      name: 'dump',
      component: () => import('../views/DumpView/index.vue')
    },

    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/Resources/index.vue')
    },

    {
      path: '/vouchers',
      name: 'vouchers',
      component: () => import('../views/VoucherView/index.vue')
    },

    {
      path: '/packs',
      name: 'packs',
      component: () => import('../views/VoucherView/index.vue')
    },

    {
      path: '/news',
      name: 'news',
      component: () => import('../views/VoucherView/index.vue')
    },

    {
      path: '/forums',
      name: 'forums',
      component: () => import('../views/VoucherView/index.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/VoucherView/index.vue')
    }
  ]
})

export default router
