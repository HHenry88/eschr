<template lang="html">
  <div class="gallery">
    <galleryComponent v-if="getMatchedImages.length > 0"></galleryComponent>
    <div class="no-matches-found" v-if="getMatchedImages.length === 0">
      <h1>No matches found!</h1>
    </div>
    <!-- <div class="" v-if="routeName !== '/results/'">
      <filterButton></filterButton>
    </div> -->
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
  data(){
    return {
      displayIcon: 'local_offer',
      routeName: this.$route.path,
      searchTerm: '',
      matched: []
    }
  },

}
</script>

<style lang="css" scoped>

.gallery {
  margin-top: 6em;
  min-height: 300px;
}

.no-matches-found {
  margin-top: 10em;
}

@media only screen  and (min-width : 1224px) {
  .searchTerms {
    padding: 0 1em;
  }
}
</style>
