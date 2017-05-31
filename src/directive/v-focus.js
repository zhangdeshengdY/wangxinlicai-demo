module.exports =  {
  install: (Vue) => {
    Vue.directive('focus', {
      inserted: function (el, binding) {
        console.log(Vue.directive)
      }
    })
  }
}