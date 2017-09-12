<template>
  <div class="hello">
    <toolBar></toolBar>
    <searchBar></searchBar>
    <tabBar></tabBar>
    <filterButton></filterButton>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100em;
}
</style>
