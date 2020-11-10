import Vue from 'vue'
import App from './App'

import axios from '@/until/request'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

import store from '@/store/index'


App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
