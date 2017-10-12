<template lang="html">
  <div class="single-item-container">
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button" >
      <router-link to="/demodrilldown">
          <md-icon class="md-size-3x">keyboard_arrow_left</md-icon>
      </router-link>
      </md-button>
      <h1 class="md-title searchKeyword" style="flex: 1, float: left">{{searchTerm}}</h1>
    </md-toolbar>

    <img v-bind:src="getSingleImageSrc" alt="">
    <tags v-bind:chips="getSingleImage._source.people" bgcolor="#9DC4B6" icon="account_circle"></tags>
    <tags v-bind:chips="getSingleImage._source.places" bgcolor="#0193DC" icon="location_on"></tags>
    <tags v-bind:chips="getSingleImage._source.keywords" bgcolor="lightgrey" icon="label"></tags>
    <!-- <singleItemMap></singleItemMap> -->
    <!-- <relatedImages></relatedImages> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import singleItemMap from '../components/singleItemMap'

export default {
  data(){
    return{
      singleItem: '',
      searchTerm: ''
    }
  },
  methods: {
    ...mapActions([
      'changeSingleItem'
    ])
  },
  computed: {
    ...mapGetters([
      'getSingleImageSrc',
      'getSingleImage',
      'getSearchTerm',
    ])
  },
  components:{
    'singleItemMap': singleItemMap
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

<style lang="css" scoped>
  .md-dense {
    background-image: linear-gradient(-131deg, #00C5F0 0%, #3B51AD 100%);
  }

  .md-icon-button {
    font-size: 40px;
    height: 100px !important;
    border-radius: 0%;
  }

  .md-icon {
    color: #fff;
  }

  .searchKeyword {
    font-size: 3em;
    margin-left: 1em;
  }
</style>
