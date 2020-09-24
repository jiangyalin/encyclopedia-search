const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const pkg = require('./package')
const config = require('./config/index')
const checkPoint = require('./check-point')
app.use(express.static(path.join(__dirname, 'static')))

app.locals.blog = {
  title: pkg.name,
  description: pkg.description
}

app.use(bodyParser.json({ limit: '50mb' })) // 设置最大提交值
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

checkPoint().getMusic({
  name: '魔法禁书目录',
  type: 'op'
})

// https://baike.baidu.com/item/%E9%AD%94%E6%B3%95%E7%9A%84%E7%A6%81%E4%B9%A6%E7%9B%AE%E5%BD%95/29646?fromtitle=%E9%AD%94%E6%B3%95%E7%A6%81%E4%B9%A6%E7%9B%AE%E5%BD%95&fromid=25423
// https://baike.baidu.com/item/%E9%AD%94%E6%B3%95%E7%A6%81%E4%B9%A6%E7%9B%AE%E5%BD%95/1756101#viewPageContent
// https://baike.baidu.com/item/%E9%AD%94%E6%B3%95%E7%A6%81%E4%B9%A6%E7%9B%AE%E5%BD%95/1756119#viewPageContent

app.listen(config.port, () => {
  console.log('服务启动' + config.port)
})

