import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import scrollReveal from './directives/scrollReveal'

const app = createApp(App)

app.use(router)
app.directive('scroll-reveal', scrollReveal)

app.mount('#app')

// Dynamic Favicon for Localhost vs Production
if (import.meta.env.DEV) {
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
  if (favicon) {
    favicon.href = '/favicon-dev.svg'
  }
}
