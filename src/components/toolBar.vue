<template id="toolBar">
  <div>
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1, float: left">Demo Title</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="sidenav" md-theme="side-nav-bar-header">
    <md-toolbar class="md-account-header">
      <md-list>
        <md-list-item class="md-avatar-list">
          <md-avatar class="md-large">
            <img src="https://placeimg.com/64/64/people/8" alt="People">
          </md-avatar>
        </md-list-item>

        <md-list-item>
          <div class="md-list-text-container">
            <span>John Doe</span>
            <span>johndoe@email.com</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-toolbar>

    <md-list>
      <md-list-item @click="$refs.sidenav.toggle()">
        <md-icon>insert_drive_file</md-icon> <span>Demo 1</span>
      </md-list-item>

      <md-list-item @click="$refs.sidenav.toggle()">
        <md-icon>people</md-icon> <span>Demo 2</span>
      </md-list-item>

      <md-list-item @click="$refs.sidenav.toggle()">
        <md-icon>access_time</md-icon> <span>Demo 3</span>
      </md-list-item>

      <md-list-item @click="$refs.sidenav.toggle()">
        <md-icon>start</md-icon> <span>Feedback</span>
      </md-list-item>

      <md-list-item @click="$refs.sidenav.toggle()">
        <md-icon>delete</md-icon> <span>About</span>
      </md-list-item>
      <md-list-item @click="$refs.sidenav.toggle()">
        <md-icon>delete</md-icon> <span>Contact Us</span>
      </md-list-item>
    </md-list>
  </md-sidenav>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial);

Vue.material.registerTheme('side-nav-bar-header', {
  primary: 'white',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

  export default {
    name: 'toolBar',
    data(){
      return {
      }
    }
  }
</script>

<style scoped>
  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
  }

  .md-title {
    color: #fff;
  }

  .md-list {
    overflow: auto;
  }

  .md-list-action .md-icon {
    color: rgba(#000, .26);
  }

  .md-avatar-icon .md-icon {
    color: #fff !important;
  }

  .md-sidenav .md-list-text-container > :nth-child(2) {
    color: rgba(#fff, .54);
  }

  .md-account-header {
    .md-list-item:hover .md-button:hover {
      background-color: inherit;
    }

    .md-avatar-list .md-list-item-container:hover {
      background: none !important;
    }
  }
</style>
