<template lang="html">
  <div class="">
  <md-toolbar class="md-dense">
    <md-layout>
      <md-layout md-align="start" md-flex="85">
        <md-layout md-flex=10 v-if="!getThumbnailActive">
          <md-icon class="displayIcon md-size-2x">{{displayIcon}}</md-icon>
        </md-layout>
        <md-layout md-flex=20 v-if="getThumbnailActive">
          <img v-bind:src="getThumbnailSrc" alt="" class="thumbnailImage">
        </md-layout>
        <md-layout>
          <h1 style="flex: 1, float: left" class="searchTerms">{{searchTerm}}</h1>
        </md-layout>
      </md-layout>
      <md-layout>
        <h1 style="flex: 1, margin: auto 0" class="searchTerms">{{ getMatchedImages.length }} Photos</h1>
        <!-- <md-button class="md-icon-button" md-align="end" style="float:right, position: relative, margin: 0">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button> -->
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
      'getSearchTerm',
      'getThumbnailSrc',
      'getThumbnailActive'
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
    // this.retrieveData();
    if(typeof this.getSearchTerm === 'object'){
      this.searchTerm = this.getSearchTerm.join(', ')
    } else {
      this.searchTerm = this.getSearchTerm
    }
  }
}
</script>

<style lang="css" scoped>
.md-dense {
  background: #fff !important;
  color: #9FA9BA;
}

.displayIcon {
  margin: 5px;
}
.md-icon-button {
  margin: 6px 8px;
}

.thumbnailImage {
  width: 120px;
  height: 100px;
  padding-left: 20px;
  padding-top: 20%;
}

.searchTerms {
  line-height: 110%;
}
</style>
