<template>
  <div class="bar" :style="bgObj">
    <slot name="left">
      <div class="item"></div>
    </slot>
    <h2 class="title">{{title}}</h2>
    <slot name="right">
      <div class="item"></div>
    </slot>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      bg: {
        type: String,
        default: '#fff'
      }
    },
    computed: {
      bgObj () {
        return {
          background: this.bg
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .bar {
    display: flex
    justify-content: space-between
    height: (135rem/20)
    background: #fff
    border-bottom: (3rem/20) solid #f2f2f2
    color: #000000
    line-height: (135rem/20)
    .title {
      flex: 1
      line-height: (135rem/20)
      text-align: center
      font-size: (54rem/20)
    }
    .item {
      width: (200rem/20)
      height: 100%
    }
      
  }
  
</style>