<template>
  <div class="demoView">
    <b-container fluid>
      <b-row id="miro-logo" cols="12">
        <b-col>
          <img src="../../static/img/miro-visual-search-as-a-service.png" alt="miro" class="miroImg">
        </b-col>
      </b-row>
      <b-row>
        <b-col id="tag-line" cols="12">
          <h1>Add Visual Search to Your APP or Project in <u>Minutes.</u></h1>
        </b-col>
      </b-row>
      <b-row class="searchArea searchBar v-center" cols="12">
        <b-col class="searchButton" v-on:click="openDialog('searchDialog')" sm="10" lg="10">
          <b-row class="input-row">
            <b-col sm="1" lg="1" class=" v-center search-icon">
              <img src="../../static/img/search-icon.png" alt="">
            </b-col>
            <b-col cols="1" align-self="center" class="blinking-cursor">|</b-col>
          </b-row>
        </b-col>
        <b-col sm="2" lg="2">
          <label class="image-upload-icon" for="file-input">
            <img src="../../static/img/camera-icon.png" alt="">
          </label>
          <input type="file" id="file-input" class="image-upload" v-on:change="uploadImage($event)"></input>
        </b-col>
      </b-row>
      <b-row  class="searchArea v-center" cols="12" style="height:5em">
        <b-col  class="searchButton"  sm="11" lg="10">
          <b-row class="input-row">
            <b-col cols="1">
            </b-col>
            <b-col cols="1" align-self="center" class="blinking-cursor"></b-col>
          </b-row>
        </b-col>
        <b-col sm="1" lg="2">
          <img src="../assets/searchByImage.png" alt="Search by Image" class="search-by-image">
        </b-col>
      </b-row>
    </b-container>

    <div class="image-upload-screen" v-show="loading">
      <b-row align-h="center" style="position: absolute; bottom: 20%; top: 20%; width: 100%;">
        <b-col cols="10" align-self="start">
          <div v-show="false">
            <canvas id="cvas" width="2000" height="3000"></canvas>
            <img id="hideimg" />
          </div>
          <img v-bind:src="thumbnailSrc" alt="" class="thumbnailImg">
          <progress-bar class="line" ref="basicLine" type="line" :options="options"></progress-bar>
        </b-col>
      </b-row>
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

export default {
  name: 'demo',
  data() {
    return {
      refss: this.$refs,
      loading: false,
      thumbnailSrc: '',
      size: '200px',
      color: 'red',
      progress: 0,
      thumbnailSrc: '',
      progressBar:'',
      options: {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 500,
        color: '#e91e63',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
      }
    }
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
      setTimeout(()=> {
        document.getElementById("autocompleteInputField").childNodes[0].childNodes[1].focus();
      },5)
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    uploadImage(e){
      this.loading = true;
      this.progressBar = this.$refs.basicLine;
      this.progressBar.setText("Uploading");
      this.progress=0.01;
      this.progressBar.set(0.01);
      const headers = {
        'Content-Type': 'image/jpeg',
      }
      const resizedImage = new Image();
      const reader = new FileReader();
      const thumbnail = new FileReader();
      const that=this;

      thumbnail.onload = (e) => {
        this.thumbnailSrc = thumbnail.result;
        const canvas = document.getElementById("cvas")
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.src = thumbnail.result;
        img.onload = function(){
          canvas.height = canvas.width * (img.height / img.width);
          ctx.drawImage(this, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height )
          var blob=document.getElementById("cvas").toBlob( (blob) => {
            Vue.axios.post(`https://vynwt6nfq5.execute-api.eu-west-1.amazonaws.com/demo/upload`, blob, {
              headers: headers,
              onUploadProgress: function(progressEvent) {
                if (progressEvent.loaded === progressEvent.total) {
                  that.progressBar.setText("Analysing");
                  that.progressBar.set(0.8);
                } else {
                  that.progress=(progressEvent.loaded/progressEvent.total);
                  that.progressBar.set(that.progress * 0.75);
                }
              }
            }).then((data) => {
              that.progressBar.setText("Querying");
              that.progressBar.set(1.0);
              store.dispatch('retrieveMatchedImages', {result: data.data.keywords, thumbnail: true});
              setTimeout(() => {this.loading = false}, 500);

            })
            .catch((err) => {
              console.warn(err);
            });
          }, 'image/jpeg',95);
        }
        store.dispatch('retrieveThumbnail', thumbnail.result);
      }
      thumbnail.readAsDataURL(e.target.files[0]);
      //reader.readAsArrayBuffer(e.target.files[0]);
    },
    ...mapActions([
      'retrieveKeywords',
      'retrieveMatchedImages',
      'retrieveThumbnail',
    ])
  }
}
</script>

