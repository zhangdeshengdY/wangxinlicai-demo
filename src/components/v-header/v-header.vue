<template>
  <div class="header">
    
    <div class="logo">网信理财</div>
    <div class="download">
      <a href="" class="download-link">下载APP</a>
    </div>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style lang="stylus" scoped>
  .header {
    position: relative
    height: 135px
    text-align: center
    padding-top: 40px
    box-sizing: border-box
    border-bottom: 3px solid #cfced3
   .logo {
     display: inline-block
     width: 312px
     height: 59px
     text-indent: -9999px
     background: url(../../assets/imgs/icon.png) 0 0 no-repeat
   }
   .download {
     position: absolute
     right: 45px
     top: 40px
     width: 186px
     height: 66px
     .download-link {
       display: inline-block
       height: 66px
       width: 100%
       background: #ee4634
       border-radius: 14px
       text-align: center
       line-height: 66px
       color: #ffffff
       font-size: 38px
     }
   }
   
  }
  
</style>