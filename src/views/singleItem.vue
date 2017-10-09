<template lang="html">
  <div class="single-item-container">
    <md-toolbar class="md-dense">
      <router-link to="/demodrilldown">
        <md-button class="md-icon-button" >
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </router-link>
      <h2 class="md-title" style="flex: 1, float: left">{{searchTerm}}</h2>
    </md-toolbar>

    <img v-bind:src="getSingleImageSrc" alt="">
    <peopleChips></peopleChips>
    <placesChips></placesChips>
    <tagChips></tagChips>
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
  .single-item-container {
    padding: 0.5%;
  }

  img {
    margin-top: 5%;
    border: 1px solid grey;
  }
</style>
