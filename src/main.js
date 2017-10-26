// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueProgress from 'vue-progress'
import Vue2TouchEvents from 'vue2-touch-events'
import VueElastic from 'vue-elasticsearch'
import 'vue-elasticsearch/dist/vue-elasticsearch.css'

//Components
import toolBar from './components/toolBar'
import tabBar from './components/tabBar'
import searchBar from './components/searchBar'
import filterButton from './components/filterButton'
import thumbnail from './components/thumbnail'
import relatedImages from './components/relatedImages'
import tags from './components/tags'
import tagChips from './components/tagChips'
import people from './components/people'
import colors from './components/colors'
import dateTime from './components/dateTime'
import location from './components/location'
import autoComplete from './components/autoComplete'
import searchView from './views/search'

Vue.component('toolBar', toolBar)
Vue.component('tabBar', tabBar)
Vue.component('searchBar', searchBar)
Vue.component('filterButton', filterButton)
Vue.component('thumbnail', thumbnail)
Vue.component('relatedImages', relatedImages)
Vue.component('tags', tags)
Vue.component('tagChips', tagChips)
Vue.component('people', people)
Vue.component('colors', colors)
Vue.component('dateTime', dateTime)
Vue.component('location', location)
Vue.component('autoComplete', autoComplete)
Vue.component('searchView', searchView)

//Views
import gallery from './views/gallery'
Vue.component('gallery', gallery)

Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
Vue.use(VueProgress)
Vue.use(Vue2TouchEvents, {
    disableClick: true,
    touchClass: '',
    tapTolerance: 10,
    swipeTolerance: 100,
})

Vue.use(VueElastic, {
  suggest: {
    host: 'https://search-eschr-tyiqhwx3brb5tglcxbocehuvda.eu-west-1.es.amazonaws.com',
    index: 'test',
    type: 'suggestions'
  },
  search: {
    host: 'https://search-eschr-demo-kokjqkr3h4rrpfcwbrqzdrdhbu.ap-southeast-1.es.amazonaws.com',
    index: 'test',
    type: 'tags'
  }
})

Vue.config.productionTip = false



/* eslint-disable no-new */
import { store } from './store/store.js'

Vue.material.inkRipple = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
}).$mount('#app')
