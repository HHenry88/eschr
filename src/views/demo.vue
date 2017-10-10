<template>
  <div class="demoView">

    <div class="content">
      <img src="../assets/it2g.png" alt="miro" class="miroImg">
      <h1>Add Visual Search to Your App or Project in <u>Minutes</u></h1>
      <md-toolbar class="md-large searchBar">
        <md-button class="md-icon-button searchButton" v-on:click="openDialog('searchDialog')">
          <md-layout>
            <md-layout md-flex="20">
              <md-icon class="md-size-4x">search</md-icon>
            </md-layout>
            <md-layout md-flex="10">
              <img src="../assets/grey-bar.png" alt="" class="">
            </md-layout>
            <md-layout>
              <h2 class="md-title search-text" style="flex: 1">SEARCH</h2>
            </md-layout>
          </md-layout>
        </md-button>
        <label class="image-upload-icon" for="file-input">
          <md-icon class="md-size-4x">photo_camera</md-icon>
        </label>
        <input type="file" id="file-input" class="image-upload" v-on:change="uploadImage($event)"></input>
      </md-toolbar>
      <img src="../assets/searchByImage.png" alt="" class="search-by-image">
    </div>

    <clip-loader :loading="loading" :color="color" :size="size"></clip-loader>

    <div class="" v-if="loading">
      <img v-bind:src="thumbnailSrc" alt="" class="thumbnailImg">
    </div>

    <md-dialog md-open-from="#searchButton" ref="searchDialog" class="searchDialog" id="search-dialog">
      <searchView v-bind:close-button="refss"></searchView>
    </md-dialog>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'
import Vue from 'vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'


export default {
  name: 'demo',
  data() {
    return {
      refss: this.$refs,
      loading: false,
      size: '300px',
      color: 'red',
      thumbnailSrc: ''
    }
  },
  methods: {
    openDialog(ref) {
      // console.log(this.$refs.searchDialog.$children[0].$children[0].$children[1].$refs);
      // this.$refs.searchDialog.$children[0].$children[0].$children[1].$refs.input.focus();
      this.$refs[ref].open();
      // this.$refs.searchDialog.$children[0].$children[0].$children[1].$refs.input.__proto__.__proto__.focus()
      // this.$nextTick(() => {
        // console.log(this.$refs.searchDialog.$children[0].$children[0].$children[1].$refs);
        // console.log(this.$refs.searchDialog.$refs);
        // this.$refs.typeBox.input.focus();
        // this.$refs.searchDialog.$children[0].$children[0].$children[1].$refs.input.__proto__.__proto__.focus()
        // this.$refs.searchDialog.$children[0].$children[0].$children[1].$refs
      // });
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    uploadImage(e){
      this.loading = true;
      const headers = {
        'Content-Type': 'image/jpeg',
      }

      const reader = new FileReader();
      const thumbnail = new FileReader();
      thumbnail.onload = (e) => {
          this.thumbnailSrc = thumbnail.result;
          store.dispatch('retrieveThumbnail', thumbnail.result)
      }
      thumbnail.readAsDataURL(e.target.files[0]);

      reader.onload = (e) => {
        Vue.axios.post(`https://vynwt6nfq5.execute-api.eu-west-1.amazonaws.com/demo/upload`, e.target.result, {headers: headers})
        .then((data) => {
          store.dispatch('retrieveMatchedImages', {result: data.data.keywords, thumbnail: true})
          this.loading = false;
        })
        .catch((err) => {
          console.warn(err);
        })
      }
      reader.readAsArrayBuffer(e.target.files[0]);
    },
    ...mapActions([
      'retrieveData',
      'retrieveKeywords',
      'retrieveMatchedImages',
      'retrieveThumbnail',
    ])
  },
  created() {
    store.dispatch('retrieveData')
    store.dispatch('retrieveKeywords')
  },
  components: {
    ClipLoader
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

  h1 {
    /* Add Visual Search to: */
    font-family: AvenirNext-Bold;
    font-size: 60px;
    color: #FFFFFF;
    height: 3em;
    line-height: normal;
    margin: 0.3em;
  }

  .searchBar {
    width: 90%;
    margin: 0 auto;
    margin-bottom: -2%;
    background-color: white;
    border-radius: 15px;
  }

  .searchButton {
    width: 80%;
    height: 120px;
  }

  .image-upload-icon {
    position: relative;
    left: 4%;
  }

  .image-upload-icon i{
    color: red;
  }

  .image-upload {
    /*So 'Choose file' button does not appear and uses camera icon to input file*/
    display: none;
  }

  .search-by-image {
    width: 50%;
    position: relative;
    left: 18%;
  }

  .search-text {
    color: red;
    width: 100%;
    font-size: 30px;
    margin: auto;
  }

  .searchButton i {
    color: #6DC6B5;
    margin-left: 3%;
    margin-top: 2%;
  }

  .thumbnailImg {
    border-radius: 15px;
  }

</style>
