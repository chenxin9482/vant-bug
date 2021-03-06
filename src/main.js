import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Swipe, SwipeItem} from 'vant'
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
