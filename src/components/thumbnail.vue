<template lang="html">

  <!-- <p>{{image._source.resource_id}}</p> -->
  <div class="container">
    <img v-bind:src="imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: 'thumbnail',
  props: ['image'],
  data(){
    return {
      imgSrc: `https://s3-eu-west-1.amazonaws.com/eschr-test-development/SOURCE/${this.image._source.resource_id}.jpg`
    }
  }
}
</script>

<style lang="css">
.container{
  width: 187px;
  height: 120px;
}

/* resize images */
.container img {
  width: 100%;
  height: auto;
}
</style>
