<template>
  <div class="quick">
    <v-bar title="快捷认证绑卡" bg="#fafafa"></v-bar>
    <div class="quick-title">
      <p>请按提示完成快捷认证绑卡</p>
      <p>持卡人: 张良</p>
    </div>
    <div class="quick-input-item">
      <input type="text" name="" id="" class="text-input" v-model="identify">
    </div>
    <div class="quick-input-item">
      <input type="text" name="" id="" class="text-input" v-model="cardNumber">
    </div>
    <div class="notice">
      如验证成功， 此卡将作为您唯一的充值卡和提现卡
    </div>
    <v-submit text="下一步" :can-submit="canSubmit" @form-submit="formSubmit"></v-submit>
  </div>
</template>
<script>
  import util from 'util'
  export default {
    data () {
      return {
        identify: '',
        cardNumber: ''
      }
    },
    computed: {
      canSubmit () {
        if(this.identify.trim() && this.cardNumber.trim()){
          return true
        }else {
          return false
        }
      }
    },
    methods: {
      formSubmit () {
        if(!this.identify.trim() || !this.cardNumber.trim()) {
          return
        }
        var formData = {
          identify: this.identify,
          cardNumber: this.cardNumber
        }
        util.post('/api/validate/card', formData, (res) => {
          if(JSON.parse(res).status == 0) {
            this.$router.push('/card/success')
          }
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .quick-title {
    padding: (20rem/20) (45rem/20) 0
    font-size: (52rem/20)
    line-height: (122rem/20)
    color: #000
  }
  .quick-input-item {
    display: flex
    padding: 0 (45rem/20)
    height: (166rem/20)
    background-color: #fff
    margin-bottom: (41rem/20)
    .text-input {
      align-self: center
      display: block
      width: 100%
      line-height: (83rem/20)
      font-size: (48rem/20)
      outline: none
    }
  }
  .notice {
    padding: 0 (45rem/20)
    font-size: (44rem/20)
    line-height: (62rem/20)
    color: #909090
  }
 
</style>