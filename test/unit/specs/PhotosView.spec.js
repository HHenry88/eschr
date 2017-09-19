import Vue from 'vue'
import photosView from '@/components/photosView'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

describe('photosView.vue', () => {
  it('should return an object', () => {
    before(() => {
      // const Constructor = Vue.extend(photosView)
      // const vm = new Constructor().$mount()
      photosView.created();
    })
    expect(typeof photosView.data().responseData).to.be.an('object');
  })
})
