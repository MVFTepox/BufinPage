import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Registrar el router antes de montar
app.use(router)

// Montar una sola vez
app.mount('#app')
