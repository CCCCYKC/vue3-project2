import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/base.less'
import './assets/styles/iconfont.less'

import { createPinia } from 'pinia'
import router from './router'
// 导入数据
import './mock/index'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
