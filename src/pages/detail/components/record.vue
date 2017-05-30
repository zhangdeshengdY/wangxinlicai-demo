<template>
  <div class="record">
    <ul class="record-list">
      <li class="record-item" v-for="customer in records">
        <div class="left">
          <p class="record-title">{{customer.name}}</p>
          <p class="record-time">{{customer.time}}</p>
        </div>
        <div class="right">
          {{customer.invest}}元
        </div>
      </li>
    </ul>
    <div class="load-more" v-tap="{methods: getRecords }">{{more}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      deal: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data () {
      return {
        page: 1,
        count: 6,
        records: [],
        more: '点击加载更多'
      }
    },
    created () {
      this.getRecords()
    },
    updated () {
      this.$emit('refresh') //动态组件内部更新无法引起外部组件更新， 手动触发外层数据更新
    },
    methods: {
      getRecords () {
        if((this.page-1)*this.count > this.deal.customers.length) {
          return
        }
        var ori = (this.page-1)*this.count,
            end = this.page*this.count,
            arr = this.deal.customers.slice(ori, end)

        this.records = this.records.concat(arr)

        if(this.page*this.count > this.deal.customers.length) {
          this.more = '没有更多了'
        } 
        this.page ++
        this.count ++
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .record-item {
    display: flex
    justify-content: space-between
    align-items: center
    padding: (45rem/20)
    border-bottom: (3rem/20) solid #e6e6e6
    box-sizing: border-box
    height: (180rem/20)
    .left {
      font-size: (38rem/20)
      color: #8f8f8f
    }
    .right {
      color: #ee4634
      font-size: (44rem/20)
    }
    
  }
  .load-more {
    height: (180rem/20)
    line-height: (180rem/20)
    font-size: (44rem/20)
    color: #929292
    text-align: center
  }
</style>