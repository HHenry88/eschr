<template lang="html">
  <div class="">
    <toolBar></toolBar>
    <gallery></gallery>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {

  name: 'demodrilldown',
  data(){
    return{
      returnedData: {}
    }
  },
  computed: {
    ...mapGetters([
      'getMatchedImages'
    ])
  },
  created(){
    if(this.getMatchedImages.length === 0) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>

</style>
