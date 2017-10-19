<template lang="html">
  <div>
    <toolBar></toolBar>
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
import { store } from '../store/store'
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
      'changeSingleItem',
      'retrieveSingleItemByParams'
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
     if (typeof this.getSearchTerm === 'object'){
      this.searchTerm = this.getSearchTerm.join(', ')
    } else {
      this.searchTerm = this.getSearchTerm
    }
  },
  beforeRouteEnter( to, from, next) {
    if(!from.name){
      store.dispatch('retrieveSingleItemByParams', to.params.id)
      .then((data) => {
        next();
      })
    } else {
      next();
    }
  }
}
</script>

<style lang="css" scoped>
  .single-item-container {
    margin-top: 6em;
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
      max-width:1200px;
    }
  }

</style>
