import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
	// state类似于之前的data this.$store.state.数据名
	state:{
		html:"Redmi K20 Pro 尊享版 12GB+512GB 碳纤黑 x1",
		individual:0,
		count:0,
		des:[]
			
	},
	// mutations类似于之前的方法 this.$store.commit('方法名',参数)
	mutations:{
		adds(state){
			state.des.val++
		},
		sub(state){
			if(state.individual>1){
				state.individual--
			}
			
		},
		a(state,n){
			state.html=n;
		},
		add(state,n){
			state.individual+=n;
		}
	}
})