<template>
  <div class="my">
    <v-bar title="个人详情">
      <div class="set item" slot="right">设置</div>
    </v-bar>
    <div class="my-content" v-tap="{methods: loginout}">
      点击退出登录
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {LOGIN_OUT} from 'user'
  export default {
    methods: {
      ...mapActions([
        LOGIN_OUT
      ]),
      back () {
        this.$router.go(-1)
      },
      loginout () {
        this.LOGIN_OUT()
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .my-content {
    text-align: center
    font-size: (56rem/20)
  }
  .set {
    text-align: center
  }
</style>