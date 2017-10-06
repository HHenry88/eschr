<template lang="html">
  <div class="">
    <md-toolbar class="md-dense">
    <md-layout md-row>
      <md-layout class="icons" md-align="end" md-flex-xsmall>
        <md-button v-on:click="openDialog('searchDialog')" id="search"><md-icon class="searchIcon" >search</md-icon></md-button>
        <md-icon class="md-size-2x">camera_alt</md-icon>
        <md-icon class="md-size-2x">import_export</md-icon>
      </md-layout>
    </md-layout>
  </md-toolbar>

  <md-dialog md-open-from="#searchButton" md-close-to="#custom" ref="searchDialog" class="searchDialog">
    <searchView></searchView>
  </md-dialog>

</div>
</template>

<script>
export default {
  data(){
    return {
        showSearchBar: true,
    }
  },
  methods: {
    toggleSearchBar: function(){
      this.showSearchBar = !this.showSearchBar
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
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
  div.md-dialog-container.searchDialog.md-theme-default.md-active > div.md-dialog.md-reference{
    height: 100%;
    width: 100%;
  }
</style>
