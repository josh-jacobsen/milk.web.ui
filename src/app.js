import Vue from 'vue'
import VueFire from 'vuefire'

import AppLayout from './theme/Layout.vue'
import router from './plugins/router'

Vue.use(VueFire)

const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
