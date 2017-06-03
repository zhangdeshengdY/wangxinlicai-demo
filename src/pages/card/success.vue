<template>
  <div class="success">
    <v-bar title="绑定结果页" bg="#fafafa"></v-bar>
    <div class="success-info">
      <i class="icon"></i>
      <p class="text">恭喜您验证成功</p>
    </div>
    <div class="submit-wrapper">
      <v-submit text="完成" :can-submit="true" @form-submit="formSubmit"></v-submit>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState([
        'aimRoute'
      ])
    },
    methods: {
      formSubmit () {
        this.$router.push(this.aimRoute) 
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .success {
    .success-info {
      margin-top: (222rem/20)
      text-align: center
      .icon {
        width: (170rem/20)
        height: (170rem/20)
        background-position: (-531rem/20) 0
      }
      .text {
        margin-top: (110rem/20)
        font-size: (48rem/20)
        line-height: (60rem/20)
      }
    }
    .submit-wrapper {
      padding: 0 (45rem/20)
      margin-top: (260rem/20)
    }
  }
</style>