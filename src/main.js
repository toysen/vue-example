// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'  // 引入store
import axios from 'axios' // 引入axios
Vue.use(axios)
import Icon from 'vue-svg-icon/Icon.vue' // 引入svg-icon
Vue.component('icon', Icon)
import MuseUI from 'muse-ui' // 引入muse-ui
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 light 主题
Vue.use(MuseUI)
import Velocity from 'velocity-animate' // 使用Velocity 动画
Vue.prototype.Velocity = Velocity
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
