import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setup } from './setup'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 全局注册插件化物料信息
setup(app)
app.mount('#app')
