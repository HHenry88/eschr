<template lang="html">
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container md-theme="green">
      <md-button><md-icon class="md-size-2x">keyboard_arrow_left</md-icon></md-button>
      <md-autocomplete v-model="colorValue"
                          :list="getSearchTerms"
                          :filter-list="termFilter"
                          :min-chars="0"
                          :max-height="6"
                          @selected="submit"
                          :debounce="500"
                          placeholder="Choose by image or type"
                          class="autocomplete-input"
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
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      colorValue: '',
      searchTerms: [],
      selectedTerm: '',
      routeName: this.$route.name
    };
  },
  methods: {
    ...mapActions([
      'changeSingleItem'
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
    submit: function(item) {
      this.selectedTerm = item;
      console.log(this.selectedColor, 'afwefawefaf', item);
    }
  },
  computed:{
    ...mapGetters([
      'getSearchTerms'
    ])
  }
};
</script>

<style lang="css">
  .md-dialog.md-reference{
    height: 100%;
    width: 100%;
  }

  input.md-input {
    height: 70px;
    font-size: 24px !important;
  }

  .md-menu-content {
    min-width: 80% !important;
    left: 100px !important;
    top: 220px !important;
  }

  .imageIcons {
    width: 20%;
  }

  .autocomplete-input {
    width: 70% !important;
  }
</style>
