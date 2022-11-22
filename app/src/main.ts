import { createApp } from 'vue'
import './assets/css/base.css'
import App from './App.vue'
import pinia from './components/stores'
createApp(App).use(pinia).mount('#app')
