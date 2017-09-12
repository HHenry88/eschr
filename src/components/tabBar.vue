<template id="tabBar">
  <md-tabs md-fixed>
    <md-tab id="time" md-label="TIME">
      <photosView></photosView>
    </md-tab>

    <md-tab id="people" md-label="PEOPLE">
      <photosView></photosView>
    </md-tab>

    <md-tab id="places" md-label="PLACES">
      <photosView></photosView>
    </md-tab>

    <md-tab id="things" md-label="THINGS">
      <photosView></photosView>
    </md-tab>
  </md-tabs>
</template>

<script>
  export default {
    name: 'tabBar',
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
