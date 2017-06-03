<template>
  <div class="card-start">
    <v-bar title="绑定银行卡" bg="#fafafa" class="card-bar"></v-bar>
    <div class="kind-wrapper">
      <div class="tip">
        为保障您的资金安全,需要先完成身份认证流程<br />
        (任选<span class="high">一种</span>完成即可)
        <div class="procedure">
          查看流程指引
        </div>
      </div>
      <div class="speed-bind bind-item" v-tap="{methods: toQuick}">快捷认证绑卡</div>
      <div class="little-bind bind-item">小额转账绑卡</div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toQuick () {
        this.$router.push('/card/quick')  
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .card-bar {
    background-color: #f0eef5  
  }
  .kind-wrapper {
    padding: (68rem/20) (45rem/20)
    .tip {
      position: relative
      margin-bottom: (42rem/20)
      line-height: (70rem/20)
      font-size: (52rem/20)
      color: #070707
      .procedure {
        position: absolute
        right:0
        bottom: 0
        font-size: (44rem/20)
        color: #2ba9e3
      }
    }
    .bind-item {
      height: (280rem/20)
      line-height: (280rem/20)
      margin-bottom: (50rem/20)
      font-size: (54rem/20)
      text-align: center
      background-color: #fff
      border-radius: (13rem/20)
    }
    

  }
</style>