import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const accentVariants = ['lime', 'sky', 'berry', 'yellow', 'orange', 'violet', 'mint']
const accent = accentVariants[Math.floor(Math.random() * accentVariants.length)]

document.documentElement.dataset.accent = accent

createApp(App).mount('#app')
