<template>
  <div class="login">
    <v-bar title="登录" class="bar">
      <div slot="left" class="item text" v-tap="{methods: back}">
        <i class="icon"></i>
        <span class="text">返回</span>
      </div>
    </v-bar>
    <div class="welcome-banner"></div>
    <div class="login-content p45" @touchstart.stop="">
        <div class="login-tip">
          没有帐号?
          <router-link to="/register" class="register-link" >立即注册</router-link>
        </div>
        <div class="info-box">
          <input type="text" class="user-name info-item" placeholder="手机号" name="user">
          <input type="password" class="password info-item" placeholder="登录密码" name="password">
        </div>
        <button class="submit disable-submit">登录</button>
        <p class="forget-link">忘记密码？</p>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back () {
        this.$router.go(-1)
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="stylus" scoped>
  .login {
    position: absolute
    left: 0
    top: 0
    bottom: 0
    right: 0
    background-color: #f5f5f9
    .item {
      display: flex
      padding-left: (30rem/20)
      .icon {
        align-self: center
        width: (27rem/20)
        height: (51rem/20)
        background-position: 0 (-343rem/20)
      }
      .text {
        align-self: center
        padding-left: (17rem/20)
        font-size: (44rem/20)
      }
    }
    .welcome-banner {
      height: (532rem/20)
      background: url(./imgs/login-banner.png) no-repeat center center
     }
     .login-tip {
       height: (138rem/20)
       line-height: (138rem/20)
       font-size: (40rem/20)
       color: #909090
       text-align: right
       .register-link {
         color: #5ca9e4
       }
     }
     .login-content {
       .info-box {
         width: 100%
         background-color: #fff
         border: (3rem/20) solid #dbdbdb
         border-radius: (14rem/20)
         overflow: hidden
         .info-item {
           display: block
           width: 100%
           height: (132rem/20)
           padding-left: (56rem/20)
           line-height: (132rem/20)
           font-size: (42rem/20)
           color: #a9a9a9
           outline: none
         }
         .user-name {
           border-bottom: (3rem/20) solid #dbdbdb
         }
       }
       .submit {
          display: block
          width: 100%
          margin-top: (60rem/20)
          line-height: (114rem/20)
          font-size: (54rem/20)
          font-weight: 700
          background-color: #ee4634
          color: #fff
        }
        .disable-submit {
          background-color: #f9aeac
          color: #f8d2d2
        }
        .forget-link {
          text-align: center
          line-height: (120rem/20)
          font-size: (44rem/20)
          color: #5ca9e4
        }
     }
  
  
  }
  
</style>