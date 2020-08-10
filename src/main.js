import Vue from 'vue'
import App from './App.vue'
import router from './Router/router.js'
import store from './Store/store.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
