<template lang="html">
  <md-list-item>
      <md-icon>whatshot</md-icon>
      <span>Time of Day</span>
      <md-list-expand>
        <md-list-expand>
            <md-radio v-model="time" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">Day Time</md-radio>
            <md-radio v-model="time" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Night Time</md-radio>
        </md-list-expand>
      </md-list-expand>
  </md-list-item>
</template>

<script>
export default {
  data(){
    return {
      time: 1
    }
  }
}
</script>

<style lang="css">
</style>
