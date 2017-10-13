<template lang="html">
  <div class="">
      <b-container fluid class="toolbar ">
        <b-row align-v="top" class="searchInfoBar">
          <b-col sm="9" lg="10">
            <md-icon class="displayIcon md-size-2x" style="" v-if="!getThumbnailActive">{{displayIcon}}</md-icon>
            <img v-bind:src="getThumbnailSrc" alt="" class="thumbnailImage"  v-if="getThumbnailActive">
            <span style="flex: 1, float: left" class="searchTerms title">{{searchTerm}}</span>
          </b-col>
          <b-col lg="2" sm="3">
            <p style="flex: 1, margin: auto 0; margin-right: 20px;float:right" class="title">{{ getMatchedImages.length }} Photos</p>
          </b-col>
        </b-row> 
      </b-container>
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
      displayIcon: 'local_offer',
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
  
.toolbar {
  margin-top:-68px; 
  margin-left:40px;
  text-align: center;
}
  
.md-dense {
  background: #fff !important;
  color: #9FA9BA;
  min-height: 6em;
}

.searchInfoBar {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  text-align: center;
  vertical-align: middle;
  height:auto;
  color: white;
}

.displayIcon {
    margin-top:-6px;
    vertical-align: center;
}
.md-icon-button {
    margin: 6px 8px;
}

.thumbnailImage {
    padding-left: 20px;
    padding-top: 20%;
}

.searchTerms {
    text-transform: uppercase;
}

.title {
  font-size: 2em;
  white-space:nowrap;
}

@media only screen  and (min-width : 1224px) {
  .searchTerms {
    padding: 0 1em;
  }
}
</style>
