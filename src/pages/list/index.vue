<template>
  <div class="list-wrapper">
    <div class="scroller-container" v-scroll>
      <div class="scroller">
        <v-bar title="网信理材"></v-bar>
        <ul class="list-content">
          <li class="list-item" v-for="deal in deals">
            <v-product-item :deal="deal"></v-product-item>
            <v-division></v-division>
          </li>
        </ul>
      </div>
    </div>
    <v-footer>
    </v-footer>
  </div>
</template>
<script>
  import util from 'util'
  export default {
    data () {
      return {
        deals:[]
      }
    },
    created () {
      util.post('/deal', {page: 1, count: 10}, (data) => {
        var data = JSON.parse(data)
        this.deals = data.data
        console.log(this.deals)
      }, (err) => {
        console.log(err)
      })
    }
  }
</script>
<style lang="stylus" scoped>
  .scroller-container {
    position: absolute
    left: 0
    top: 0
    bottom: (153rem/20)
    right: 0
    background-color: #f5f5fa
    .scroller {
      background-color: #fff
    }
  }
</style>