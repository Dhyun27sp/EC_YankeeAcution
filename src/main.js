import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'


const cors = require('cors')
const app = createApp(App)
app.use(VueAxios,{$request: axios})
app.use(cors)
app.use(router)
app.mount('#app')



