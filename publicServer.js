const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')

const app = new Koa()
const port = 80
const publicPath = path.join(__dirname,'/dist')

app.use(serve(publicPath))

app.listen(port)

console.log(`serving ${publicPath}`)
console.log('listening on ' + port)
