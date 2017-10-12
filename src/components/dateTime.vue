<template lang="html">
  <b-container fluid class="dateTime">
    <b-row class="info-header">
      <b-col col sm="1" class='icon'>
        <img src='static/img/time-icon.png' />
      </b-col>
      <b-col col sm="10">
        <div class='info-title'>{{formattedDate}}</div>
	    </b-col>
    </b-row>
    <b-row>
      <b-col col lg="1"></b-col>
      <b-col cols="11">
        <!-- <div class="tag">
          {{formattedDate}}
        </div> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      formattedDate: ''
    }
  },
  computed:{
    ...mapGetters([
      'getSingleImage'
    ])
  },
  created(){
    const created = this.getSingleImage._source.exif.created.split(' ')
    created[0] = created[0].replace(':', '-');
    const date = new Date(created.join(' '));
    this.formattedDate = date;
    this.logger();
    console.log(this);
  },
  methods:{
    logger: function(){
      console.log('in logger',this.formattedDate);
    }
  }
}
</script>

<style lang="css" scoped>
  .dateTime {
    margin-bottom: 2em;
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
