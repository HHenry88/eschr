<template lang="html">
  <div class="">
    <md-toolbar class="md-dense">
      <md-layout md-align="start">
        <md-icon class="displayIcon md-size-2x">{{displayIcon}}</md-icon>
        <h2 style="flex: 1, float: left">Location</h2>
      </md-layout>
      <md-layout md-align="end">
        <h2 style="flex: 1,float: right"># Photos</h2>
        <md-button class="md-icon-button" md-align="end" style="float:right, position: relative, margin: 0">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </md-layout>
    </md-toolbar>
    <div class="" id="image-map">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['coordinates'],
  data(){
    return {
      displayIcon: 'portrait'
    }
  },
  computed: {
    ...mapGetters([
      'getLatitude',
      'getLongitude'
    ])
  },
  mounted:function(){
    var mapboxgl = require('mapbox-gl');

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGVucnloYW4iLCJhIjoiY2o4YmNhY3IyMGV3ZjJ3cG1ncmw4YXBiZCJ9.arf5UU-kaFT1SOhPbzKlOA';
    var map = new mapboxgl.Map({
    container: 'image-map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 9,
    center: [this.getLongitude, this.getLatitude]
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([this.getLongitude, this.getLatitude])
      .addTo(map);
  }
}
</script>

<style lang="css">
  #image-map {
    height: 300px;
  }

  .displayIcon {
    margin: 5px;
  }
  .md-icon-button {
    margin: 6px 8px;
  }

  .mapboxgl-marker {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border:1px solid gray;
    background-color:red;
}
</style>
