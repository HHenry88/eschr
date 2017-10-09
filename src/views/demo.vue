<template>
  <div class="demoView">
    <div class="content">

      <img src="../assets/it2g.png" alt="miro" class="miroImg">
      <h1>Add Visual Search to Your App or Project with Eschr</h1>
      <md-toolbar class="md-large searchBar">
        <md-button class="md-icon-button searchButton" v-on:click="openDialog('searchDialog')">
          <md-icon class="md-size-4x">search</md-icon>
        </md-button>

        <h2 class="md-title search-by-image" style="flex: 1">SEARCH BY IMAGE</h2>

        <md-input-container>
          <label class="image-upload-icon"><md-icon class="md-size-4x" for="file-input">photo_camera</md-icon></label>
          <md-file v-model="onlyImages" accept="image/*" id="file-input" class="image-upload" @selected="uploadImage($event)"></md-file>
          </md-input-container>
      </md-toolbar>
    </div>
    <!-- <md-progress md-indeterminate></md-progress> -->
    <md-dialog md-open-from="#searchButton" ref="searchDialog" class="searchDialog">
      <searchView v-bind:close-button="refss"></searchView>
    </md-dialog>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'
import Vue from 'vue'

export default {
  name: 'demo',
  data() {
    return {
      onlyImages: '',
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
    uploadImage(e){
      const headers = {
        'Content-Type': 'image/jpeg',
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('uploading...');
        Vue.axios.post(`https://vynwt6nfq5.execute-api.eu-west-1.amazonaws.com/demo/upload`, e.target.result, {headers: headers})
        .then((data) => {
          store.dispatch('retrieveMatchedImages', data.data.keywords)
          this.$router.push('/demodrilldown')
        })
        .catch((err) => {
          console.warn(err);
        })
      }
      reader.readAsArrayBuffer(e[0]);

    },
    ...mapActions([
      'retrieveData',
      'retrieveKeywords',
      'retrieveMatchedImages',
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
    /* bounds: */
    background-image: linear-gradient(-131deg, #00C5F0 0%, #3B51AD 100%);
    /* Kabob Menu Icon: */

  }
  .content {
    margin: 10% auto;
  }

  .searchBar {
    width: 90%;
    margin: auto;
    background-color: white !important;
    border-radius: 15px;
  }

  .searchButton {
    width: 10%;
    height: 100px;
    margin-left: 1em !important;
  }

  .md-input-container {
    width: 15% !important;
  }

  .image-upload-icon {
    position: relative;
    /*margin-left: 25em;*/
    margin-bottom: 45px;
  }

  .image-upload-icon > i {
    color: red !important;
  }

  .md-input-container > div > .md-icon{
    display: none !important;
  }

  h1 {
    /* Add Visual Search to: */
    font-family: AvenirNext-Bold;
    font-size: 60px;
    color: #FFFFFF;
    height: 3em;
    line-height: normal;
    margin: 0.3em;
  }

  .search-by-image {
    color: red;
    width: 100%;
    font-size: 30px;
  }

  i {
    color: #6DC6B5;
  }
</style>
