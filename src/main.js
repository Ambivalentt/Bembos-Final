import './style.css'
import 'boxicons'
import { createApp, provide, ref } from 'vue'
import App from './App.vue'
import router from './router'

const globalData = ref([])

//fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(faPhone)
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', 'faPhone', FontAwesomeIcon)
app.provide('globalData', globalData)
app.mount('#app')
