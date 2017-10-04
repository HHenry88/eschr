<template>
  <div class="hello">
    <md-layout class="header" md-gutter>
      <md-layout>
        <toolBar></toolBar>
      </md-layout>
      <md-layout>
        <searchBar></searchBar>
      </md-layout>
    </md-layout>
    <tabBar></tabBar>
  </div>
</template>

<script>
export default {
  name: 'mainpage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 100em;
  }

  .header {
    height: 55px;
  }
</style>
