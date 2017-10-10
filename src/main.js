// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Components
import toolBar from './components/toolBar'
import tabBar from './components/tabBar'
import searchBar from './components/searchBar'
import filterButton from './components/filterButton'
import thumbnail from './components/thumbnail'
import relatedImages from './components/relatedImages'
import tagChips from './components/tagChips'
import peopleChips from './components/peopleChips'
import placesChips from './components/placesChips'
import autoComplete from './components/autoComplete'
import searchView from './views/search'

Vue.component('toolBar', toolBar)
Vue.component('tabBar', tabBar)
Vue.component('searchBar', searchBar)
Vue.component('filterButton', filterButton)
Vue.component('thumbnail', thumbnail)
Vue.component('relatedImages', relatedImages)
Vue.component('tagChips', tagChips)
Vue.component('peopleChips', peopleChips)
Vue.component('placesChips', placesChips)
Vue.component('autoComplete', autoComplete)
Vue.component('searchView', searchView)

//Views
import gallery from './views/gallery'
Vue.component('gallery', gallery)

Vue.use(VueMaterial)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
import { store } from './store/store.js'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
})
