import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import joce from './plugin'

import nabbar from './components/NavBar'
import btn from './components/Btn'
import titler from './components/titler'

Vue.use(joce)

Vue.component('navbar',nabbar)
Vue.component('mybtn',btn)
Vue.component('titler',titler)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
