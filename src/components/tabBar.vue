<template id="tabBar">
  <md-tabs md-fixed>
    <md-tab id="time" md-label="TIME">
      <photosView name="time"></photosView>
    </md-tab>

    <md-tab id="people" md-label="PEOPLE">
      <photosView name="people"></photosView>
    </md-tab>

    <md-tab id="places" md-label="PLACES">
      <photosView name="places"></photosView>
    </md-tab>

    <md-tab id="things" md-label="THINGS">
      <photosView name="things"></photosView>
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
