<template>
  <div class="footer">
     <slot>
        <a class="foot-item btn-home" :class="{current: choosen === home }" v-tap="{methods: toHome}">
          <i class="icon"></i>
          <span class="text">首页</span>
        </a>
        <a class="foot-item btn-my" :class="{current: choosen === my}" v-tap="{methods: toMy}">
          <i class="icon"></i>
          <span class="text">我的</span>
        </a>
     </slot>
  </div>
</template>
<script>  
  export default {
    props: {
      choosen: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        home: 'home',
        my: 'my'
      }
    },
    methods:　{
      toHome () {
        this.$router.push('/')
      },
      toMy () {
        this.$router.push('/my')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .footer {
    display: flex
    position: fixed
    width: 100%
    left: 0
    bottom: 0
    height: (150rem/20)
    border-top: (3rem/20) solid #d9d9d9
    background-color: #fff
    .foot-item {
      width: 50%
      text-align:center
      padding-top: (13rem/20)
      .icon {
        width: (70rem/20)
        height: (70rem/20)
      }
      .text {
        display: block
        font-size: (36rem/20)
      }
    }
    .btn-home {
      .icon {
        background-position: 0 (-415rem/20)
      }
      &.current .icon {
        background-position: 0 (-203rem/20)
      }
      &.current .text {
        color: #ee4634
      }
    }
    .btn-my {
      .icon {
        background-position: 0 (-273rem/20)
      }
    }

  }
</style>>