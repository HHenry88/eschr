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
      state.searchTerm = payload.result;
      let query;
      if(typeof payload.result === 'object') {
        query = payload.result.join(',')
        this.searchTerm = payload.result.join(', ')
      } else {
        query = payload.result
      }
      Vue.axios.get(`https://search-eschr-demo-kokjqkr3h4rrpfcwbrqzdrdhbu.ap-southeast-1.es.amazonaws.com/demo/image/_search?q=keywords:${query}`)
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
      if(payload.thumbnail === false){
        context.dispatch('turnOffThumbnail' )
      }
    }
  }
}

export default searchImages;
