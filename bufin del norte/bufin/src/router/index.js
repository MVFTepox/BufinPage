// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Sobre from '../views/Sobre.vue'
import HomeView from '../views/Pagina.vue'
import Programa from '../views/Programa.vue'
import Servicios from '../components/Servicios.vue'
import Contactos from '../views/Contactos.vue'
import Consultoria from '../views/Consultoria.vue'
import Auditoria from '../views/Auditoria.vue'
import PromoAxo from '../views/PromoAxo.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Bufin Del Norte - Consultores de Comercio Exterior'
    }
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre,
    meta: {
      title: 'Sobre Nosotros - Bufin Del Norte - Consultores de Comercio Exterior'
    }
  },
  {
    path: '/programa',
    name: 'programa',
    component: Programa,
    meta: {
      title: 'BinLey 25° - Bufin Del Norte  - Consultores de Comercio Exterior'
    }
  },
  
  {
    path: '/contactos',
    name: 'contactos',
    component: Contactos,
    meta: {
      title:'Contáctanos!📱  - Bufin Del Norte - Consultores de Comercio Exterior'
    }

  },
  {
    path: '/consultoria',
    name: 'Consultoria',
    component: Consultoria,
    meta: {
      title: 'Consultoría - Bufin Del Norte - Consultores de Comercio Exterior'
    }
  },
  {
    path: '/auditoria',
    name: 'Auditoria',
    component: Auditoria,
    meta: {
      title: 'Auditoría - Bufin Del Norte - Consultores de Comercio Exterior'
    }
  },
  {
    path: '/promoaxo',
    name: 'PromoAxo',
    component: PromoAxo,
    meta: {
      title: 'Axo Web Digital - Tu negocio en la WEB  🛜🌐'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
   scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
