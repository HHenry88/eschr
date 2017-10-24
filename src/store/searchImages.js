import Vue from 'vue'
import router from '../router/index'

const searchImages = {
  state:{
    matchedImages: [],
    searchTerm: '',
    imagesCount: 0,
    size: 100,
    from: 0,
    query: []
  },
  getters: {
    getMatchedImages: state => state.matchedImages,
    getSearchTerm: state => state.searchTerm,
    getImagesCount: state => state.imagesCount,
  },
  mutations: {
    sortMatchedImages: (state, payload) => {
      state.searchTerm = payload.result;
      state.from = 0;
      if(typeof payload.result === 'object') {
        state.query = payload.result
        state.searchTerm = payload.result.join(', ')
      } else {
        state.query = [];
        state.query.push(payload.result);
      }
      Vue.axios.post(`https://search-eschr-demo-kokjqkr3h4rrpfcwbrqzdrdhbu.ap-southeast-1.es.amazonaws.com/test/tags/_search`,
        {
          size: state.size,
          "query" : {
            "terms" : {
              "keywords" : state.query
            }
          },
          from: 0,
        })
        .then((data) => {
          state.from += 100;
          state.imagesCount= data.data.hits.total;
          state.matchedImages = data.data.hits.hits;
          router.push(`/search/tags/${state.query}`)
        })
        .catch((err) => {
          console.warn(err);
        })
    },
    retrieveMoreMatchedImages: (state) => {
      Vue.axios.post(`https://search-eschr-demo-kokjqkr3h4rrpfcwbrqzdrdhbu.ap-southeast-1.es.amazonaws.com/test/tags/_search`,
        {
          size: state.size,
          "query" : {
            "terms" : {
              "keywords" : state.query
            }
          },
          from: state.from,
        })
        .then((data) => {
          state.from += 100;
          state.matchedImages = state.matchedImages.concat(data.data.hits.hits);
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
    },
    retrieveMoreImagesOfSearchTerm: (context) => {
      context.commit('retrieveMoreMatchedImages')
    }
  }
}

export default searchImages;
