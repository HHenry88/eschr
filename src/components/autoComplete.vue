<template lang="html">
  <div id="autocomplete-input-template">
    <div class="autocomplete-input" >
      <input v-model="keyword" type="text" ref="autocompleteRef" id="autocompleteTextField" value="text field" @input="onInput($event.target.value)" @keyup.esc="isOpen = false" @blur="isOpen = false" @keydown.down="moveDown" @keydown.up="moveUp" @keydown.enter="select" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox">
      <ul v-show="isOpen" class="options-list">
        <li v-for="(option, index) in getKeywords" :class="{
            'highlighted': index === highlightedPosition
            }" @mouseenter="highlightedPosition = index" @mousedown="select">
          <div class="autocomplete-option">
            <b-row class="optionText">
                <b-col cols="*" sm="1" md="1" lg="1" ><md-icon class="md-size-2x optionIcon">search</md-icon></b-col>
                <b-col cols="*" sm="9" md="9" lg="10" >{{option.text}}</b-col>
                <b-col cols="*" sm="2" md="2" lg="1" >{{option.score}}</b-col>
            </b-row>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {
  data(){
    return {
      isOpen: false,
      highlightedPosition:0,
      keyword: '',
      options: []
    }
  },
  computed:{
    ...mapGetters([
        'getKeywords'
    ]),
  },
  methods: {
    ...mapActions([
      'retrieveMatchedImages',
      'retrieveKeywords'
    ]),
    onInput(value) {
      store.dispatch('retrieveKeywords', value).then()
      this.highlightedPosition = 0;
      this.isOpen = !!value;
    },
    moveDown(){
      if( !this.isOpen) {
        return
      }
      this.highlightedPosition =
        (this.highlightedPosition + 1) % this.getKeywords.length
    },
    moveUp(){
      if(!this.isOpen) {
        return
      }
      this.highlightedPosition = this.highlightedPosition - 1 < 0 ? this.getKeywords.length - 1 : this.highlightedPosition - 1
    },
    select(){
      this.keyword = this.getKeywords[this.highlightedPosition].text
      this.isOpen = false
      store.dispatch('retrieveMatchedImages', {result: this.keyword, thumbnail: false });
    }
  },
  updated: () => {
  }
}
</script>

<style lang="css" scoped>
#autocomplete-input-template {
  width: 100%;
  margin-top: 1%;
}

#autocompleteTextField {
  border: none;
}

#autocompleteTextField:focus{
    outline: none;
}


ul {
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 95%;
  font-size: 70px;
  border: 1px solid black;
  padding: 2%;
}

.autocomplete-input {
  position: relative;
}

ul.options-list {
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 58em;
  overflow: hidden;
  left: -16em;
  z-index: 2;
}

ul.options-list li {
  width: 100%;
  flex-wrap: wrap;
  background: white;
  border-bottom: 1px solid #eee;
  color: #363636;
  margin: 0;
  padding: 30px 7px;
  cursor: pointer;
}

ul.options-list li.highlighted {
  background: #f8f8f8
}

.autocomplete-option {
  font-size: 4em;
}

.optionIcon {
  background: #3B51AD;
  border-radius: 50%;
  color: white;
  padding: 5px;
  width: 1.3em;
  height: auto;
  margin: auto;
}

.optionText {
  padding-top: 15px;
}

@media only screen  and (min-width : 1224px) {
    .autocomplete-input {
        top: 0em;
    }

    #autocompleteTextField {
        font-size: 3em;
    }

    ul.options-list {
      left: -15em;
      margin-top: 4em;
    }

    ul.options-list li {
        padding: 5px 7px;
    }

    .autocomplete-option {
        font-size: 2em;
    }

    .optionIcon {
        font-size: 1em;
        margin: 0 0.2em;
        min-width: 0.2em;
        min-height: auto;
    }

    .optionText {
      padding-top: 5px;
    }

    .backButton {
      top: 0em;
    }
}
</style>
