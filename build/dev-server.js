require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var bodyParser = require('body-parser')
var proxyMiddleware = require('http-proxy-middleware')
var data = require('../static/data.json')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var apiRouter = express.Router()
var mainRouter = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/deal', mainRouter)
app.use('/api', apiRouter)

//mainRouter
mainRouter.post('/', function (req, res) {
  var queryObj = req.body
  var deals = data.deals
  var ori = (queryObj.page-1)*queryObj.count 
  var end = (queryObj.page)*queryObj.count
  var selected = deals.slice(ori, end)
  res.json({
    status: 0,
    data: selected
  })
})

mainRouter.post('/detail', function (req, res) {
  var deal = data.deals.filter( deal => deal.dealid == req.body.dealid)[0]
  res.json({
    status: 0,
    deal
  })
})

apiRouter.post('/user/login', function (req, res) {
  var resData = {
    account: req.body.account,
    password: req.body.password,
    loginCount: 1,
    hasBindCard: false
  }
  res.json({
    state: 0,
    message: '登录成功',
    resData
  })
})
apiRouter.post('/user/register', function (req, res) {
  
})





var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
//192.168.1.101
//192.168.2.197
var uri = '192.168.1.100:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
