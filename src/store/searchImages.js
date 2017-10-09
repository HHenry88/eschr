import Vue from 'vue'

const searchImages = {
  state:{
    matchedImages: [],
    searchTerm: ''
  },
  getters: {
    getMatchedImages: state => state.matchedImages,
    getSearchTerm: state => state.searchTerm
  },
  mutations: {
    sortMatchedImages: (state, payload) => {
      state.searchTerm = payload;
      let query;
      if(typeof payload === 'object') {
        query = payload.join(',')
        this.searchTerm = payload.join(', ')
      } else {
        query = payload
      }
      Vue.axios.get(`http://search.eschr.com/demo/_search?q=keywords:${query}`)
        .then((data) => {
          state.matchedImages = data.data.hits.hits;
        })
        .catch((err) => {
          console.warn(err);
        })
    }
  },
  actions:{
    retrieveMatchedImages: (context, payload) => {
      context.commit('sortMatchedImages', payload)
    }
  }
}

export default searchImages;
