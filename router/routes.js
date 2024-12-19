import { createWebHistory, createRouter } from 'vue-router'

import Home from '../src/pages/Home.vue'
import Characters from '../src/pages/Characters.vue'
import Villages from '../src/pages/Villages.vue'

const routes = [
  { path: '/naruto-universe', component: Home },
  { path: '/naruto-universe/characters', component: Characters },
  { path: '/naruto-universe/villages', component: Villages },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})