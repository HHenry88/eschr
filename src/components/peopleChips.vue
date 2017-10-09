<template lang="html">
  <div class="tags" v-if="getSingleImage._source.people.length > 0">
    <md-chip v-for="(keyword, index) in getSingleImage._source.people" :key="index" md-editable v-bind:style="">
      <span v-on:click="changeTag(keyword)">{{keyword}}</span>
    </md-chip>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'
import Vue from 'vue'

export default {
  data(){
    return {
      keywords: this.getKeywordsTracker
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
      this.$router.push('/demodrilldown');
    }
  }
}
</script>

<style lang="css" scoped>
  .tags {
    margin: 5%;
    border-top: 2px solid grey;
    padding-top: 5%;
  }
  div > div.tags > div{
    padding: 10px 20px 3px 20px;
    margin: 2px;
    font-size: 1.5em;
    background: #9DC4B6;
  }
</style>
