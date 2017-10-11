<template lang="html">
  <div class="container" v-on:click="selectImage">
    <img v-bind:src="thumbnailSrc" alt="">
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
      this.$router.push('image/1')
    }
  }
}
</script>

<style lang="css">
.container{
  width: 230px;
}

/* resize images */
.container img {
  width: 100%;
  height: auto;
}
</style>
