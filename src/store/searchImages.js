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

      Vue.axios.get(`http://search.eschr.com/demo/_search?q=keywords:${payload}`)
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
