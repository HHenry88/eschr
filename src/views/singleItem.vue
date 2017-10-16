<template lang="html">
  <div  style="margin-top: 6em;">
    <md-toolbar class="toolbar" style="position:fixed; width:100%; margin-top:-6em;">
      <md-button class="md-icon-button" >
      <router-link to="/demodrilldown">
          <md-icon class="md-size-3x">keyboard_arrow_left</md-icon>
      </router-link>
      </md-button>
      <span style="float:left; flex:1">
        <md-icon class="displayIcon md-size-2x">{{displayIcon}}</md-icon>
        <span class="md-title searchKeyword" style="text-transform: uppercase; font-size: 2em">{{searchTerm}}</span>
      </span>
    </md-toolbar>
    <b-container class="single-item-container" fluid>
      <img v-bind:src="getSingleImageSrc" alt="" style="width: 100%;">
      <div style="padding-top:50px;"> </div>
      <people></people>
      <tagChips></tagChips>
      <colors></colors>
      <dateTime></dateTime>
      <location></location>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import singleItemMap from '../components/singleItemMap'

export default {
  data(){
    return{
      singleItem: '',
      searchTerm: '',
      displayIcon: 'local_offer'
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
  .toolbar {
    background-image: linear-gradient(-131deg, #00C5F0 0%, #3B51AD 100%);
  }
  
  .displayIcon {
    margin-top:-6px;
    vertical-align: center;
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
    line-height: normal;
  }

  img {
    margin-bottom: 2em;
  }
  .icon img {
  	min-width:1em;
  	max-width:1.5em;
  	float:right;
	}
	
	
  @media only screen  and (min-width : 1224px) {
    .single-item-container {
      max-width:1080px;
    }
  }

</style>
