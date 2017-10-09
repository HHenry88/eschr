<template lang="html">
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container md-theme="green">
      <md-button v-on:click="closeDialog('searchDialog')"><md-icon class="md-size-2x">keyboard_arrow_left</md-icon></md-button>
      <md-autocomplete v-model="selectedTerm"
                          :list="getKeywords"
                          :filter-list="termFilter"
                          :min-chars="2"
                          :max-height="20"
                          @selected="submit($event)"
                          :debounce="500"
                          placeholder="Choose by image or type"
                          class="autocomplete-input"
                          print-attribute="name"
                          >
      </md-autocomplete>
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
    </md-input-container>

    <div class="color-box"></div>
  </form>
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

      for(var i = 0; i < list.length; i++) {
        if(list[i].name.indexOf(query) !== -1)
          arr.push(list[i]);

        if(arr.length > 5)
          break;
      }

      return arr;
    },
    closeDialog(ref) {
      this.closeButton[ref].close();
    },
    submit: function(e) {
      console.log(e);
      store.dispatch('retrieveMatchedImages', {result: this.selectedTerm, thumbnail: false });
      this.$router.push('demodrilldown')
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

  input.md-input {
    height: 3em;
    font-size: 50px !important;
  }

  .md-menu-content {
    min-width: 100% !important;
    left: 1% !important;
    top: 8% !important;
  }

  .md-list-item .md-list-item-container{
    font-size: 50px;
    line-height: 20px;
  }

  .imageIcons {
    width: 20%;
  }

  .autocomplete-input {
    width: 70% !important;
  }

  li { background: white; }
  li:nth-child(even) { background: #f9f9f9; }
</style>
