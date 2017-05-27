<template>
  <div class="product-list-wrapper">
    <ul calss="product-list">
      <li class="product-item-wrapper">
        <div class="product-item">
          <header class="title">
            <div class="tag">初夏特惠标</div>
            <div class="kind">盈嘉A10666</div>
          </header>
          <div class="key-info">
            <div class="info-item predict">
              <p class="desc">预期年化</p>
              <p class="num num-size">9.50%</p>
            </div>
            <div class="info-item term">
              <p class="desc">期限</p>
              <p class="num"><span class="num-size">12</span>个月</p>
            </div>
            <div class="buy-btn">
              <router-link to="/buy" class="buy-btn-link">投资</router-link>
            </div>
          </div>
          <div class="remain-bar">
            <div class="actually-bar"></div>
          </div>
          <div class="attach">
            <div class="attach-item">
              100元起
            </div>
            <div class="attach-item">
              按月支付收益还本
            </div>
            <div class="attach-item">
              剩55,636,53元
            </div>
          </div>
          <router-link to="deal/detail?dealid=123" class="detail-link"></router-link>
        </div>
        <division></division>
      </li>
      <li class="product-item-wrapper">
        <div class="product-item">
          <header class="title">
            <div class="tag">初夏特惠标</div>
            <div class="kind">盈嘉A10666</div>
          </header>
          <div class="key-info">
            <div class="info-item predict">
              <p class="desc">预期年化</p>
              <p class="num num-size">9.50%</p>
            </div>
            <div class="info-item term">
              <p class="desc">期限</p>
              <p class="num"><span class="num-size">12</span>个月</p>
            </div>
            <div class="buy-btn">
              <router-link to="/buy" class="buy-btn-link">投资</router-link>
            </div>
          </div>
          <div class="remain-bar">
            <div class="actually-bar"></div>
          </div>
          <div class="attach">
            <div class="attach-item">
              100元起
            </div>
            <div class="attach-item">
              按月支付收益还本
            </div>
            <div class="attach-item">
              剩55,636,53元
            </div>
          </div>
          <router-link to="deal/detail?dealid=234" class="detail-link"></router-link>
        </div>
        <division></division>
      </li>
      <li class="product-item-wrapper">
        <div class="product-item">
          <header class="title">
            <div class="tag">初夏特惠标</div>
            <div class="kind">盈嘉A10666</div>
          </header>
          <div class="key-info">
            <div class="info-item predict">
              <p class="desc">预期年化</p>
              <p class="num num-size">9.50%</p>
            </div>
            <div class="info-item term">
              <p class="desc">期限</p>
              <p class="num"><span class="num-size">12</span>个月</p>
            </div>
            <div class="buy-btn">
              <router-link to="/buy" class="buy-btn-link">投资</router-link>
            </div>
          </div>
          <div class="remain-bar">
            <div class="actually-bar"></div>
          </div>
          <div class="attach">
            <div class="attach-item">
              100元起
            </div>
            <div class="attach-item">
              按月支付收益还本
            </div>
            <div class="attach-item">
              剩55,636,53元
            </div>
          </div>
        </div>
        <division></division>
      </li>
      <li class="product-item-wrapper">
        <div class="product-item">
          <header class="title">
            <div class="tag">初夏特惠标</div>
            <div class="kind">盈嘉A10666</div>
          </header>
          <div class="key-info">
            <div class="info-item predict">
              <p class="desc">预期年化</p>
              <p class="num num-size">9.50%</p>
            </div>
            <div class="info-item term">
              <p class="desc">期限</p>
              <p class="num"><span class="num-size">12</span>个月</p>
            </div>
            <div class="buy-btn">
              <router-link to="/buy" class="buy-btn-link">投资</router-link>
            </div>
          </div>
          <div class="remain-bar">
            <div class="actually-bar"></div>
          </div>
          <div class="attach">
            <div class="attach-item">
              100元起
            </div>
            <div class="attach-item">
              按月支付收益还本
            </div>
            <div class="attach-item">
              剩55,636,53元
            </div>
          </div>
        </div>
        <division></division>
      </li>
    </ul>
  </div>
</template>
<script>
  import division from '../other/division'
  export default {
    components: {
      division
    }
  }
</script>
<style lang="stylus" scoped>
  .product-item {
    position: relative
    padding: (42rem/20) (42rem/20) (15rem/20)
    .title {
      display: flex
      .tag {
        align-self: center
        width: (180rem/20)
        height: (45rem/20)
        padding: 0 (16rem/20)
        margin-right: (30rem/20)
        font-size: (28rem/20)
        line-height: (45rem/20)
        color: #ee4634
        text-align: center
        border: (3rem/20) solid #ee4634
        border-radius: (24rem/20)
      }
      .kind {
        align-self: center
        font-size: (44rem/20)
        color: #000000
      }
    }
    .key-info {
      display: flex
      justify-content: space-between
      .desc {
        height: (70rem/20)
        line-height: (70rem/20)
        font-size: (38rem/20)
        color: #909090
      }
      .num {
        height: (79rem/20)
        line-height: (79rem/20)
        font-size: (32rem/20)
        color: #ee4634
      }
      .num-size {
        font-size: (58rem/20)
        font-weight: 700
      }
      .buy-btn {
        padding-top: (60rem/20)
      }
      .buy-btn-link {
        display: inline-block
        width: (216rem/20)
        height: (84rem/20)
        line-height: (84rem/20)
        text-align: center
        font-size: (42rem/20)
        color: #fff
        border-radius: (40rem/20)
        background-color: #ee4634
      }
    } 
    .remain-bar {
      height: (3rem/20)
      margin-top: (30rem/20)
      background: #d9d9d9
      .actually-bar {
        height: 100%
        width: 75%
        background-color: #ee4634
      }
    }
    .attach {
      display: flex
      justify-content: space-between
      height: (114rem/20)
      line-height: (114rem/20)
      color: #909090
      font-size: (38rem/20)
    }
    .detail-link {
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0
    }
  }
</style>