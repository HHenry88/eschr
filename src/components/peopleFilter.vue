<template lang="html">
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>People</span>
        <md-list-expand>
          <md-list-expand>
              <md-radio v-model="people" id="my-test4" name="my-test-group2" md-value="1" class="md-primary" v-on:change="changed(1)">With People</md-radio>
              <md-radio v-model="people" id="my-test5" name="my-test-group2" md-value="2" class="md-primary" v-on:change="changed(2)">Without People</md-radio>
          </md-list-expand>
        </md-list-expand>
    </md-list-item>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {
  data(){
    return {
      people: 1
    }
  },
  methods: {
    ...mapActions([
      'editFilters'
    ]),
    changed: function(value){
      store.dispatch('editFilters', {
        filterKey: 'people',
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
