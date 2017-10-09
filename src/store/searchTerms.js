const searchTerms = {
  state: {
    keywords: [{name: "apple"}],
    searchTerm: '',
    keywordsTracker: ['apple', 'banana'],
    thumbnailSrc: '',
    thumbnailActive: false,
    hardCoded: [

    ]
  },
  getters: {
    getKeywords: state => state.keywords,
    getKeywordsTracker: state => state.hardCoded,
    getThumbnailSrc: state => state.thumbnailSrc,
    getThumbnailActive: state => state.thumbnailActive,
  },
  mutations: {
    sortKeywords:(state, payload) => {
      //sort keywords into an array to display on autocomplete
      const keywords = [];
      const keywordsTracker = [];
      // const keywordsTracker = [];
      // const keywordArrays = payload.map((item, index) => {
      //   item._source.keywords.forEach((keyword)=> {
      //     if(!keywordsTracker.includes(keyword)) {
      //       keywords.push({name:keyword})
      //       keywordsTracker.push(keyword);
      //     }
      //   })
      // });

      // state.hardCoded.forEach((item) => {
      //   keywords.push({name:item})
      // })

      // state.keywords = keywords;
      state.keywordsTracker = keywordsTracker;
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
    retrieveKeywords:(context) => {
      // on load get search terms to auto complete with.
      context.commit('sortKeywords');
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
