import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
// import router from '../src/router/index'
// import naive from 'naive-ui'
import "@/style/main.scss"

const app = createApp(App)

app.use(createPinia())
// app.use(naive)
// app.use(router)
app.mount('#app')
