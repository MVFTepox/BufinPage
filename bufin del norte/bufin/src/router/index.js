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
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre
  },
  {
    path: '/programa',
    name: 'programa',
    component: Programa
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: Servicios
  }
  ,
  {
    path: '/contactos',
    name: 'contactos',
    component: Contactos
  },
  {
    path: '/consultoria',
    name: 'Consultoria',
    component: Consultoria
  },
  {
    path: '/auditoria',
    name: 'Auditoria',
    component: Auditoria
  },
  {
    path: '/promoaxo',
    name: 'PromoAxo',
    component: PromoAxo
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
