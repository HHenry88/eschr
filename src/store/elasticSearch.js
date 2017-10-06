import Vue from 'vue'

const elasticSearch = {
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
}

export default elasticSearch
