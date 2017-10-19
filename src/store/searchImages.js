import Vue from 'vue'
import router from '../router/index'

const searchImages = {
  state:{
    matchedImages: [],
    searchTerm: '',
    imagesCount: 0,
  },
  getters: {
    getMatchedImages: state => state.matchedImages,
    getSearchTerm: state => state.searchTerm,
    getImagesCount: state => state.imagesCount,
  },
  mutations: {
    sortMatchedImages: (state, payload) => {
      state.searchTerm = payload.result;
      let query = []
      if(typeof payload.result === 'object') {
        query = payload.result
        state.searchTerm = payload.result.join(', ')
      } else {
        query.push(payload.result)
      }
      Vue.axios.post(`https://search-eschr-demo-kokjqkr3h4rrpfcwbrqzdrdhbu.ap-southeast-1.es.amazonaws.com/test/tags/_search`,
        {
          size: 100,
          "query" : {
            "terms" : {
              "keywords" : query
            }
          }
        })
        .then((data) => {
          state.imagesCount= data.data.hits.total;
          state.matchedImages = data.data.hits.hits;
          router.push(`/search/tags/${query}`)
        })
        .catch((err) => {
          console.warn(err);
        })
    },
    changeSearchTerm: (state, payload) => {
      state.searchTerm = payload;
    }
  },
  actions:{
    retrieveMatchedImages: (context, payload) => {
      context.commit('sortMatchedImages', payload)
      if(payload.thumbnail === false){
        context.dispatch('turnOffThumbnail' )
      }
    },
    setSearchTerm: (context, payload) => {
      context.commit('changeSearchTerm', payload)
    }
  }
}

export default searchImages;
