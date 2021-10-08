import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Highcharts from "highcharts"
import Highcharts3d from "highcharts/highcharts-3d"
import HighchartsVue from 'highcharts-vue'

Highcharts3d(Highcharts)

createApp(App).use(store).use(router).use(HighchartsVue).mount('#app')
