<template lang="html">
  <form>
    <md-layout md-row>
      <md-layout md-flex-xsmall>
      <md-input-container class="input-container " v-show="!showSearchBar">
          <button v-on:click="toggleSearchBar"><md-icon class="md-size-2x">search</md-icon></button>
          <md-input class="searchInput" placeholder="Search by text"></md-input>
      </md-input-container>
      </md-layout>
      <md-layout class="icons" md-align="end" md-flex-xsmall>
        <span v-show="showSearchBar" v-on:click="toggleSearchBar"><md-icon class="md-size-2x">search</md-icon></span>
        <md-icon class="md-size-2x">photo</md-icon>
        <md-icon class="md-size-2x">camera_alt</md-icon>
        <md-icon class="md-size-2x">import_export</md-icon>
      </md-layout>
    </md-layout>
  </form>
</template>

<script>
export default {
  data(){
    return {
        showSearchBar: true
    }
  },
  methods: {
    toggleSearchBar: function(){
      this.showSearchBar = !this.showSearchBar
    }
  }
}
</script>

<style lang="css" scoped>
  .input-container {
    padding: 0.5em;
    margin: 0;
  }
  .material-icons.md-size-2x {
    font-size: 36px;
    margin: 0 15px;
  }
  .searchInput {
    margin-top: 15px;
  }
  .icons {
    padding-top: 0.9em;
  }
</style>
