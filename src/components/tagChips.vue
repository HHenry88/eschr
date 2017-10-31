<template lang="html">
  <b-container fluid class="tags" v-if="keywords.length">
    <b-row class="info-header">
      <b-col col sm="1" class='icon'>
        <img src='static/img/tags-icon.png' />
      </b-col>
      <b-col col sm="10">
        <div class='info-title'>Things</div>
	    </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col col lg="1"></b-col>
      <b-col cols="10">
        <div v-for="(keyword, index) in keywords.filter((word) => {if(word !== null){return word}})" :key="index">
          <div v-on:click="changeTag(keyword)" class="tag" v-bind:class="{blue: getSearchTerm.includes(keyword)}">{{keyword}}</div>
        </div>
      </b-col>
      <b-col col lg="1"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { store } from '../store/store'

export default {
  props: ['keywords'],
  methods: {
    ...mapActions([
      'retrieveMatchedImages'
    ]),
    changeTag: function(term) {
      store.dispatch('retrieveMatchedImages', {result: term, thumbnail: false});
    }
  },
  computed: {
    ...mapGetters([
      'getSearchTerm'
    ])
  }
}
</script>

<style lang="css" scoped>
  .tags {
    margin-bottom: 2em;
  }

  .tag, .color {
  	text-transform:uppercase;
  	float:left;
  	padding: 5px 8px 3px 8px;
  	margin: 0px 10px 5px 0px;
  	background: #FFF;
  	border:1px solid #006FFF;
  	font-size: 1.5em;
    font-weight: bold;
  	color:#006FFF;
	}

  .tag:hover{
    cursor: pointer;
  }

  .blue {
  	background: #006FFF;
  	border:1px solid #006FFF;
  	color:#fff;
	}

  .icon {
    margin-top: 0.5em;
  }
  .icon img {
  	min-width:1em;
  	max-width:3em;
  	float:right;
	}
  .info-title {
  	font-weight:bold;
  	font-size:2em;
  	color:#2a2a2a;
  	text-align: left;
	}
	.info-header {
  	height:3em;
	}
	.info-subtitle,.info-body {
    font-size:.80em;
    color: #ccc;
	}
</style>
