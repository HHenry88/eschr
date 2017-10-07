import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/mainpage'
import singleItem from '@/views/singleItem'
import demo from '@/views/demo'
import demoDrillDown from '@/views/demoDrillDown'

Vue.use(Router)

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
