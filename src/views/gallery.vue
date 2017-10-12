<template lang="html">
  <div class="">
  <md-toolbar class="md-dense">
      <b-row align-v="center" class="searchInfoBar">
        <b-col cols="2" v-if="!getThumbnailActive">
          <md-icon class="displayIcon md-size-2x">{{displayIcon}}</md-icon>
        </b-col>
        <b-col cols="2" v-if="getThumbnailActive">
          <img v-bind:src="getThumbnailSrc" alt="" class="thumbnailImage">
        </b-col>
        <b-col cols="8">
          <h1 style="flex: 1, float: left" class="searchTerms">{{searchTerm}}</h1>
        </b-col>
      <b-col cols="2">
        <h1 style="flex: 1, margin: auto 0" class="photo-quantity">{{ getMatchedImages.length }} Photos</h1>
        <!-- <md-button class="md-icon-button" md-align="end" style="float:right, position: relative, margin: 0">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button> -->
      </b-col>
      </b-row>
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
  min-height: 6em;
}

.searchInfoBar {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}

.displayIcon {
    margin: 5px;
}
.md-icon-button {
    margin: 6px 8px;
}

.thumbnailImage {
    padding-left: 20px;
    padding-top: 20%;
}

.searchTerms {
    line-height: 110%;
}

.photo-quantity {
    font-size: 2em;
}

@media only screen  and (min-width : 1224px) {
  .searchTerms {
    padding: 0 1em;
  }
}
</style>
