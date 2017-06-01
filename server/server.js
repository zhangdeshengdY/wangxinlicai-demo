var express = require('express')
var bodyParser = require('body-parser')
var data = require('./data.json')

var app = express()
app.use('/static', express.static('static'))

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

app.get('/', function (res, req) {
  req.sendFile(__dirname+'/index.html')
})
app.listen(5000, '139.129.240.16', function () {
  console.log(' 网信理财服务启动成功')
})