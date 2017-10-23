<template lang="html">
  <b-container fluid class="search_result">
    <b-row class='thumbnails-layout'>
      <b-col cols="*" sm="5" md="3" lg="2" v-for="(image,key) in getMatchedImages" :key="key" md-with-hover class="thumbnailcols">
          <thumbnail v-bind:image='image' v-bind:index="key"></thumbnail>
      </b-col>
      <infinite-loading @infinite="infiniteHandler" spinner="bubbles" :distance="10" force-use-infinite-wrapper="true">
        <span slot='no-more'>

        </span>
      </infinite-loading>
    </b-row>
  </b-container>
</template>

<script>
import infiniteLoading from 'vue-infinite-loading'
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {
  name: 'galleryComponent',
  data(){
    return {

    }
  },
  methods: {
    ...mapActions([
      'retrieveMoreImagesOfSearchTerm'
    ]),
    infiniteHandler($state){
      console.log('infiniteHandler');
      store.dispatch('retrieveMoreImagesOfSearchTerm')
        .then(()=>{
          $state.loaded();
          $state.complete();
        })
    }
  },
  computed:{
    ...mapGetters([
      'getMatchedImages'
    ])
  },
  components: {
    infiniteLoading,
  }
}
</script>

<style lang="css" scoped>
  @media only screen  and (min-width : 1224px) {
    .search_result {
      max-width:1200px;
    }
  }

  @media only screen  and (max-width : 1223px) {
    .search_result {
      min-width:100%;
    }
  }
  .thumbnails-layout {
    padding: 0.3em 0.5em 0 0.5em;
    margin: 0;
  }

  .thumbnailcols {
    padding: 0;
  }
</style>
