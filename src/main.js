import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
Object.keys(icons).forEach(key => {
    app.component(key, icons[key])
})
app.mount('#app')

