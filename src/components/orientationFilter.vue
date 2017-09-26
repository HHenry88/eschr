<template lang="html">
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>Orientation</span>
        <md-list-expand>
            <md-radio v-model="orientation" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">Portrait</md-radio>
            <md-radio v-model="orientation" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Landscape</md-radio>
        </md-list-expand>
    </md-list-item>
</template>

<script>
export default {
  data(){
    return {
      orientation: 1
    }
  }
}
</script>

<style lang="css">
</style>
