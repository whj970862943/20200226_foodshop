/*
入口JS
*/
import Vue from 'vue'
import App from './App'
import router from './router'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
