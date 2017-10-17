<template lang="html">
  <div class="">
    <md-toolbar class="md-dense">
    <div style="height:6em;">
    </div>
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

<style lang="css" scoped>
  .md-dense {
    background-image: linear-gradient(-131deg, #00C5F0 0%, #3B51AD 100%);
  }

  .md-icon {
    color: #fff;
  }

  .md-icon-button {
    font-size: 40px;
    height: 100px !important;
    border-radius: 0%;
  }
</style>
