<template>
  <div class="detail" v-scroll="{opts: scrollOpt, method: scrollFn}">
    <div class="scroller">
      <v-bar title="投资详情">
        <div slot="left" class="item" v-tap="{methods: back}">
          <i class="icon"></i>
          <span class="text">返回</span>
        </div>
      </v-bar>
      <v-product-item :deal="deal">
        <div slot="link"></div>  <!--替换router-link标签， 使之不能点击-->
        <div slot="item-attach" class="item-attach">
          <div class="attach-inner">
            <div class="line"></div>
            <div class="time-line">
              <div class="publish">
                <div class="display-title">发布日</div>
                <div class="circle notice-color"></div>
                <p class="display-time">{{deal.publish}}</p>
              </div>
              <div class="dest">
                <div class="display-title">预计起息日</div>
                <div class="circle notice-color"></div>
                <p class="display-time">{{deal.evaluate}}</p>
                <p class="remain-time notice-color">剩余4天12时41分</p>
              </div>
            </div>
          </div>
        </div>
      </v-product-item>
      <p class="profit-about">预期收益简述</p>
      <p class="profit-desc">每<span class="high">万元</span>预期投资收益<span class="high">{{deal.everyIncome}}</span>元</p>
      <v-division></v-division>
      <nav class="project-info">
        <a class="project-info-title" :class="{current: currentView==='project'}" v-tap="{methods: toProject}">项目信息</a>
        <a class="project-info-title" :class="{current: currentView==='secure'}" v-tap="{methods: toSecure}">保障方信息</a>
        <a class="project-info-title" :class="{current: currentView==='record'}" v-tap="{methods: toRecord}">投资记录</a>
      </nav>
      <component :is="currentView" :deal="deal" @refresh="refresh"></component>
      <div class="warn">
        <div class="line"></div>
        <p class="text">市场有风险, 投资需谨慎</p>
        <div class="line"></div>
      </div>
    </div>
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
  import util from 'util'
  import secure from './components/secure.vue'
  import project from './components/project.vue'
  import record from './components/record.vue'

  export default {
    created () {
      //请求数据
      var query = this.$route.query
      util.post('/deal/detail', {dealid: query.dealid}, (data) => {
        this.deal = JSON.parse(data).deal
      })
    },
    data () {
      return {
        deal: {},
        currentView: 'project',
        bug: 1,
        scrollOpt: {
          bounce: false
        },
        scroll: {}
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      toProject () {
        this.currentView = 'project'
      },
      toSecure () {
        this.currentView = 'secure'
      },
      toRecord () {
        this.currentView = 'record'
      },
      scrollFn (scroll) {
        this.scroll = scroll
      },
      refresh () {
        this.scroll.refresh()
      }
    },
    components: {
      secure,
      project,
      record
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
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: (150rem/20)
    overflow: hidden
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
  .project-info {
    border-bottom: (3rem/20) solid #e6e6e6
  }
  .current {
    border-bottom: (6rem/20) solid #ee4634
    color: #ee4634
  }
  .warn {
    display: flex
    height: (180rem/20)
    justify-content: center
    align-items: center
    background-color: #f5f5fa
    .line {
      width: (90rem/20)
      border-bottom: (3rem/20) solid #e7e7e8
    }
    .text {
      margin: 0 (48rem/20)
      font-size: (36rem/20)
      color: #dcdcdc
    }
  }
  .bug {
    display: none
  }
</style>