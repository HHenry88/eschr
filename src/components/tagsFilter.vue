<template lang="html">
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>Tags Filter</span>
        <md-list-expand>
        <md-chips v-model="tags" md-static></md-chips>
        </md-list-expand>
    </md-list-item>
</template>

<script>
export default {
  data(){
    return {
      tags:['orange', 'apple','pineapple','strawberry','kiwi']
    }
  }
}
</script>

<style lang="css">
</style>
