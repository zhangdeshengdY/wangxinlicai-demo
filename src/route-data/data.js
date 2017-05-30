/**
 * 还原页面数据
 */
import RouterStore from './store'

const store = new RouterStore()

/**
 * 初始化
 */
const init = function ($route) {
  if (typeof this.$options.routeData !== 'function') {
    return new Error('必须是以方法返回对象')
  }
  this.$options.routeData._url = store.getUrl($route) // 每次混入新data对象或者取缓存的时候，重新挂在_url
  var keepAlive = store.getItem(this.$options.routeData._url)
  if (keepAlive) {
    return keepAlive
  }
  return this.$options.routeData.call(this)
}
/**
 * 保存数据
 */
const saveData = function () {
  var data = this.$options.routeData()
  var newData = {}
  Object.keys(data).forEach((k) => {
    newData[k] = this.$data[k]
  }) // 将routeData的值复制
  store.setItem(this.$options.routeData._url, newData) // 取得自定义选项的url
}

export default {
  data () {
    return init.call(this, this.$route)
  },
  destroyed () { // 组件卸载
    saveData.call(this) // 存储数据
  },
  watch: {
    $route (to, from) { // 当前组件路由发生改变
      saveData.call(this) // 存储数据
      Object.assign(this.$data, init.call(this, to)) // 如果store里面有数据则取出缓存，没有数据则用routeData返回一个实例进行对象混入， 注意list数组会在混入时用一个空数组更新
    }
  }
}
