import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import dayjs from 'dayjs'

import Highcharts from "highcharts"
import Highcharts3d from "highcharts/highcharts-3d"
import HighchartsVue from 'highcharts-vue'

Highcharts3d(Highcharts)

const app  = createApp(App)

app.use(store).use(router).use(HighchartsVue)
app.config.globalProperties.$dayjs = dayjs

app.mount('#app')
