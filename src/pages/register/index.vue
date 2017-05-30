<template>
  <div class="register-wrapper">
    <div class="register">
      <v-bar title="注册">
        <div slot="left" class="item text" v-tap="{methods: back}">
          <i class="icon"></i>
          <span class="text">返回</span>
        </div>
        <div class="item notice text" slot="right" v-tap="{methods: go}">
          立即登录
        </div>
      </v-bar>
      <div class="welcome-banner"></div>
      <div class="register-box">
        <div class="info-box">
          <input type="text" class="user-name info-item" placeholder="手机号" name="user">
          <input type="password" class="password info-item" placeholder="登录密码" name="password">
        </div>
        <p class="register-protocal" v-tap="{methods: showProtocal}">我同意<span>注册协议</span></p>
        <button class="submit disable-submit">注册</button>
      </div>
      <div class="register-tips">
        <img src="./imgs/register-tips.png" alt="">
      </div>
    </div>
    <transition name="fade">
      <v-pop v-if="show" @disappear="show=false"></v-pop>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      go () {
        this.$router.push('login')
      },
      showProtocal () {
        this.show = true
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .register {
    position: absolute
    left: 0
    top: 0
    bottom: 0
    right: 0
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
      .login {
        color: #5ca9e4
      }
    }
    .notice {
      color: #5ca9e4
      font-size: (44rem/20)
    }
    .welcome-banner {
      height: (532rem/20)
      background: url(../../assets/imgs/banner_1.jpg) no-repeat center center
      background-size: 100% 100%
    }
    .register-box {
      padding: (45rem/20)
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
        line-height: (114rem/20)
        font-size: (54rem/20)
        font-weight: 700
        background-color: #ee4634
        color: #fff
      }
      .disable-submit {
        color: #f8d2d2
      }
      .register-protocal {
        line-height: (184rem/20)
        font-size: (44rem/20)
        span {
          color: #5ca9e4
        }
      }
      
    }
    .register-tips {
      img {
        width: 100%
      }
    }
    
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition: .2s
  }
</style>