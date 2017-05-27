<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/v-header/v-header'
  import vFooter from './components/v-footer/v-footer'
  import vContent from './components/v-content/v-content'
  export default {
    name: 'app',
    components: {
      vHeader,
      vContent,
      vFooter
    }
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
