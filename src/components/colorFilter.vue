<template lang="html">
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>Color</span>
        <md-list-expand>
        <md-chip v-for="(color, index) in colors" :key="index" md-editable v-bind:style="{backgroundColor: color}">
          <span v-on:click="changed(color)">{{color}}</span>
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
      colors:['red', 'blue', 'green', 'purple', 'yellow'],
      selectedColors:[]
    }
  },
  methods: {
    ...mapActions([
      'editFilters'
    ]),
    changed: function(value){
      const selectedIndex = this.selectedColors.indexOf(value);

      if(selectedIndex !== -1){
        this.selectedColors.splice(selectedIndex, 1)
      }else {
        this.selectedColors.push(value);
      }

      store.dispatch('editFilters', {
        filterKey: 'colors',
        filterValue: this.selectedColors
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
  .active {
    opacity: 0.7;
  }
</style>
