import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Main from '@/components/mainpage'
import singleItem from '@/views/singleItem'
import demo from '@/views/demo'
import demoDrillDown from '@/views/demoDrillDown'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'

Vue.use(Router);
Vue.use(BootstrapVue);

/* top level filters - should probably be included from elsewhere */
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('LLLL')
  }
});

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'mainpage',
    //   component: Main
    // },
    {
      path: '/image/:id',
      name: 'singleItem',
      component: singleItem
    },
    {
      path:'/',
      name: 'demo',
      component: demo
    },
    {
      path: '/results/:tags',
      name: demoDrillDown,
      component: demoDrillDown
    }
  ]
})
