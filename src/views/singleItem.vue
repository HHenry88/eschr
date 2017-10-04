<template lang="html">
  <div class="">
    <md-toolbar class="md-dense">
      <router-link to="/demodrilldown">
        <md-button class="md-icon-button" >
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </router-link>
      <h2 class="md-title" style="flex: 1, float: left">Taylor Host</h2>
    </md-toolbar>

    <img v-bind:src="getSingleItem" alt="">
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

<style lang="css">
</style>
