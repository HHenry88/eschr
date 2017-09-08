import Vue from 'vue'
import ToolBar from '@/components/toolBar'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

describe('ToolBar.vue', () => {
  it('should have eight list items', () => {
    const Constructor = Vue.extend(ToolBar)
    const vm = new Constructor().$mount()
    expect(vm.$el.getElementsByTagName('span').length).to.equal(8);
  })
})
