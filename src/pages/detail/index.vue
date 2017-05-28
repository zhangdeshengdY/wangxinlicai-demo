<template>
  <div class="detail">
    <v-bar title="投资详情">
      <div slot="left" class="item" v-tap="{methods: back}">
        <i class="icon"></i>
        <span class="text">返回</span>
      </div>
    </v-bar>
    <v-product-item>
      <div slot="link"></div>  <!--替换router-link标签， 使之不能点击-->
      <div slot="item-attach" class="item-attach">
        <div class="attach-inner">
          <div class="line"></div>
          <div class="time-line">
            <div class="publish">
              <div class="display-title">发布日</div>
              <div class="circle notice-color"></div>
              <p class="display-time">2017-05-27</p>
            </div>
            <div class="dest">
              <div class="display-title">预计起息日</div>
              <div class="circle notice-color"></div>
              <p class="display-time">2017-05-31</p>
              <p class="remain-time notice-color">剩余4天12时41分</p>
            </div>
          </div>
        </div>
      </div>
    </v-product-item>
    <p class="profit-about">预期收益简述</p>
    <p class="profit-desc">每<span class="high">万元</span>预期投资收益<span class="high">950</span>元</p>
    <v-division></v-division>
    <nav class="project-info">
      <router-link class="project-info-title" to="/item">项目信息</router-link>
      <router-link class="project-info-title" to="">保障方信息</router-link>
      <router-link class="project-info-title" to="">投资记录</router-link>
    </nav>
    <v-footer>
       <div class="bar-btn-wrapper">
        <div class="bar-btn">
          立即投资
        </div>
      </div>
    </v-footer>
  </div>
</template>
<script>
  export default {
    created () {
      //请求数据
      console.log(this.$route.query)
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .high {
    color: #ee4634
    border-color: #ee4634
  }
  .detail {
    font-size: (32rem/20)
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
    .item-attach {
      height: (300rem/20)
      padding: 0 (45rem/20)
      background: #f8f8f8
      border-radius: (14rem/20)
      .attach-inner {
        position: relative
        margin: (45rem/20) 0 (30rem/20)
        .line {
          position: absolute
          width: 100%
          left: 0
          top: (129rem/20)
          border-top: (3rem/20) dashed #e6e6e6
        }
        .time-line {
          position: relative
          display: flex
          justify-content: space-between
          padding-top: (6rem/20)
          text-align: center
          font-size: (34rem/20)
          color: #909090
          .display-title {
            line-height: (102rem/20)
          }
          .display-time {
            line-height: (57rem/20)
          }
          .publish {
            width: (296rem/20)
            text-align: center
            .circle {
              border-color: #f6a623
            }
          }
          .dest {
            width: (308rem/20)
            .remain-time {
              text-align: right
              line-height: (64rem/20)
              color: #f6a623
            }
          }
          .circle {
            display: inline-block
            width: (24rem/20)
            height: (24rem/20)
            border: (3rem/20) solid #e6e6e6
            border-radius: 50%
            background-color: #f8f8f8
          }
        }
      }
      
    }
    .profit-about {
      padding: 0 (45rem/20)
      font-size: (38rem/20)
      line-height: (114rem/20)
      color: #909090
      background-color: #f5f5fa
    }
    .profit-desc {
      padding: 0 (45rem/20)
      line-height: (156rem/20)
      font-size: (44rem/20)
      color: #545a5f
    }
    .project-info {
      display: flex
      text-align: center
      .project-info-title {
        flex: 1
        font-size: (44rem/20)
        line-height: (129rem/20)
      }
    }
    
  }
  .bar-btn-wrapper {
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    .bar-btn {
      width: (1118rem/20)
      height: (114rem/20)
      font-size: (54rem/20)
      line-height: (114rem/20)
      color: #fff
      text-align: center
      border-radius: (10rem/20)
      background-color: #ee4634
    }
  }
</style>