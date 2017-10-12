<template lang="html">
  <b-container fluid class="colors">
    <b-row class="info-header">
      <b-col col sm="1" class='icon'>
        <img src='static/img/colors-icon.png' />
      </b-col>
      <b-col col sm="10">
        <div class='info-title'>Colors</div>
	    </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col col lg="1"></b-col>
      <b-col cols="11">
        <div v-for="(keyword, index) in keywords" :key="index" class="tags">
          <div v-on:click="changeTag(keyword)" class="tag" v-bind:style="{background: keyword}"></div>
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
      keywords: ['dodgerblue', 'mediumpurple', 'limegreen', 'yellow', 'tomato', 'orange']
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
      // store.dispatch('retrieveMatchedImages', {result: term, thumbnail: false});
      console.log('you picked:', term);
    }
  },
  created(){
    // this.keywords = this.getSingleImage._source.keywords.filter((word) => {
    //   if(word !== null){
    //     return word
    //   }
    // })
  }
}
</script>

<style lang="css" scoped>
  .colors {
    margin-bottom: 2em;
  }

  .tag, .color {
  	text-transform:uppercase;
  	float:left;
  	padding: 5px 8px 3px 8px;
  	margin: 0px 10px 5px 0px;
  	width: 6.5em;
    height: 2.5em;
	}

  .tag:hover{
    cursor: pointer;
  }

  .icon {
    margin-top: 0.5em;
  }

  .icon img {
  	min-width:80%;
  	max-width:1.5em;
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
