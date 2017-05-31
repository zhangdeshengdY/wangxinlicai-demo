<template>
  <div class="product-item">
    <div class="product-item">
      <header class="title">
        <div class="tag">{{deal.tag}}</div>
        <div class="kind">{{deal.productId}}</div>
      </header>
      <div class="key-info">
        <div class="info-item predict">
          <p class="desc">预期年化</p>
          <p class="num num-size">{{deal.income}}</p>
        </div>
        <div class="info-item term">
          <p class="desc">期限</p>
          <p class="num"><span class="num-size">{{deal.term}}</span>个月</p>
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
          {{deal.threshold}}元起
        </div>
        <div class="attach-item">
          {{deal.type|dealType}}
        </div>
        <div class="attach-item">
          剩{{deal.remain}}元
        </div>
      </div>
        <a v-tap="{methods: toDetail}" class="detail-link">

        </a>
      </slot>
      <slot name="item-attach"></slot>
    </div>
  </div>
</template>
<script>
  const TYPE1 = '到期支付本金收益'
  const TYPE2 = '按月支付收益到期还本'
  export default {
    props: {
      deal: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    methods: {
      toDetail () {
        this.$router.push('/deal/detail?dealid='+this.deal.dealid)
      }
    },
    filters: {
      dealType (value) {
        var type = ''
        switch (Number(value)) {
          case 0:
            type = TYPE1
            break
          case 1:
            type = TYPE2
            break
        }
        return type
      }
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
        z-index: 20
        position: relative
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