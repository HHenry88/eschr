<template lang="html">
  <div class="gallery">
    <galleryComponent v-bind:images="getMatchedImages"></galleryComponent>
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
      searchTerm: ''
    }
  },
  created(){
    console.log(this.$route);
  }
}
</script>

<style lang="css" scoped>

.gallery {
  margin-top: 6em;
}

@media only screen  and (min-width : 1224px) {
  .searchTerms {
    padding: 0 1em;
  }
}
</style>
