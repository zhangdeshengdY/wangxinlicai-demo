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
    padding: 42px 45px 15px
    .title {
      display: flex
      .tag {
        align-self: center
        width: 180px
        height: 45px
        padding: 0 16px
        margin-right: 30px
        font-size: 28px
        line-height: 45px
        color: #ee4634
        text-align: center
        border: 3px solid #ee4634
        border-radius: 24px
      }
      .kind {
        align-self: center
        font-size: 44px
        color: #000000
      }
    }
    .key-info {
      display: flex
      justify-content: space-between
      .desc {
        height: 70px
        line-height: 70px
        font-size: 38px
        color: #909090
      }
      .num {
        height: 79px
        line-height: 79px
        font-size: 32px
        color: #ee4634
      }
      .num-size {
        font-size: 58px
        font-weight: 700
      }
      .buy-btn {
        padding-top: 60px
      }
      .buy-btn-link {
        display: inline-block
        width: 216px
        height: 84px
        line-height: 84px
        text-align: center
        font-size: 42px
        color: #fff
        border-radius: 40px
        background-color: #ee4634
      }
    } 
    .remain-bar {
      height: 3px
      margin-top: 30px
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
      height: 114px
      line-height: 114px
      color: #909090
      font-size: 38px
    }
  }
</style>