<template lang="html">
  <div class="thumbnails" v-on:click="selectImage">
    <img v-bind:src="thumbnailSrc" alt="" class="thumbnail-img">
  </div>
</template>

<script>
import {mapActions } from 'vuex'
import {store} from '../store/store'
import Vue from 'vue'

export default {
  name: 'thumbnail',
  props: ['image'],
  data(){
    return {
      thumbnailSrc: `https://demoimg.miro.io/120_${this.image._source.resource_id}.jpg`,
      imgSrc: `https://demoimg.miro.io/full/${this.image._source.resource_id}.jpg`
    }
  },
  methods: {
    ...mapActions([
      'selectSingleItem'
    ]),
    selectImage: function() {
      store.dispatch('selectSingleItem', {
        imageSrc: this.imgSrc,
        image: this.image
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
