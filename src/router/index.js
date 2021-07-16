import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Positions from '../views/Positions.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/positions',
    name: 'Positions',
    component: Positions
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
