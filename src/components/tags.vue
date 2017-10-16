<template lang="html">
  <div class="tags">
    <!-- <md-chip v-for="(keyword, index) in keywords" :key="index" md-editable v-bind:style="{background: bgcolor}">
      <span v-on:click="changeTag(keyword)">{{keyword}}</span>
    </md-chip> -->
    <div class="chip" v-for="(keyword, index) in keywords" v-bind:style="{background: bgcolor}">
      <span v-on:click="changeTag(keyword)">
        <md-icon>{{icon}}</md-icon>
        {{keyword}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'
import Vue from 'vue'

export default {
  props: [
    'chips',
    'bgcolor',
    'icon'
  ],
  data(){
    return {
      keywords: []
    }
  },
  computed:{
    ...mapGetters([
      'getSingleImage'
    ])
  },
  methods: {
    ...mapActions([
      'retrieveMatchedImages'
    ]),
    changeTag: function(term) {
      store.dispatch('retrieveMatchedImages', {result: term, thumbnail: false});
    }
  },
  created(){
    this.keywords = this.chips.filter((word) => {
      if(word !== null){
        return word
      }
    })
  }
}
</script>

<style lang="css" scoped>
  .tags {
      margin: 1% 5%;
      padding-top: 5%;
  }
  .chip {
      margin: 2px;
      display: inline-block;
      padding: 0 1em;
      height: 2em;
      font-size: 28px;
      line-height: 2em;
      border-radius: 25px;
      border: 0.5px solid grey;
  }

  .md-icon {
      float: left;
      height: 2.4em;
      margin-right: 0.2em;
  }
</style>
