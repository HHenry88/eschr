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
  methods: {
    ...mapActions([
      'retrieveMatchedImages'
    ])
  },
  computed: {
    ...mapGetters([
      'getMatchedImages'
    ])
  },
  beforeRouteEnter( to, from, next) {
    if(!from.name){
      store.dispatch('retrieveMatchedImages', {result: to.params.tags, thumbnail: false})
        .then(() => {
          next()
        })
        .catch((err) => {
          console.warn(err);
        })
    } else {
      next();
    }
  }
}
</script>

<style lang="css" scoped>

</style>
