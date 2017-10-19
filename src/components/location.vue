<template lang="html">
  <b-container fluid>
    <b-row class="info-header">
      <b-col col sm="1" class='icon'>
        <img src='static/img/location-icon.png' />
      </b-col>
      <b-col col sm="10">
        <div class='info-title'>{{location}}</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      location: ''
    }
  },
  computed:{
    ...mapGetters([
      'getSingleImage'
    ])
  },
  created(){
    const that = this;
    setTimeout(()=>{
      that.location = !!that.getSingleImage._source.location ? that.getSingleImage._source.location : that.getSingleImage._source.places.join(' ');
    }, 500)
  }
}
</script>

<style lang="css" scoped>
  .location {
    margin-bottom: 2em;
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
  	text-transform: capitalize;
	}
	.info-header {
  	height:3em;
	}
</style>
