<template lang="html">
  <div class="">
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button">
        <router-link to="/"><md-icon class="md-size-3x">keyboard_arrow_left</md-icon></router-link>
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

  .md-icon-button {
    font-size: 40px;
    height: 100px !important;
  }
</style>
