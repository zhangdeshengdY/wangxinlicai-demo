<template>
  <div class="home-content">
    <div class="banner"></div>
    <div class="list-container">
      <div class="single-list">
        <div class="list-header">列表头</div>
        <div class="list-wrapper">内荣</div>
        <div class="list-bottom">
          <router-link to="/share">更多</router-link>
        </div>
      </div>
      <div class="single-list">
          <div class="list-header">列表头</div>
          <div class="list-wrapper">内荣</div>
          <div class="list-bottom">点击更多</div>
      </div>
    </div>
    <div class="bulletin">公告</div>
    <div class="partner">合作伙伴</div>
    <div class="start">现在开始</div>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style lang="stylus" scoped>
  .home-content {
    height: 600px
    background: green
  }
</style>