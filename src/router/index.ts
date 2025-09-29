import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LayoutsMain from '@/layouts/LayoutsMain.vue'
import HomePage from '@/pages/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutsMain,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
