import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { router } from '../router/routes.js'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './style.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#F4511E',
          button: '#FFB200',
          footer: '#212121'
        }
      },
      dark: {
        colors: {
          primary: '#BB86FC',
          secondary: '#212121',
          button: '#F4511E'
        }
      }
    }
  }
})

createApp(App).use(vuetify).use(router).mount('#app')
