<template>
  <div class="my">
     <v-bar title="用户详情">
      <div slot="left" class="item" @click="$router.go(-1)">
        <i class="icon"></i>
        <span class="text">返回</span>
      </div>
    </v-bar>
    等待开发中
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style lang="stylus" scoped>
  .my {
    .item {
      display: flex
      padding-left: (30rem/20)
      .icon {
        align-self: center
        width: 27px
        height: 51px
        background-position: 0 (-343rem/20)
      }
      .text {
        align-self: center
        padding-left: (17rem/20)
        font-size: 44px
      }
    }
  }
</style>