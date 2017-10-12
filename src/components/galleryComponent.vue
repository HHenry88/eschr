<template lang="html">
  <b-row class='thumbnails-layout'>
    <b-col cols="*" sm="5" md="3" lg="2" v-for="(image,key) in images" :key="key" md-with-hover class="thumbnailcols">
        <thumbnail v-bind:image='image'></thumbnail>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'galleryComponent',
  props:['images']
}
</script>

<style lang="css" scoped>
  .thumbnails-layout {
    padding: 0.3em 0.5em 0 0.5em;
    margin: 0;
  }

  .thumbnailcols {
    padding: 0;
  }
</style>
