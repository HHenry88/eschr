import Vue from 'vue'
import { travelSingleItem } from '../travel.config.inc.js'
import { fullImage } from '../images.config.inc.js'

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
      Vue.axios.get(`${travelSingleItem}${payload}`)
        .then((data) => {
          const newImage = {
            image: data.data,
            imageSrc: `${fullImage}${data.data._source.resource_id}.jpg`,
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
