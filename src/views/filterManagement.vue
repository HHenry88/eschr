<template lang="html">
  <div class="">

  <md-dialog md-open-from="#filterButton" ref="filterDialog">
    <p>hihihi</p>
  </md-dialog>

    <md-button class="md-fab row" id="filter" md-fab-trigger v-on:click="openDialog('filterDialog')">
        <md-icon class="col-xs-3 filterIcon">filter_list</md-icon>
        <label class="filterText col-xs-9">Filter</label>
    </md-button>
</div>
</template>

<script>


export default {
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    }
  }
}
</script>

<style lang="css">
  #filter {
    width: 10em;
  }
  .filterText{
    margin-top: 0;
    margin-left: 30px;
  }

  .filterIcon {
    margin-left: 10px;
    margin-top: 12px;
  }
</style>
