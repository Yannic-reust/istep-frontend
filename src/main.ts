import { createApp } from 'vue'

import './App.scss'
//@ts-ignore
import App from './App.vue'
//@ts-ignore
import router from './router.js'

createApp(App).use(router).mount('#app')
