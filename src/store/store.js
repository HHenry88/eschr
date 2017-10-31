import Vue from 'vue'
import Vuex from 'vuex'
import filterStore from './filterStore'
import searchTerms from './searchTerms'
import singleItem from './singleItem'
import relatedImages from './relatedImages'
import searchImages from './searchImages'
import singleItemMap from './singleItemMap'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    filterStore,
    searchTerms,
    singleItem,
    relatedImages,
    searchImages,
    singleItemMap
  }
})
