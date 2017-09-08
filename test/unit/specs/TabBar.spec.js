import Vue from 'vue'
import TabBar from '@/components/tabBar'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

describe('TabBar.vue', () => {
  it('should render four tabs', () => {
    const Constructor = Vue.extend(TabBar)
    const vm = new Constructor().$mount()
    expect(vm.$el.getElementsByClassName('md-tab').length)
      .to.equal(4);
  })
})
