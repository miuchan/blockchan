const Koa = require('koa')
const router = require('koa-router')()
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')

const app = new Koa()
const port = 80
const publicPath = path.join(__dirname,'/dist')
const html = fs.readFileSync(`${publicPath}/index.html`, 'utf-8')

router.get(/.*/, function* (ctx, next) {
  this.body = html
})

app.use(serve(publicPath))
app.use(router.routes())

app.listen(port)

console.log(`serving ${publicPath}`)
console.log('listening on ' + port)
