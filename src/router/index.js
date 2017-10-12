import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Main from '@/components/mainpage'
import singleItem from '@/views/singleItem'
import demo from '@/views/demo'
import demoDrillDown from '@/views/demoDrillDown'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue);

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
      path: '/demodrilldown',
      name: demoDrillDown,
      component: demoDrillDown
    }
  ]
})
