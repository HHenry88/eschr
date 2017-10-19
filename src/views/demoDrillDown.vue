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
      'retrieveMatchedImages',
      'setSearchTerm'
    ])
  },
  computed: {
    ...mapGetters([
      'getMatchedImages',
      'getSearchTerm'
    ])
  },
  beforeRouteEnter( to, from, next) {
    console.log('from',from);
    console.log('to',to);
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
  },
  created(){
    console.log(this);
    const tag = this.$router.history.current.params.tags;
    if(this.$router.history.current.params.tags !== this.getSearchTerm) {
      store.dispatch('setSearchTerm', tag)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
