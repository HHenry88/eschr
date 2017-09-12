<template lang="html">
  <div class="">

  <md-toolbar class="md-dense">
    <md-layout md-align="start">
      <md-icon class="displayIcon md-size-2x">{{displayIcon}}</md-icon>
      <h2 style="flex: 1, float: left">{{subject}}</h2>
    </md-layout>
    <md-layout md-align="end">
      <h2 style="flex: 1,float: right">{{photoQuantity}} Photos</h2>
      <md-button class="md-icon-button" md-align="end" style="float:right, position: relative, margin: 0">
        <md-icon>keyboard_arrow_right</md-icon>
      </md-button>
    </md-layout>
  </md-toolbar>
  <galleryView v-bind:images="responseData"></galleryView>
</div>
</template>

<script>
import Vue from 'vue'
import galleryView from './galleryView.vue';
export default {
  components :{
    'galleryView': galleryView
  },
  data(){
    return {
      displayIcon: 'portrait',
      subject: 'Taylor Host',
      photoQuantity: 50,
      responseData: []
    }
  },
  created(){
    Vue.axios.get('http://search.eschr.com/images/_search')
      .then((data) => {
        this.photoQuantity = data.data.hits.hits.length
        this.responseData = data.data.hits.hits
      })
      .catch((err) => {
        console.warn(err);
      })
  }
}
</script>

<style lang="css" scoped>
.displayIcon {
  margin: 5px;
}
.md-icon-button {
  margin: 6px 8px;
}
</style>
