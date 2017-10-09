<template lang="html">
  <div class="">

  <md-toolbar class="md-dense">
    <md-layout>
      <md-layout md-align="start" md-flex=75>
        <md-layout md-flex=10>
          <md-icon class="displayIcon md-size-2x">{{displayIcon}}</md-icon>
        </md-layout>
        <md-layout>
          <h2 style="flex: 1, float: left">{{searchTerm}}</h2>
        </md-layout>
      </md-layout>
      <md-layout md-align="end">
        <h2 style="flex: 1,float: right">{{ getMatchedImages.length }} Photos</h2>
        <md-button class="md-icon-button" md-align="end" style="float:right, position: relative, margin: 0">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
  </md-toolbar>
  <galleryComponent v-bind:images="getMatchedImages"></galleryComponent>
  <div class="" v-if="routeName !== '/demodrilldown'">
    <filterButton></filterButton>
  </div>
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
      'getMatchedImages',
      'getSearchTerm'
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
      routeName: this.$route.path,
      searchTerm: ''
    }
  },
  created(){
    this.retrieveData();
    if(typeof this.getSearchTerm === 'object'){
      this.searchTerm = this.getSearchTerm.join(', ')
    } else {
      this.searchTerm = this.getSearchTerm
    }
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
