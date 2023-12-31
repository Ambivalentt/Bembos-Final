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
      path: '/promociones',
      name:'promociones',
      component: () => import ('../views/PromocionesView.vue'),
      
    },{
      path: '/menu',
      name:'menu',
      component: () => import ('../views/MenuView.vue')
    },
    {
      path:'/menu/Promociones',
      name:'promociones-product',
      component: () => import ('../views/TestView.vue')
    }
    ,{
      path:'/menu/hamburguesas',
      name:'hamburguesas',
      component: () => import ('../views/MenuHamburguesas.vue'),
    },
    {
      path:'/menu/hamburguesas/:id',
      component: () => import ('../views/HamburguesaView.vue'),
    }
    ,{
      path:'/menu/hamburguesasPollo',
      name:'hamburguesapollo',
      component: () => import ('../views/HamburguesasPollo.vue')
    },
    {
     path:'/menu/bebidas',
     component:() => import ('../views/BebidasView.vue')
    }
    ,
    {
      path:'/menu/combos',
      component:() => import ('../views/CombosView.vue')
    }
  ]
})

export default router
