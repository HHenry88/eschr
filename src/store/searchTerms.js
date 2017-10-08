const searchTerms = {
  state: {
    keywords: [{name: "apple"}],
    searchTerm: '',
    keywordsTracker: ['apple', 'banana']
  },
  getters: {
    getKeywords: state => state.keywords,
    getKeywordsTracker: state => state.keywordsTracker
  },
  mutations: {
    sortKeywords:(state, payload) => {
      //sort keywords into an array to display on autocomplete
      const keywords = [];
      const keywordsTracker = [];
      const keywordArrays = payload.map((item, index) => {
        item._source.keywords.forEach((keyword)=> {
          if(!keywordsTracker.includes(keyword)) {
            keywords.push({name:keyword})
            keywordsTracker.push(keyword);
          }
        })
      });
      state.keywords = keywords;
      state.keywordsTracker = keywordsTracker;
    }
  },
  actions: {
    retrieveKeywords:(context) => {
      // on load get search terms to auto complete with.
      context.commit('sortKeywords', context.rootState.elasticSearch.responseData);
    }
  }
}

export default searchTerms
