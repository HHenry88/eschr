// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'

import toolBar from './components/toolBar';
import tabBar from './components/tabBar';
import searchBar from './components/searchBar';
import filterButton from './components/filterButton'
import photosView from './components/photosView'

import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueMaterial)
Vue.use(VueAxios, axios)

Vue.component('toolBar', toolBar);
Vue.component('tabBar', tabBar);
Vue.component('searchBar', searchBar);
Vue.component('filterButton', filterButton);
Vue.component('photosView', photosView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
