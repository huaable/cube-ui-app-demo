// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import Cube from 'cube-ui'
//
// Vue.use(Cube)
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<App/>'
// })


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cube from 'cube-ui'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

window.Promise = window.Promise || Promise

FastClick.attach(document.body) //  hack the active pseudo-classes failure caused by -webkit-overflow-scrolling touch

Vue.use(Cube)
Vue.use(VueRouter)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
