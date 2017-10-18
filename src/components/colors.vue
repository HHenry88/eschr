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
      <b-col cols="10">
        <div v-for="(color, index) in colors" :key="index" class="tags">
          <div class="tag" v-bind:style="{background: colorToHex(color), color:isDark(color)?'white':'black'}">{{colorToName(colorToHex(color))}}</div>
        </div>
      </b-col>
      <b-col sm="1">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'
import namer from 'color-namer'
import rgbToHsl from 'rgb-to-hsl';
import Vue from 'vue'

export default {
  data(){
    return {
      colors: ['dodgerblue', 'mediumpurple', 'limegreen', 'yellow', 'tomato', 'orange']
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
    },
    colorToHex: (colorJSON) => {
      if (colorJSON instanceof String) return colourJSON;
      var colorDec = colorJSON.color;
      var colorHex = ((colorDec.red * 65536) + (colorDec.green * 256) + (colorDec.blue)).toString(16);
      return "#" + colorHex;
    },
    colorToName: (colorHex) => {
      return namer(colorHex).ntc[0].name;
    },
    isDark: (colorJSON) => {
      if (colorJSON instanceof String) return false;
      var colorDec = colorJSON.color;
      var hsl = rgbToHsl(colorDec.red, colorDec.green, colorDec.blue);
      return parseFloat(hsl[2])<50;
    }
  },
  created(){
   this.colors = this.getSingleImage._source.colors?this.getSingleImage._source.colors:[];
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
  	background: #FFF;
  	font-size: 1.5em;
    font-weight: bold;
    border-radius: 10px;
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
