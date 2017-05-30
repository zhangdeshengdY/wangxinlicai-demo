<template>
  <div class="home" v-scroll="{method:homeScrollFn, opts:homeScrollOpts }" @touchend="touchendFn">
    <div class="scroll-inner" ref="scroller">
      <div class="drop-refresh">
        <div class="refresh" ref="refresh">下拉刷新</div>
      </div>
      <v-header></v-header>
      <v-content>
        <v-slide></v-slide>
        <nav class="top-nav">
          <router-link class="register nav-item" to="/register">
            <i class="icon"></i>
            <span class="text">注册</span>
          </router-link>
          <router-link class="login nav-item" to="/login">
            <i class="icon"></i>
            <span class="text">登录</span>
          </router-link>
        </nav>
        <v-division></v-division>
        <div class="list-container">
          <header class="list-container-title">专享</header>
          <!--<product-list></product-list>-->
          <div class="product-list-wrapper">
            <ul calss="product-list">
              <li class="v-product-item-wrapper" v-for="deal in deals">
                <v-product-item :deal="deal"></v-product-item>
                <v-division></v-division>
              </li>
            </ul>
          </div>
          <router-link to="/list" class="btn-list">查看全部项目</router-link>
          <v-division></v-division>
        </div>
        <div class="about">
            <header class="about-title">
              网信理财
            </header>
            <div class="about-list">
              <dl class="about-item">
                <dt class="about-icon-wrapper">
                  <i class="icon"></i>
                </dt>
                <dd class="about-info">
                  <header class="info-title">
                    平台介绍
                  </header>
                  <div class="info-text">
                    网信理财平台2013年7月正式上线，是网信集团旗下综合金融资产交易信息服务平台。平台坚持安全、透明、稳定、高效的经营理念，管理团队均来自知名金融机构和大型互联网公司，提供包括网络贷款、公募基金、保险、证券和资产管理等多类产品的交易信息中介服务。
                  </div>
                </dd>
              </dl>
            </div>
        </div>
      </v-content>
    </div>
    <v-footer choosen="home"></v-footer>
  </div>
</template>
<script>
  import util from 'util'
  import routeData from 'route-data'
  import {mapState} from 'vuex'
  const REFRESHDIS = window.innerWidth/10
  export default {
    mixins: [routeData],
    created () {
      this.reqDeals()
    },
    routeData () {
      return {
        deals: [],
        homeScrollOpts: {
          probeType: 3,
          click: true
        },
        scroll: null,
        complete: true,
        isLoading: false,
        refreshTips: '下拉刷新'
      }
    },
    methods: {
      homeScrollFn (scroll) {
        this.scroll = scroll
        scroll.on('touchend', (pos) => {
          if(pos.y > REFRESHDIS){
            scroll.setDropFlag(true)
            scroll.scrollTo(0, REFRESHDIS, 200)
            this.$refs.refresh.innerHTML = '松手刷新'
            util.post('/deal', {}, (data) => {
              var data = JSON.parse(data)
              setTimeout(() => {
                scroll.setDropFlag(false)
                scroll.scrollTo(0, 0, 200)
                this.$refs.refresh.innerHTML = '下拉刷新'
                this.data = data.deals  
              }, 200)
            }, (err) => {
              console.log(err)
            })
          }
        })
        scroll.on('scroll', (pos) => {
          if(pos.y <  0) {
            scroll.setDropFlag(false)
          }
        })
      },
      touchendFn() {
        if (!this.complete) {
        }
      },
      reqDeals () {
        util.post('/deal', {page: 1, count: 5}, (data) => {
          var data = JSON.parse(data)
          this.deals = data.data
        }, (err) => {
          console.log(err)
        })
      }
    },
    computed: {
      ...mapState({
        user: (state) => {
          return state.user
        }
      })
    }
  }
</script>
<style lang="stylus" scoped>
  .home {
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: (153rem/20)
    background-color: #f5f5f9
    .scroll-inner {
      position: relative
      background-color: #fff
      .drop-refresh {
        position: absolute
        width: 100%
        left: 0
        top: -(80rem/20)
        height: (80rem/20)
        line-height: (80rem/20)
        text-align:center
      }
    }
  }
  .top-nav {
    display: flex
    height: (150rem/20) 
    border-top: (3rem/20) solid #cfced3
    .nav-item {
      width: 50%
      display: flex
      text-align: center
      justify-content: center
      .icon {
        align-self: center
        width: (64rem/20)
        height: (72rem/20)
        margin-right: (47rem/20)
        
      }
      .text {
        align-self: center
        font-size: (48rem/20)
        color: #000000
      }
    }
    .register {
      .icon {
        background-position: 0 -(59rem/20)
      }
    }
    .login {
      .icon {
        background-position: 0 -(131rem/20)
      }
    }
  }
  .list-container {
    .list-container-title {
      height: (123rem/20)
      padding: 0 (45rem/20)
      line-height: (123rem/20)
      font-size: (44rem/20)
      color: #000000
      border-bottom: (3rem/20) solid #d9d9d9
      
    }
    .btn-list {
      display: block
      height: (120rem/20)
      line-height: (120rem/20)
      text-align: center
      font-size: (44rem/20)
      color: #151515
    }
  }
  .about {
    .about-title {
      height: (123rem/20)
      line-height: (123rem/20)
      padding: 0 (45rem/20)
      font-size: (44rem/20)
      color: #000000
      border-bottom: (3rem/20) solid #d9d9d9
    }
    .about-item {
      display: flex
      padding: (45rem/20)
      .about-icon-wrapper {
        width: (169rem/20)
        margin-right: (32rem/20)
        .icon {
          width: (169rem/20)
          height: (168rem/20)
          background-position: -(312rem/20) 0
        }
      }
      .info-title {
        height: (65rem/20)
        line-height: (65rem/20)
        font-size:  (40rem/20)
        color: #000000
      }
      .info-text {
        flex: 1
        line-height: (54rem/20)
        font-size: (36rem/20)
        color: #909090
      }
    }
  }
  .refresh {
    font-size: (36rem/20)
  }
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
      background-position: 0 (-203rem/20)
    }
  }
  .btn-my {
    .icon {
      background-position: 0 (-273rem/20)
    }
  }
</style>