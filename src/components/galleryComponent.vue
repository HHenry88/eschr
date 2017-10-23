<template lang="html">
  <b-container fluid class="search_result">
    <b-row class='thumbnails-layout'>
      <b-col cols="*" sm="5" md="3" lg="2" v-for="(image,key) in images" :key="key" md-with-hover class="thumbnailcols">
          <thumbnail v-bind:image='image'></thumbnail>
      </b-col>
      <infinite-loading @infinite="infiniteHandler" spinner="bubbles">
        <span slot='no-more'>
          none left, jamie!
        </span>
      </infinite-loading>
    </b-row>
  </b-container>
</template>

<script>
import infiniteLoading from 'vue-infinite-loading'

export default {
  name: 'galleryComponent',
  props:['images'],
  data(){
    return {
      busy: false
    }
  },
  methods: {
    infiniteHandler($state){
      console.log('loading!');
      setTimeout(()=>{
        console.log('loaded!');
        $state.loaded();
        $state.complete();
      },3000)
    }
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
