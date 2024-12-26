import { createWebHistory, createRouter } from 'vue-router'

import Home from '../src/pages/Home.vue'
import Characters from '../src/pages/Characters.vue'
import Character from '../src/pages/Character.vue'
import Villages from '../src/pages/Villages.vue'
import Village from '../src/pages/Village.vue'
import Privacy from '../src/pages/Privacy.vue'
import Terms from '../src/pages/Terms.vue'
import NotFound from '../src/pages/NotFound.vue'

const routes = [
  { path: '/naruto-universe', component: Home },
  { path: '/naruto-universe/characters', component: Characters },
  { path: '/naruto-universe/characters/:id', component: Character },
  { path: '/naruto-universe/villages', component: Villages },
  { path: '/naruto-universe/villages/:id', component: Village },
  { path: '/naruto-universe/privacy', component: Privacy},
  { path: '/naruto-universe/terms', component: Terms},
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})