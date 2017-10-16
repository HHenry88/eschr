import Vue from 'vue'

const searchTerms = {
  state: {
    keywords: [],
    searchTerm: '',
    thumbnailSrc: '',
    thumbnailActive: false,
  },
  getters: {
    getKeywords: state => state.keywords,
    getThumbnailSrc: state => state.thumbnailSrc,
    getThumbnailActive: state => state.thumbnailActive,
  },
  mutations: {
    sortKeywords:(state, payload) => {
      //sort keywords into an array to display on autocomplete
        Vue.axios.post(`https://search-eschr-tyiqhwx3brb5tglcxbocehuvda.eu-west-1.es.amazonaws.com/test/suggestions/_search`, {
            "suggest": {
                "tag-suggest" : {
                    "prefix" : payload,
                    "completion" : {
                        "field" : "text"
                    }
                }
            }
        })
        .then((data) => {
          state.keywords = data.data.suggest['tag-suggest'][0].options.map((option) => {
            return {text: option.text, score: option._score}
          });
        })
        .catch((err) => {
          console.warn(err);
        })
    },
    setThumbnailSrc:(state, payload) => {
      state.thumbnailSrc = payload
      state.thumbnailActive = true;
    },
    setThumbnailUnActive:(state) => {
      state.thumbnailActive = false;
    }
  },
  actions: {
    retrieveKeywords:(context, payload) => {
      // on load get search terms to auto complete with.
      context.commit('sortKeywords', payload);
    },
    retrieveThumbnail:(context, payload) => {
      context.commit('setThumbnailSrc', payload)
    },
    turnOffThumbnail: (context) => {
      context.commit('setThumbnailUnActive')
    }
  }
}

export default searchTerms
