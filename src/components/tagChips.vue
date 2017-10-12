<template lang="html">
  <b-container fluid>
    <b-row align-v class="info-header">
      <b-col col sm="1" class='icon'>
        <img src='static/img/tags-icon.png' />
      </b-col>
      <b-col col sm="10">
        <div class='info-title'>Things</div>
	    </b-col>
    </b-row>
    <b-row class="justify-content-md-center"> 
      <b-col col lg="1"></b-col>
      <b-col cols="11">
        <div v-for="(keyword, index) in keywords" :key="index" v-bind:style="">
          <div v-on:click="changeTag(keyword)" class="tag blue">{{keyword}}</div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'
import Vue from 'vue'

export default {
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
    this.keywords = this.getSingleImage._source.keywords.filter((word) => {
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
  div > div.tags > div{
    padding: 10px 20px 10px 20px;
    margin: 2px;
    font-size: 2em;
  }
  .tag, .color {
  	font-size:2em;
  	text-transform:uppercase;
  	float:left;
  	padding: 5px 8px 3px 8px;
  	margin: 0px 5px 5px 0px;
  	background: #FFF;
  	border:1px solid #006FFF;
  	font-size:.75em;
  	color:#006FFF;
	}

  .blue {
  	background: #006FFF;
  	border:1px solid #006FFF;
  	color:#fff;
	}
	.icon img {
  	width:100%;
  	max-width:1.5em;
  	float:right;
	}
	.info-title {
  	font-weight:bold;
  	font-size:1em;
  	color:#2a2a2a;
  	text-align: left;
	}
	.info-header {
  	height:50px;
	}
	.info-subtitle,.info-body {
    font-size:.80em;
    color: #ccc;
	}
</style>
