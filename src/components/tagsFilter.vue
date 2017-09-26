<template lang="html">
  <md-list-item>
      <md-icon>whatshot</md-icon>
      <span>Tags</span>
      <md-list-expand>
      <md-chip v-for="(tag, index) in tags" :key="index" md-editable>
        <span v-on:click="changed(tag)">{{tag}}</span>
      </md-chip>
      </md-list-expand>
  </md-list-item>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {
  data(){
    return {
      tags:['redApple', 'bike', 'grass', 'pineapple', 'skyrim'],
      selectedTags:[]
    }
  },
  methods: {
    ...mapActions([
      'editFilters'
    ]),
    changed: function(value){
      const selectedIndex = this.selectedTags.indexOf(value);

      if(selectedIndex !== -1){
        this.selectedTags.splice(selectedIndex, 1)
      }else {
        this.selectedTags.push(value);
      }

      store.dispatch('editFilters', {
        filterKey: 'things',
        filterValue: this.selectedTags
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
