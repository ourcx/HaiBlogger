import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '../src/router/index'
import Light from '@/components/Light/Light.vue'
import Markdown from './components/Markdown/Markdown.vue'

// import naive from 'naive-ui'
import "@/style/main.scss"
import 'vfonts/Lato.css'


const app = createApp(App)

app.use(createPinia())
app.component('Light', Light)
app.component('Fei-Markdown', Markdown)
// app.use(naive)
app.use(router)
app.mount('#app')
