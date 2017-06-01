<template>
  <div class="login">
    <v-bar title="登录" class="bar">
      <v-back slot="left"></v-back>
    </v-bar>
    <div class="welcome-banner"></div>
    <div class="login-content p45">
        <div class="login-tip">
          没有帐号?
          <a class="register-link" v-tap="{methods: toRegister}">立即注册</a>
        </div>
        <div class="info-box">
          <div class="input-item user-name">
            <input type="text" class="info-item" placeholder="帐号" name="user" 
              v-tap="{methods: input}"
              v-model="account"
            >
          </div>
          <div class="input-item">
            <input type="password" class="info-item" placeholder="登录密码" name="password" 
              v-tap="{methods: input}"
              v-model="password"
            >
          </div>
        </div>
        <button class="submit" 
         :class="{disablesubmit: !submitable}" 
         v-tap="{methods: submit}"
        >登录</button>
        <p class="forget-link">忘记密码？</p>
    </div>
  </div>
</template>
<script>
  import util from 'util'
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import {LOGIN_IN} from 'user'
  export default {
    data () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      ...mapActions([LOGIN_IN]),
      back () {
        this.$router.go(-1)
      },
      input (e) {
        e.event.target.focus()
      },
      submit () {
        if (this.submitable) {
          util.post('/api/user/login', {
            account: this.account,
            password: this.password
          }, (res) => {
            var user = JSON.parse(res).resData
            this.LOGIN_IN(user)
            if(user.hasBindCard){
              this.$router.push(this.aimRoute)
            }else {
              this.$router.go(-1)
            }
            console.log(this.$route)
          }, (err) => {
            console.log(err)
          })
        }
      },
      toRegister () {
        this.$router.push('/register')
      }
    },
    computed: {
      ...mapState([
        'aimRoute'
      ]),
      submitable () {
        if(this.account.trim() && this.password.trim()){
          return true
        }else {
          return false
        }
      }
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
         .input-item {
           display: flex
           height: (132rem/20)
           color: #a9a9a9
           .info-item {
             align-self: center
             display: block
             width: 100%
             height: (60rem/20)
             padding-left: (56rem/20)
             line-height: (60rem/20)
             font-size: (42rem/20)
             outline: none
           }
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
        .disablesubmit {
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