<template lang="html">
  <div>
    <div class="searchHeader">
      <b-row align-h="end" class="insideHeader">
        <b-col cols="1" align-self="start">
          <md-button class="backButton" v-on:click="closeDialog('searchDialog')">
            <md-icon class="md-size-5x">keyboard_arrow_left</md-icon>
          </md-button>
        </b-col>
        <b-col cols="2" class='search-icon' align-self="center">
          <img src="../../static/img/search-icon.png" alt="">
        </b-col>
        <b-col cols="9" style="margin-top: 1em">
          <autoComplete></autoComplete>
        </b-col>
      </b-row>
    </div>
      <div class="" v-if="routeName !== 'demo'">
        <md-layout md-gutter>
          <md-layout class="imageIcons">
            <md-button>
              <md-icon class="md-size-2x">camera_alt</md-icon>
            </md-button>
          </md-layout>
          <md-layout class="imageIcons">
            <md-button>
              <md-icon class="md-size-2x">portrait</md-icon>
            </md-button>
          </md-layout>
        </md-layout>
      </div>
      <b-row class="justify-content-md-center" id="grey-miro">
        <b-col align-self="center">
          <img src="../../static/img/miro-visual-search-as-a-service.png" alt="miro" class="grey">
        </b-col>
      </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {
  data() {
    return {
      searchTerms: [],
      selectedTerm: '',
      routeName: this.$route.name
    };
  },
  props: ['closeButton'],
  methods: {
    ...mapActions([
      'retrieveKeywords',
      'retrieveMatchedImages'
    ]),
    termFilter: function(list, query) {
      var arr = [];
      query = query.toLowerCase();
      for(var i = 0; i < list.length; i++) {
        var term = list[i].name;
        if(term.indexOf(query) !== -1) {
          arr.push({ name: list[i].name });
        }
        if(arr.length > 5)
          break;
      }
      console.log(arr);
      return arr;
    },
    closeDialog(ref) {
      this.closeButton[ref].close();
    },
    submit: function(e) {
      store.dispatch('retrieveMatchedImages', {result: this.selectedTerm, thumbnail: false });
    }
  },
  computed:{
    ...mapGetters([
      'getKeywords'
    ])
  }
};
</script>

<style lang="css">

  @media only screen  and (min-width : 1224px) {
    .md-dialog.md-reference{
          width:1080px;
    }

  }
  @media only screen and (max-width: 1223px) {
    .md-dialog.md-reference{
      min-height: 100%;
      min-width: 100%;
    }
  }

  .md-dialog.md-reference{
    min-height: 100%;
  }

  .searchHeader {
    height: 13em;
    background-image: linear-gradient(-131deg,#00c5f0,#3b51ad);
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .insideHeader {
    background-color: #fff;
    position: relative;
    margin: 0px 1.5em;
    top: 1.5em
  }

  .backButton {
    right: 2.5em;
    top: 1em;
  }

  .backButton:hover {
    background: none !important;
  }

  .backButton i {
    color: #000;
  }

  .imageIcons {
    width: 20%;
  }

  .search-icon {
    border-right: 8px solid #ddd;
    text-align: center;
  }

  #grey-miro {
    margin: 11em;
  }

  .grey {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.3;
  }



</style>
