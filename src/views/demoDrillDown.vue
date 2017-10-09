<template lang="html">
  <div class="">
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button">
        <router-link to="/"><md-icon>keyboard_arrow_left</md-icon></router-link>
      </md-button>
    </md-toolbar>
    <gallery></gallery>
  </div>
</template>

<script>

export default {
  name: 'demodrilldown',
  data(){
    return{
      returnedData: {}
    }
  }
}
</script>

<style lang="css">
  .md-icon {
    color: white;
  }
</style>
