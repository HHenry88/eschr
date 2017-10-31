<template lang="html">
  <div>
    <div class="searchHeader">
      <b-row align-h="end" class="insideHeader">
        <b-col cols="1" align-self="start">
          <md-button class="backButton" v-on:click="closeDialog('searchDialog')">
            <md-icon class="md-size-5x">keyboard_arrow_left</md-icon>
          </md-button>
        </b-col>
        <b-col cols="2" class='magnifying-icon' align-self="start">
          <img src="../../static/img/search-icon.png" alt="">
        </b-col>
        <b-col cols="9" style="margin-top: 1em" align-self="start">
          <vue-elastic-autocomplete
             :suggestions="suggestions"

             id="autocompleteInputField"
             suggestionClass="ve-autocomplete-suggestion"
             @changed="onChange"
             @selected="onSelect">

             <template slot="input-box-header">
             </template>

             <template slot="input-box-footer">
               <i class="fa fa-search"></i>
             </template>

             <template slot="suggestion" slot-scope="{ suggestion }">
               <b-row align-h="end">
                 <b-col cols="1">
                   <md-icon class="md-size-2x optionIcon">search</md-icon>
                 </b-col>
                <b-col align-self="center">
                  {{ suggestion.text }}
                </b-col>
                <b-col sm="2" lg="1">
                  {{ suggestion.score }}
                </b-col>
               </b-row>
             </template>

          </vue-elastic-autocomplete>
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
      <b-container fluid>
        <b-row class="" id="grey-miro">
          <b-col col   align-self="center" class="text-center">
            <img src="../../static/img/miro-visual-search-as-a-service.png" alt="miro" class="grey" />
          </b-col>
        </b-row>
        <b-row>
          <b-col col class="text-center grey">
            Try some search terms like <strong>Colombia</strong> or <strong>Sunset</strong>
          </b-col>
        </b-row>
      </b-container>
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
      routeName: this.$route.name,
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
    onChange (value) {
      this.$store.dispatch('elastic/suggest/fetchSuggestions', value)
    },
    onSelect (keyword) {
      this.$router.push(`/search/tags/${keyword}`)
    }  },
  computed:{
    ...mapGetters([
      'getKeywords'
    ]),
    suggestions () {
      return this.$store.getters['elastic/suggest/suggestions']
    }
  }
};
</script>

<style lang="css">

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

  .magnifying-icon {
    /* border-right: 8px solid #ddd; */
    text-align: center;
    position: relative;
    top: 2.5em;
  }

  input[class="ve-autocomplete-input"] {
    width: 100%;
    border: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 95%;
    font-size: 70px;
    padding: 2%;
  }

  input[class="ve-autocomplete-input"]:focus {
    outline: none;
  }

  #autocompleteInputField {
    height: 9em;
  }

  #autocompleteInputField ul[class="ve-suggestions-list"] {
    display: flex;
    flex-direction: column;
    margin-top: 2.1em;
    border-radius: 0 0 3px 3px;
    position: absolute;
    width: 58em;
    overflow: hidden;
    left: -16em;
    z-index: 2;
  }

  #autocompleteInputField ul[class="ve-suggestions-list"] li {
    flex-wrap: wrap;
    background: #fff;
    border-bottom: 1px solid #eee;
    color: #363636;
    margin: 0;
    padding: 30px 7px;
    cursor: pointer;
    font-size: 4em;
  }

  #autocompleteInputField ul[class="ve-suggestions-list"] li[class="active ve-autocomplete-suggestion"] {
    background: #f8f8f8 !important;
  }

  #grey-miro {
    margin: 11em;
  }

  .grey {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.2;
    font-size: 24pt;
  }

  .optionIcon {
    background: #3B51AD;
    border-radius: 50%;
    color: white;
    padding: 0px;
    height: auto;
    margin: auto;
  }

  @media only screen  and (min-width : 1224px) {
      .md-dialog.md-reference{
            width:1080px;
      }

      #autocompleteInputField ul[class="ve-suggestions-list"] {
        font-size: 0.3em;
        margin-top: 5.8em;
        width: 100em;
        left: -30em;
        width: 109em;
      }

      #autocompleteInputField ul[class="ve-suggestions-list"] li {
        padding: 10px 0;
      }

      input[class="ve-autocomplete-input"] {
        font-size: 50px;
        margin-top: 0.3em;
      }
      .optionIcon {
        font-size: 1em;
        margin: 0 0.2em;
        min-width: 0.2em;
        min-height: auto;
      }
  }
</style>
