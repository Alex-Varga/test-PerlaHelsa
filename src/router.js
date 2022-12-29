import { createRouter, createWebHistory } from "vue-router"
import Index from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/Cart.vue')
    },
    {
      path: '/omega-3',
      name: 'Omega3',
      component: () => import('@/views/Omega3.vue')
    },
    {
      path: '/вітаміни',
      name: 'Vitamines',
      component: () => import('@/views/Vitamines.vue')
    },
    {
      path: '/добавки',
      name: 'Additives',
      component: () => import('@/views/Additives.vue')
    },
    {
      path: '/доставка',
      name: 'Delivery',
      component: () => import('@/views/Delivery.vue')
    },
    {
      path: '/про-нас',
      name: 'AboutUs',
      component: () => import('@/views/AboutUs.vue')
    }
  ]
})

export default router;