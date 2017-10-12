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
    retrieveData: ({commit, dispatch}, payload)=> {
      Vue.axios.get('https://search-eschr-demo-kokjqkr3h4rrpfcwbrqzdrdhbu.ap-southeast-1.es.amazonaws.com/demo/_search')
        .then((data) => {
          commit('responseData', data.data.hits.hits)
        })
        .catch((err) => {
          console.warn(err);
        })
    }
  },
}

export default elasticSearch
