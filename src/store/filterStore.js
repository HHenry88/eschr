const filterStore = {
  state:{
    orientation: 1,
    people: 1,
    timeOfDay: 1,
    colors: {},
    dates: [],
    things: []
  },
  mutations: {
    changeFilters: (state, payload) => {
      for(var key in state){
        if(payload.filterKey === key){
          state[key] = payload.filterValue
          //do a new elastic search to change find values
        }
      }
      console.log('filterStore',this);
    }
  },
  actions: {
    editFilters: (context, payload) => {
      context.commit('changeFilters', payload)
    }
  },
  getters: {
    getFilters: state => state
  }
}

export default filterStore
