<template lang="html">
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>Orientation</span>
        <md-list-expand>
            <md-radio v-model="orientation" id="my-test4" name="my-test-group2" md-value="1" class="md-primary" v-on:change="changed(1)">Portrait</md-radio>
            <md-radio v-model="orientation" id="my-test5" name="my-test-group2" md-value="2" class="md-primary" v-on:change="changed(2)">Landscape</md-radio>
        </md-list-expand>
    </md-list-item>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {
  data(){
    return {
      orientation: 2
    }
  },
  methods: {
    ...mapActions([
      'editFilters'
    ]),
    changed: function(value){
      console.log(value);
      store.dispatch('editFilters', {
        filterKey: 'orientation',
        filterValue: value
      })
    }
  },
  computed: {
    ...mapGetters([
      'getFilters'
    ])
  }
}
</script>

<style lang="css">
</style>
