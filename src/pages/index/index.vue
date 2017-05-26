<template>
  <div class="home" v-scroll="{method:homeScrollFn, opts:homeScrollOpts }" @touchend="touchendFn">
    <div class="scroll-inner" ref="scroller">
      <div class="drop-refresh">
        <div class="refresh" ref="refresh">下拉刷新</div>
        <!--<div class="lose-hand" v-show="!complete">松手刷新数据</div>-->
      </div>
      <v-header></v-header>
      <v-content>
        <slide></slide>
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
        <division></division>
        <div class="list-container">
          <header class="list-container-title">专享</header>
          <product-list></product-list>
          <router-link to="/list" class="btn-list">查看全部项目</router-link>
          <division></division>
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
    <v-footer></v-footer>
  </div>
</template>
<script>
  import vBar from '../../components/v-bar/v-bar'
  import vHeader from '../../components/v-header/v-header'
  import vFooter from '../../components/v-footer/v-footer'
  import vContent from '../../components/v-content/v-content'
  import slide from '../../components/slide/slide'
  import division from '../../components/other/division'
  import productList from '../../components/product-list/product-list'
  import Velocity from 'velocity-animate'

  const REFRESHDIS = 140
  export default {
    data () {
      return {
        homeScrollOpts: {
          probeType: 3
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
        scroll.on('scroll', (pos) => {
          if (pos.y > REFRESHDIS) {
            this.complete = false
            this.$refs.refresh.innerHTML = "松手刷新数据"
          }
          // if (!this.complete && (pos.y>130&&pos.y<150)) {
          //   this.scroll.disable()
          // }
        })
      },
      touchendFn() {
        if (!this.complete) {
          setTimeout(() => {
            
          },0)
          this.scroll.disable()
          this.scroll.scrollTo(0, 140, 200)
        }
      }
    },
    components: {
      vBar,
      vHeader,
      vContent,
      vFooter,
      slide,
      division,
      productList
    }
  }
</script>
<style lang="stylus" scoped>
  .home {
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 153px
    background-color: #f5f5f9
    .scroll-inner {
      position: relative
      background-color: #fff
      .drop-refresh {
        position: absolute
        width: 100%
        left: 0
        top: -80px
        height: 80px
        line-height: 80px
        text-align:center
      }
    }
  }
  .top-nav {
    display: flex
    height: 150px
    border-top: 3px solid #cfced3
    .nav-item {
      width: 50%
      display: flex
      text-align: center
      justify-content: center
      .icon {
        align-self: center
        width: 64px
        height: 72px
        margin-right: 47px
        
      }
      .text {
        align-self: center
        font-size: 48px
        color: #000000
      }
    }
    .register {
      .icon {
        background-position: 0 -59px
      }
    }
    .login {
      .icon {
        background-position: 0 -131px
      }
    }
  }
  .list-container {
    .list-container-title {
      height: 123px
      padding: 0 45px
      line-height: 123px
      font-size: 44px
      color: #000000
      border-bottom: 3px solid #d9d9d9
      
    }
    .btn-list {
      display: block
      height: 120px
      line-height: 120px
      text-align: center
      font-size: 44px
      color: #151515
    }
  }
  .about {
    .about-title {
      height: 123px
      line-height: 123px
      padding: 0 45px
      font-size: 44px
      color: #000000
      border-bottom: 3px solid #d9d9d9
    }
    .about-item {
      display: flex
      padding: 45px
      .about-icon-wrapper {
        width: 169px
        margin-right: 32px
        .icon {
          width: 169px
          height: 168px
          background-position: -312px 0
        }
      }
      .info-title {
        height: 65px
        line-height: 65px
        font-size:  40px
        color: #000000
      }
      .info-text {
        flex: 1
        line-height: 54px
        font-size: 36px
        color: #909090
      }
    }
  }
  .test {
    height: 500px
    background-color: red
  }
</style>