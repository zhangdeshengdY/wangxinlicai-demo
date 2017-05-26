<template>
  <div class="footer">
    <router-link class="foot-item btn-home" to="/">
      <i class="icon"></i>
      <span class="text current">首页</span>
    </router-link>
    <router-link class="foot-item btn-my" to="/my">
      <i class="icon"></i>
      <span class="text">我的</span>
    </router-link>
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
    height: 150px
    padding-top: 13px
    border-top: 3px solid #d9d9d9
    background-color: #fff
    .foot-item {
      width: 50%
      text-align:center
      .icon {
        width: 70px
        height: 70px
      }
      .text {
        display: block
        font-size: 36px
      }
    }
    .btn-home {
      .icon {
        background-position: 0 -203px
      }
    }
    .btn-my {
      .icon {
        background-position: 0 -273px
      }
    }

  }
</style>>