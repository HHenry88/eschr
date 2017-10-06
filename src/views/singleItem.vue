<template lang="html">
  <div class="single-item-container">
    <md-toolbar class="md-dense">
      <router-link to="/demodrilldown">
        <md-button class="md-icon-button" >
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </router-link>
      <h2 class="md-title" style="flex: 1, float: left">Taylor Host</h2>
    </md-toolbar>

    <img v-bind:src="getSingleItem" alt="">
    <singleItemMap></singleItemMap>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import singleItemMap from '../components/singleItemMap'

export default {
  data(){
    return{
      singleItem: ''
    }
  },
  methods: {
    ...mapActions([
      'changeSingleItem'
    ])
  },
  computed: {
    ...mapGetters([
      'getSingleItem'
    ])
  },
  components:{
    'singleItemMap': singleItemMap
  },
}
</script>

<style lang="css" scoped>
  .single-item-container {
    padding: 0.5%;
  }
</style>
