<template>
  <div id="app">
    <Echarts1></Echarts1>
  </div>
</template>

<script>
import Echarts1 from '@/components/Echarts1'
export default {
  name: 'App',
  components:{Echarts1}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
