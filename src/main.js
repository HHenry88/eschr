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

Vue.use(VueMaterial)

Vue.component('toolBar', toolBar);
Vue.component('tabBar', tabBar);
Vue.component('searchBar', searchBar);
Vue.component('filterButton', filterButton);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
