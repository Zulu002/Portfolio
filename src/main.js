import { createApp } from 'vue'
import 'lenis/dist/lenis.css'
import './style.css'
import App from './App.vue'

const accentVariants = ['lime', 'sky', 'orange', 'violet']
const accent = accentVariants[Math.floor(Math.random() * accentVariants.length)]

document.documentElement.dataset.accent = accent

createApp(App).mount('#app')
