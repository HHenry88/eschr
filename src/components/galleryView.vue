<template lang="html">
  <md-layout :md-gutter="8">
    <md-card>
      <md-card-media v-for="(image,key) in images" :key="key">
    <!-- <img src="assets/card-image-1.jpg" alt="People"> -->
        <p>{{image._id}}</p>
      </md-card-media>
    </md-card>
  </md-layout>
</template>

<script>
export default {
  props:['images']
}
</script>

<style lang="css">
</style>
