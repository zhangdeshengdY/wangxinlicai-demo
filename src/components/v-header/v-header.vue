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
    height: (135rem/20)
    text-align: center
    padding-top: (40rem/20)
    box-sizing: border-box
    border-bottom: (3rem/20) solid #cfced3
   .logo {
     display: inline-block
     width: (312rem/20)
     height: (59rem/20)
     text-indent: -(9999rem/20)
     background: url(../../assets/imgs/icon.png) 0 0 no-repeat
     background-size: (1112rem/20) (859rem/20)
   }
   .download {
     position: absolute
     right: (45rem/20)
     top: (40rem/20)
     width: (186rem/20)
     height: (66rem/20)
     .download-link {
       display: inline-block
       vertical-align: top
       height: (66rem/20)
       width: 100%
       background: #ee4634
       border-radius: (14rem/20)
       text-align: center
       line-height: (66rem/20)
       color: #ffffff
       font-size: (38rem/20)
     }
   }
   
  }
  
</style>