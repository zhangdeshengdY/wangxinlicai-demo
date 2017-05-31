<template>
  <div class="item text" v-tap="{methods: back}">
    <i class="icon"></i>
    <span class="text">返回</span>
  </div>
</template>
<script>
  export default {
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="stylus" scoped>
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
</style>