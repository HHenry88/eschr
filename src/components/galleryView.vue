<template lang="html">
  <md-layout>
    <md-card v-for="(image,key) in images" :key="key" md-with-hover>
      <md-card-media>
        <thumbnail v-bind:image='image'></thumbnail>
      </md-card-media>
    </md-card>
  </md-layout>
</template>

<script>
export default {
  name: 'galleryView',
  props:['images']
}
</script>

<style lang="css">
</style>
