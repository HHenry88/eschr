<template id="tabBar">
  <md-tabs md-fixed>
    <md-tab id="time" md-label="TIME">
      <gallery name="time"></gallery>
    </md-tab>

    <md-tab id="people" md-label="PEOPLE">
      <gallery name="people"></gallery>
    </md-tab>

    <md-tab id="places" md-label="PLACES">
      <gallery name="places"></gallery>
    </md-tab>

    <md-tab id="things" md-label="THINGS">
      <gallery name="things"></gallery>
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
