<template lang="html">
  <div class="">
    <md-chip v-for="(keyword, index) in getKeywordsTracker" :key="index" md-editable v-bind:style="">
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
      'getKeywordsTracker'
    ])
  },
  methods: {
    ...mapActions([
      'retrieveMatchedImages'
    ]),
    changeTag: function(term) {
      console.log(this);
      store.dispatch('retrieveMatchedImages', term);
      this.$router.push('/demodrilldown');
    }
  }
}
</script>

<style lang="css">
</style>
