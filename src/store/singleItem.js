const singleItem = {
  state: {
    singleImageSrc:{},
    singleImage: {}
  },
  getters: {
    getSingleImageSrc: state => state.singleImageSrc,
    getSingleImage: state => state.singleImage
  },
  mutations: {
    changeSingleImage: (state, payload) => {
      state.singleImageSrc = payload.imageSrc;
      state.singleImage = payload.image;
    }
  },
  actions: {
    selectSingleItem: (context, payload) => {
      context.commit('changeSingleImage', payload);
      context.dispatch('retrieveCoordinates', payload.image);
    }
  }
}

export default singleItem
