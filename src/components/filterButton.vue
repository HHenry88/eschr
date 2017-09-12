<template lang="html">
  <md-speed-dial md-open="hover" md-direction="bottom" class="md-fab-bottom-right" md-theme="light-blue">
    <md-button class="md-fab row" id="filter" md-fab-trigger>
        <md-icon class="col-xs-3 filterIcon">filter_list</md-icon>
        <label class="filterText col-xs-9">Filter</label>
    </md-button>
  </md-speed-dial>
</template>

<script>
export default {

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
