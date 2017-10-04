<template lang="html">
  <div class="">

  <md-toolbar class="md-dense">
    <md-layout md-align="start">
      <md-icon class="displayIcon md-size-2x">{{displayIcon}}</md-icon>
      <h2 style="flex: 1, float: left">{{subject}}</h2>
    </md-layout>
    <md-layout md-align="end">
      <h2 style="flex: 1,float: right">{{ getData.length }} Photos</h2>
      <md-button class="md-icon-button" md-align="end" style="float:right, position: relative, margin: 0">
        <md-icon>keyboard_arrow_right</md-icon>
      </md-button>
    </md-layout>
  </md-toolbar>
  <galleryComponent v-bind:images="getData"></galleryComponent>
  <filterButton></filterButton>
</div>
</template>

<script>
import Vue from 'vue'
import galleryComponent from '../components/galleryComponent.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'gallery',
  components :{
    'galleryComponent': galleryComponent
  },
  computed: {
    ...mapGetters([
      'getData'
    ])
  },
  methods:{
    ...mapActions([
      'retrieveData'
    ])
  },
  data(){
    return {
      displayIcon: 'portrait',
      subject: 'Taylor Host',
    }
  },
  created(){
    this.retrieveData();
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
