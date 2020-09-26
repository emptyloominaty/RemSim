<template>
  <div id="app">
    <Settings />
    <Timeline />
    <Chart/>
  </div>
</template>

<script>
import Timeline from './components/Timeline.vue'
import Settings from './components/Settings.vue'
import Chart from './components/chart.vue'

export default {
  name: 'App',
  components: {
    Timeline,
    Settings,
    Chart
  },
  methods: {
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
