import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import mintUi from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import router from './assets/js/router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '../src/assets/css/style.css'
import axios from 'axios'
import '../src/assets/css/iconfont.css'
import "../src/assets/font1/iconfont.css"
import "../src/assets/mui/css/mui.css"
// import Vuex from 'vuex'
// Vue.use(Vuex)
import store from '../src/assets/js/vuex.js'
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.prototype.$http=axios;
Vue.use(mintUi);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})
