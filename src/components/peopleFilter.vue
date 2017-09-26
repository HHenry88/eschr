<template lang="html">
    <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>People</span>
        <md-list-expand>
          <md-list-expand>
              <md-radio v-model="people" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">With People</md-radio>
              <md-radio v-model="people" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Without People</md-radio>
          </md-list-expand>
        </md-list-expand>
    </md-list-item>
</template>

<script>
export default {
  data(){
    return {
      people: 1
    }
  }
}
</script>

<style lang="css">
</style>
