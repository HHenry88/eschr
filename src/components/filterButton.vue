<template lang="html">
  <div class="">

  <md-dialog md-open-from="#filterButton" ref="filterDialog">
    <div class="phone-viewport">
      <md-toolbar md-theme="white">
        <span class="md-title">Categories</span>
      </md-toolbar>
      <md-list>
        <orientationFilter></orientationFilter>
        <peopleFilter v-bind:filters="getFilters" v-bind:changeValue="changeValue"></peopleFilter>
        <timeFilter v-bind:filters="getFilters" v-bind:changeValue="changeValue"></timeFilter>
        <colorFilter v-bind:filters="getFilters" v-bind:changeValue="changeValue"></colorFilter>
        <dateFilter v-bind:filters="getFilters" v-bind:changeValue="changeValue"></dateFilter>
        <tagsFilter v-bind:filters="getFilters" v-bind:changeValue="changeValue"></tagsFilter>
      </md-list>
    </div>
  </md-dialog>

    <md-button class="md-fab row" id="filter" md-fab-trigger v-on:click="openDialog('filterDialog')" md-theme="white">
        <md-icon class="col-xs-3 filterIcon">filter_list</md-icon>
        <label class="filterText col-xs-9">Filter</label>
    </md-button>
</div>
</template>

<script>
import orientationFilter from './orientationFilter'
import peopleFilter from './peopleFilter'
import timeFilter from './timeFilter'
import colorFilter from './colorFilter'
import dateFilter from './dateFilter'
import tagsFilter from './tagsFilter'
import { mapGetters, mapActions} from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'getFilters'
    ])
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    ...mapActions([
      'changeValue'
    ])
  },
  components: {
    'orientationFilter': orientationFilter,
    'peopleFilter': peopleFilter,
    'timeFilter': timeFilter,
    'colorFilter': colorFilter,
    'dateFilter': dateFilter,
    'tagsFilter': tagsFilter
  }
}
</script>

<style lang="css" scoped>
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

  .md-dialog {
    width: 100%;
    height: 100%;
  }

  .phone-viewport {
    padding: 30px;
  }
</style>
