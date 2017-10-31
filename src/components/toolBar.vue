<template>
  <b-container fluid class="tool-bar">
    <b-row align-v="center" class="tool-bar-row">
      <b-col cols="2" v-if="!!getSearchTerm">
        <div class="" v-on:click="backButton">
          <md-icon class="md-size-3x" style="color:white;">keyboard_arrow_left</md-icon>
        </div>
      </b-col>
      <b-col cols="2" v-if="!getSearchTerm">
        <div class="" v-on:click="homeButton">
          <md-icon class="md-size-3x" style="color:white;">home</md-icon>
        </div>
      </b-col>
      <b-col cols="8" v-if="!!getSearchTerm">
        <p class="searchTerms title"><md-icon class="displayIcon md-size-2x" style="" v-if="!getThumbnailActive">{{displayIcon}}</md-icon>
        <img v-bind:src="getThumbnailSrc" alt="" class="thumbnailImage"  v-if="getThumbnailActive"> &nbsp;
          {{searchTerm}}
        </p>
      </b-col>
      <b-col cols="8" align-self="center" class="text-center" v-if="!getSearchTerm" id="toolbar-miro">
        <img src="../../static/img/miro-visual-search-as-a-service.png" alt="miro" class="miro-logo" />
      </b-col>
      <b-col cols="2" v-if="!!getSearchTerm">
        <p class="photo-count">{{ getImagesCount }} Photos</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Vue from 'vue'
  export default {
    name: 'toolBar',
    data(){
      return {
        searchTerm: '',
        displayIcon: 'local_offer',
      }
    },
    computed:{
      ...mapGetters([
        'getThumbnailSrc',
        'getThumbnailActive',
        'getMatchedImages',
        'getSearchTerm',
        'getImagesCount'
      ])
    },
    methods: {
      backButton: function() {
        console.log(this.$router);
        this.$router.go(-1)
      },
      homeButton: function() {
        this.$router.push('/');
      }
    },
    created(){
      if(typeof this.getSearchTerm === 'object'){
        this.searchTerm = this.getSearchTerm.join(', ')
      } else {
        this.searchTerm = this.getSearchTerm
      }
    }
  }
</script>

<style scoped>
  .tool-bar {
    background-image: linear-gradient(-131deg, #00C5F0 0%, #3B51AD 100%);
    height: 6em;
    color: #fff;
    position: fixed;
    z-index: 1;
    top: 0px;
    bottom: 0px;
  }

  .tool-bar-row {
    height: 100%;
  }

  #toolbar-miro {

  }

  .miro-logo {
    width: 8em;
    opacity: 0.9;
  }

  .thumbnailImage {
    margin-top:-10px;
    width:60px;
    height:60px;
    float:left;
  }

  .searchTerms {
    text-transform: uppercase;
    white-space: nowrap;
  }

  .title {
    font-size: 2em;
    white-space:nowrap;
    overflow-x: hidden;
    margin-top: 0.5em;
    text-overflow: ellipsis;
  }

  .photo-count {
    font-size: 1.5em;
    margin-top: 0.5em;
  }

  .router-link-active {
    text-decoration: none;
  }
</style>
