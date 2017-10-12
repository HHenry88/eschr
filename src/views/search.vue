<template lang="html">
  <div>
    <md-layout class="searchHeader">
      <md-layout md-flex="10" >
        <md-button class="backButton" v-on:click="closeDialog('searchDialog')">
          <md-icon class="md-size-5x">keyboard_arrow_left</md-icon>
        </md-button>
      </md-layout>
      <md-layout>
        <autoComplete></autoComplete>
      </md-layout>
    </md-layout>
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
  .md-dialog.md-reference{
    min-height: 100%;
    min-width: 100%;
  }

  .searchHeader {
    height: 8em;
  }

  .backButton {
    right: 2.5em;
    top: 1.5em;
  }

  .backButton i {
    color: #000;
  }

  .imageIcons {
    width: 20%;
  }
</style>
