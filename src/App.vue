<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="stylus">
  @import './assets/styl/base'
  .icon {
    display: inline-block
    overflow: hidden
    background: url(./assets/imgs/icon.png)
    background-size: (1112rem/20) (859rem/20)
  }
</style>
