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
      state.searchTerm = payload.searchterm;
      const newImages = payload.responseData.filter((obj) => {
        return obj._source.keywords.includes(payload.searchterm)
      })

      state.matchedImages = newImages;
    }
  },
  actions:{
    retrieveMatchedImages: (context, payload) => {
      context.commit('sortMatchedImages', {
        searchterm: payload,
        responseData: context.rootState.elasticSearch.responseData
      })
    }
  }
}

export default searchImages;
