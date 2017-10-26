<template lang="html">
  <div class="thumbnails" v-on:click="selectImage">
    <img v-bind:src="thumbnailSrc" alt="" class="thumbnail-img">
  </div>
</template>

<script>
import {mapActions } from 'vuex'
import {store} from '../store/store'
import Vue from 'vue'
import { fullImage, thumbnailImage } from '../images.config.inc.js'

export default {
  name: 'thumbnail',
  props: ['image', 'index'],
  data(){
    return {
      thumbnailSrc: `${thumbnailImage}${this.image._source.resource_id}.jpg`,
      imgSrc: `${fullImage}${this.image._source.resource_id}.jpg`,
      currentIndex: this.index
    }
  },
  methods: {
    ...mapActions([
      'selectSingleItem'
    ]),
    selectImage: function() {
      store.dispatch('selectSingleItem', {
        imageSrc: this.imgSrc,
        image: this.image,
        currentIndex: this.currentIndex
      });
      this.$router.push({name: 'singleItem', params: {id: this.image._source.resource_id} })
    }
  }
}
</script>

<style lang="css" scoped>
.thumbnails{
  width: 100%;
}

.thumbnails:hover{
  cursor: pointer;
}

.thumbnail-img {
  width: 100%;
}

/* resize images */
/*.thumbnails img {
  width: 100%;
  height: auto;
}*/
</style>
