import Vue from 'vue'
import Vuex from 'vuex'
import filterStore from './filterStore'
import searchTerms from './searchTerms'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    responseData:{},
  },
  getters: {
    getData:(state) => {
      return state.responseData
    }
  },
  mutations: {
    responseData:(state, payload) => {
      state.responseData = payload
    }
  },
  actions:{
    retrieveData: (context)=> {
      Vue.axios.get('http://search.eschr.com/images/_search')
        .then((data) => {
          context.commit('responseData', data.data.hits.hits)
        })
        .catch((err) => {
          console.warn(err);
        })
    }
  },
  modules: {
    filterStore,
    searchTerms
  }
})
