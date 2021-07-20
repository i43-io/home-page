import { createRouter, createWebHashHistory } from 'vue-router'
import Tools from '@/views/Tools.vue'
import Settings from '@/views/Settings.vue'

const routes = [
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/positions',
    name: 'Positions',
    component: () => import('@/views/Positions.vue')
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
