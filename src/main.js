import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

window.AOS = AOS

createApp(App).use(router).mount('#app')
