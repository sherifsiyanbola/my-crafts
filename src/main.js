import Vue from 'vue'
import App from './App.vue'
// importing components globally
// import Geek from './Geek.vue'

// registering components globally
// Vue.component('crafts', Geek)

new Vue({
  el: '#app',
  render: h => h(App)
})
