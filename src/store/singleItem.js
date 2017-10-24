import Vue from 'vue'

const singleItem = {
  state: {
    singleImageSrc:{},
    singleImage: {},
    currentIndex: 0,
  },
  getters: {
    getSingleImageSrc: state => state.singleImageSrc,
    getSingleImage: state => state.singleImage,
    getCurrentIndex: state => state.currentIndex
  },
  mutations: {
    changeSingleImage: (state, payload) => {
      state.singleImageSrc = payload.imageSrc;
      state.singleImage = payload.image;
      state.currentIndex = payload.currentIndex;
    },
  },
  actions: {
    selectSingleItem: (context, payload) => {
      context.commit('changeSingleImage', payload);
      context.dispatch('retrieveCoordinates', payload.image);
    },
    retrieveSingleItemByParams: (context, payload) => {
      Vue.axios.get(`https://search-eschr-demo-kokjqkr3h4rrpfcwbrqzdrdhbu.ap-southeast-1.es.amazonaws.com/test/tags/${payload}`)
        .then((data) => {
          const newImage = {
            image: data.data,
            imageSrc: `https://demoimg.miro.io/full/${data.data._source.resource_id}.jpg`,
            currentIndex: payload.currentIndex
          }

          context.commit('changeSingleImage', newImage);
        })
        .catch((err) => {
          console.warn(err);
        })
    }
  }
}

export default singleItem
