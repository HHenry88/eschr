<template lang="html">
  <md-layout class='thumbnails-layout'>
    <md-card v-for="(image,key) in images" :key="key" md-with-hover>
      <md-card-media>
        <thumbnail v-bind:image='image'></thumbnail>
      </md-card-media>
    </md-card>
  </md-layout>
</template>

<script>
export default {
  name: 'galleryComponent',
  props:['images']
}
</script>

<style lang="css" scoped>
  .thumbnails-layout {
    padding: 0.3em 1.1em 0 1.1em;
  }
</style>
