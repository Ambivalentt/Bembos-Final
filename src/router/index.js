import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('../views/NosotrosView.vue')
    },
    {
      path: '/locales',
      name:'locales',
      component: () => import ('../views/LocalesView.vue')
    },
    {
      path: '/beneficios',
      name:'beneficios',
      component: () => import ('../views/BeneficiosView.vue')
    },{
      path: '/menu',
      name:'menu',
      component: () => import ('../views/MenuView.vue')
    }
  ]
})

export default router
