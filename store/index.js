import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var vueobj={
	state:{
		usname:"admin"
	}
}

var store=new Vuex.Store(vueobj)

export default store
