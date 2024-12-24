import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { router } from '../router/routes.js'
import './style.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#F4511E',
          button: '#FFB200',
          footer: '#212121',
          power: '#FF0000'
        }
      },
      dark: {
        colors: {
          primary: '#BB86FC',
          secondary: '#212121',
          button: '#F4511E',
          footer: '#212121',
          power: '#f0f0f0'
        }
      }
    }
  }
})

createApp(App).use(vuetify).use(router).mount('#app')
