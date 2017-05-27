 var vscroll = {}
  var BScroll = require('better-scroll')
  vscroll.install = function (Vue) {
      Vue.directive('scroll', {
        inserted(el, binding, vnode){
        var method = null, 
            opts = null
        
        if(binding.value&&({}.toString.call(binding.value.opts) === "[object Object]")){
            opts = binding.value.opts
        }

        el.addEventListener('touchmove', function (ev){
            ev.preventDefault()
        })

        el.scroll = new BScroll(el, opts)
        el.scroll.on('destroy', function () {
            console.log(1)
            // setTimeout(function (){
            //     el.scroll = new BScroll(el, opts)
            // },0)
        })
        if(binding.value&&({}.toString.call(binding.value.method) === "[object Function]")){
            method = binding.value.method
            method.call(vnode.context, el.scroll)
        }
        },
        update(el){
        setTimeout(() => {
            el.scroll.refresh()
        },0)
        },
        unbind(el){
        el.scroll.destroy()
        el.scroll = null
    }
})
   
  }

module.exports = vscroll
