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
      Vue.axios.get('http://search.eschr.com/demo/_search')
        .then((data) => {
          commit('responseData', data.data.hits.hits)
          if(payload){
            dispatch('retrieveKeywords');
          }
        })
        .catch((err) => {
          console.warn(err);
        })
    }
  },
}

export default elasticSearch
