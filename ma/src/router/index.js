import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projets',
    name: 'Projets',
    component: () => import('../views/ProjetsView.vue')
  },
  {
    path: '/maria',
    name: 'Maria',
    component: () => import('../views/MariaView.vue')
  },
  {
    path: '/univers',
    name: 'Univers',
    component: () => import('../views/UniversView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
