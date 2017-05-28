<template>
  <div class="footer">
    <slot>
      <router-link class="foot-item btn-home" to="/">
        <i class="icon"></i>
        <span class="text current">首页</span>
      </router-link>
      <router-link class="foot-item btn-my" to="/my">
        <i class="icon"></i>
        <span class="text">我的</span>
      </router-link>
    </slot>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style lang="stylus" scoped>
  .footer {
    display: flex
    position: fixed
    width: 100%
    left: 0
    bottom: 0
    height: (150rem/20)
    border-top: (3rem/20) solid #d9d9d9
    background-color: #fff
    .foot-item {
      width: 50%
      text-align:center
      padding-top: (13rem/20)
      .icon {
        width: (70rem/20)
        height: (70rem/20)
      }
      .text {
        display: block
        font-size: (36rem/20)
      }
    }
    .btn-home {
      .icon {
        background-position: 0 (-203rem/20)
      }
    }
    .btn-my {
      .icon {
        background-position: 0 (-273rem/20)
      }
    }

  }
</style>>