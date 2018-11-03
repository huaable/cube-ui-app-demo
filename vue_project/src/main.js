// The Vue build version to load with the `import` command
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Cube from 'cube-ui'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import axios from 'axios';
Vue.prototype.$http= axios


window.Promise = window.Promise || Promise

FastClick.attach(document.body) //  hack the active pseudo-classes failure caused by -webkit-overflow-scrolling touch

Vue.use(Cube)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueLazyload)

new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
