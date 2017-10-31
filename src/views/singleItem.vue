<template lang="html">
  <div>
    <toolBar></toolBar>
      <b-container class="single-item-container" fluid>
        <b-row>
          <b-col id="singleImageLeft" v-on:click="prevPic">
        </b-col>
          <b-col id="singleImageRight" v-on:click="nextPic">
        </b-col>
        </b-row>
        <img v-bind:src="getSingleImageSrc" alt="" style="width: 100%;"  v-touch:swipe.left="nextPic" v-touch:swipe.right="prevPic" id="singleImage">
        <div style="padding-top:50px;"> </div>
        <people :people="getSingleImage._source.people"></people>
        <tagChips :keywords="getSingleImage._source.keywords"></tagChips>
        <colors :colors="getSingleImage._source.colors"></colors>
        <dateTime :dateTime="getSingleImage._source.exif.created"></dateTime>
        <location :loc="getSingleImage._source.location" :places="getSingleImage._source.places"></location>
      </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'
import singleItemMap from '../components/singleItemMap'
import { fullImage } from '../images.config.inc.js'

export default {
  data(){
    return{
      singleItem: '',
      searchTerm: '',
      displayIcon: 'local_offer'
    }
  },
  methods: {
    ...mapActions([
      'retrieveSingleItemByParams',
      'selectSingleItem'
    ]),
    nextPic(){
      const nextImage = this.getMatchedImages[this.getCurrentIndex + 1]
      store.dispatch('selectSingleItem', {
        imageSrc: `${fullImage}${nextImage._source.resource_id}.jpg`,
        image: nextImage,
        currentIndex: this.getCurrentIndex + 1
      }).then(() => {
        this.$router.push({name: 'singleItem', params: {id: nextImage._source.resource_id} })
      })
    },
    prevPic(){
      const prevImage = this.getMatchedImages[this.getCurrentIndex - 1]
      store.dispatch('selectSingleItem', {
        imageSrc: `${fullImage}${prevImage._source.resource_id}.jpg`,
        image: prevImage,
        currentIndex: this.getCurrentIndex - 1
      }).then(() => {
        this.$router.push({name: 'singleItem', params: {id: prevImage._source.resource_id} })
      })
    }
  },
  computed: {
    ...mapGetters([
      'getSingleImageSrc',
      'getMatchedImages',
      'getCurrentIndex',
      'getSingleImage'
    ])
  },
  components:{
    'singleItemMap': singleItemMap
  },
  created(){
    window.scrollTo(0,0);
  },
  beforeRouteEnter( to, from, next) {
    if(!from.name){
      store.dispatch('retrieveSingleItemByParams', to.params.id)
      .then((data) => {
        next();
      })
    } else {
      next();
    }
  },
  beforeRouteUpdate(){
    window.scrollTo(0,0);
  }
}
</script>

<style lang="css" scoped>
  .single-item-container {
    margin-top: 6em;
  }

  img {
    margin-bottom: 2em;
  }
  .icon img {
  	min-width:1em;
  	max-width:1.5em;
  	float:right;
	}

  #singleImageLeft, #singleImageRight {
    display: none;
  }


  @media only screen  and (min-width : 1224px) {
    .single-item-container {
      max-width:1200px;
    }

    #singleImageLeft, #singleImageRight {
      opacity: 0.7;
      display: inline-block;
      position: absolute;
      margin: 0;
      padding: 0;
      cursor: pointer;
      width: 30%;
      height: 70%;
    }

    #singleImageRight {
      right: 5%;
    }

    #singleImageLeft {
      left: 5%;
    }

    #singleImageLeft:hover, #singleImageRight:hover {
      opacity: 1;
    }
  }

</style>
