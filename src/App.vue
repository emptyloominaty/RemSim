<template>
  <div id="app">
    <Settings />
    <Timeline />
  </div>
</template>

<script>
import Timeline from './components/Timeline.vue'
import Settings from './components/Settings.vue'
export default {
  name: 'App',
  components: {
    Timeline,
    Settings
  }
}
</script>

<style lang="scss">
  html {
    background-color: #222;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1f1d24;
    margin-top: 60px;
  }
</style>
