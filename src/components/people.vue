<template lang="html">
  <b-container fluid class="people" v-if="keywords.length > 0">
    <b-row class="info-header">
      <b-col col sm="1" class='icon'>
        <img src='static/img/people-icon.png' />
      </b-col>
      <b-col col sm="10">
        <div class='info-title'>People</div>
	    </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col col lg="1"></b-col>
      <b-col cols="10" class="portraits">
        <b-row>
          <b-col v-for="(keyword, index) in keywords" :key="index" v-bind:style="" col sm="3">
            <div v-on:click="changeTag(keyword)" class="tag">
              <img src="static/img/people-icon.png" alt="" id="portrait">
              {{keyword}}
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col col lg="1"></b-col>
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
    this.keywords = this.getSingleImage._source.people.filter((word) => {
      if(word !== null){
        return word
      }
    })
  }
}
</script>

<style lang="css" scoped>
  .people {
    margin-bottom: 2em;
  }

  .tag, .color {
  	text-transform:uppercase;
  	float:left;
  	padding: 5px 8px 3px 0px;
  	margin: 0px 5px 5px 0px;
  	background: #FFF;
  	font-size:1.5em;
	}

  .tag:hover{
    cursor: pointer;
  }

  #portrait {
    min-width: 80%;
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

  .portraits {
    padding-left: 0;
  }
</style>
