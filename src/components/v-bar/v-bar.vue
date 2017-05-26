<template>
  <div class="bar">
    <div class="bar-inner center">
      <div class="login-in bar-item">您好， 请<router-link to="/login" class="login-link">登录</router-link></div>
      <div class="login-out bar-item pl20">免费注册</div>
      <div class="turn-mobile bar-item pl20">
        <span class="turn-mobile-link pl20">手机客户端</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style lang="stylus" scoped>
  .bar {
    height: 35px
    background: #fafafa
    border-bottom: 1px solid #e6e6e6
    font-size: 13px
    line-height: 35px
    text-align: right
    .bar-item {
      display: inline-block
    }
    .turn-mobile-link {
      border-left: 1px solid #4f4e4e
    }
    .login-out {
      color: #558804
      &:hover {
        text-decoration: underline
      }
    }
    .login-link{
      &:hover {
       text-decoration: underline
      }
    }
      
  }
  
</style>