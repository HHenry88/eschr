<template lang="html">
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>Color</span>
        <md-list-expand>
        <md-chips v-model="colors" md-static></md-chips>
        </md-list-expand>
    </md-list-item>
</template>

<script>
export default {
  data(){
    return {
      colors:['red', 'blue', 'green', 'purple', 'yellow']
    }
  }
}
</script>

<style lang="css">
</style>
