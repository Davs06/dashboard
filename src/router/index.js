// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/front',
        name: 'Front',
        component: () => import('@/views/FrontEnd.vue'),
      }, {
        path: '/back',
        name: 'Back',
        component: () => import('@/views/BackEnd.vue'),
      }, {
        path: '/iniciante',
        name: 'Iniciante',
        component: () => import('@/views/Iniciante.vue'),
      },
    ],
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
