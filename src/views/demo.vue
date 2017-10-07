<template>
  <div class="demoView">
    <md-toolbar class="md-large searchBar">
      <md-button class="md-icon-button searchButton" v-on:click="openDialog('searchDialog')">
        <md-icon class="md-size-4x">search</md-icon>
      </md-button>

      <md-input-container>
        <label class="image-upload-icon"><md-icon class="md-size-4x" for="file-input">image</md-icon></label>
        <md-file v-model="onlyImages" accept="image/*" id="file-input" class="image-upload"></md-file>
        </md-input-container>
    </md-toolbar>

    <md-dialog md-open-from="#searchButton" ref="searchDialog" class="searchDialog">
      <searchView v-bind:close-button="refss"></searchView>
    </md-dialog>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'


export default {
  name: 'demo',
  data() {
    return {
      onlyImages: null,
      refss: this.$refs
    }
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();

    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    ...mapActions([
      'retrieveData',
      'retrieveKeywords'
    ])
  },
  created() {
    store.dispatch('retrieveData', true)
  }
}
</script>

<style scoped>
  .demoView {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    margin: 60% auto;
  }


  .searchButton {
    width: 10%;
    height: 100px;
  }

  .searchBar {
    width: 90%;
    margin: auto;
  }

  .md-input-container {
    width: 80% !important;
  }

  .image-upload-icon {
    position: relative;
    margin-left: 670px;
    margin-bottom: 45px;
  }

  .md-input-container > div > .md-icon{
    display: none !important;
  }

  .image-upload {

  }
</style>
