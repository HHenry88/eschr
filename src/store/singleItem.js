const singleItem = {
  state: {
    singleItem:{}
  },
  mutations: {
    changeSingleItem: (state, payload) => {
      state.singleItem = payload
    }
  },
  getters: {
    getSingleItem: state => state.singleItem
  },
  actions: {
    selectSingleItem: (context, payload) => {
      console.log('this is payload', payload);
      context.commit('changeSingleItem', payload)
    }
  }
}

export default singleItem
