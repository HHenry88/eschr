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


export default {
  data(){
    return {
      displayIcon: 'portrait'
    }
  },
  mounted:function(){
    var mapboxgl = require('mapbox-gl');

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGVucnloYW4iLCJhIjoiY2o4YmNhY3IyMGV3ZjJ3cG1ncmw4YXBiZCJ9.arf5UU-kaFT1SOhPbzKlOA';
    var map = new mapboxgl.Map({
    container: 'image-map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom: 5,
    center: [-74.0073, 40.7124]
    });
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
</style>