<style scoped>
  .demoView {
      position: absolute;
      display: block;
      width: 100%;
      min-height: 100%;
      max-height: 100%;
      /* bounds: */
      background-image: linear-gradient(-131deg, #00C5F0 0%, #3B51AD 100%);
      /* Kabob Menu Icon: */
      overflow: scroll;
  }
  .content {
      margin: 10% auto;
  }

  #miro-logo {
    margin: 12em 0px 5em 0px;
  }

  #tag-line {
    margin: 0px 0px 80px 0px;
  }

  h1 {
      /* Add Visual Search to: */
      font-family: AvenirNext-Bold;
      color: #FFF;
      font-size: 5em;
  }

  .searchBar {
      background-color: #FFF !important;
      border: 0px solid #3f51b5;
      font-family: Roboto;
  }
  .searchArea {
    width: 90%;
    margin: 0 auto;
    height: 10em;
    padding: 10px 5px;
    margin-bottom: -2%;
  }

  .searchButton {
    height: 75%;
  }

  .search-icon {
    margin-left: 2em;
    position: relative;
    min-width: 5em;
    padding: 5px;
  }

  .input-row {
    height: 100%;
  }

  .blinking-cursor {
    font-weight: 100;
    font-size: 5em;
    padding-right: 6em;
    color: #ddd;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }

  @keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ddd;
    }
  }

  @-moz-keyframes blink {
    from, to {
      color: transparent;
    }
    50% {
      color: #ddd;
    }
  }

  @-webkit-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ddd;
    }
  }

  @-ms-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ddd;
    }
  }

  @-o-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ddd;
    }
  }

  .v-center {
    display: flex;
    align-items: center;
  }

  .image-upload-icon {
      position: relative;
      width: 5em;
      margin-right:2em;
      float:right;
  }

  .image-upload-icon:hover {
    cursor: pointer;
  }

  .image-upload {
      /*So 'Choose file' button does not appear and uses camera icon to input file*/
      display: none;
  }

  .search-by-image {
      position: relative;
      min-width: 20em;
      float:right;
  }

  .search-text {
      color: red;
      width: 100%;
      font-size: 30px;
      margin: auto;
  }

  .thumbnailImg {
      border-radius: 15px;
      max-width: 60%;
      max-height: 60%;
      height: auto;
      border: 1px solid black;
  }

  .image-upload-screen {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(230,230,230,0.95);
  }

  @media only screen  and (min-width : 1224px) {
    #miro-logo {
      margin-top: 4em;
    }

    .content {
      margin: 2% auto;
    }

    .miroImg {
      width: 30%;
    }

    h1 {
      font-size: 2em;
    }

    .searchArea {
        width: 70%;
        margin-bottom: -1em;
        height: 8em;
    }

    .search-icon {
      padding: 5px;
    }

    .image-upload-icon {
        left: 1.5em;
    }

    .search-by-image {
      position: relative;
      float:right;
      margin-top: 1em;
    }

    .thumbnailImg {
      max-width: 30%;
      min-width: 30%;
    }
  }
  @media only screen  and (max-width : 1223px) {
    .search-by-image {
      margin-right: 1em;
      margin-top: 1em;
    }
  }

  .pgcontainer {
    padding: 0 50px 50px 50px;
  }
  .line {
    margin: 0 auto;
    width: 200px;
    height: 16px;
    top: 96px;
    font-size: 24pt;
  }

</style>
