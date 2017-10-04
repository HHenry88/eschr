<template lang="html">

  <!-- <p>{{image._source.resource_id}}</p> -->
  <div class="container" v-on:click="selectImage">
    <img v-bind:src="imgSrc" alt="">
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
      imgSrc: `https://s3-eu-west-1.amazonaws.com/eschr-test-development/SOURCE/${this.image._source.resource_id}.jpg`
    }
  },
  methods: {
    ...mapActions([
      'selectSingleItem'
    ]),
    selectImage: function() {
      store.dispatch('selectSingleItem', this.imgSrc);
      this.$router.push('image/1')
    }
  }
}
</script>

<style lang="css">
.container{
  width: 187px;
  height: 120px;
}

/* resize images */
.container img {
  width: 100%;
  height: auto;
}
</style>
