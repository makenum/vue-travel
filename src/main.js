import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueHolder from 'vue-holderjs'
// css
import 'swiper/dist/css/swiper.css'
import './styles/reset.styl'
import './assets/iconfont.css'

fastClick.attach(document.body)
Vue.use(VueHolder)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
