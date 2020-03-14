const helmet = require('helmet')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
var cors = require('cors')
const bodyParser = require('body-parser')
// var jwt = require('jsonwebtoken')
// const servicesAuth = require('./server/services/auth')
const app = express()

app.use(logger('dev'))
app.use(cors())

// app.use(servicesAuth.checkSession)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(bodyParser.raw())

app.use(helmet())
app.use(cookieParser())

require('./routers')(app)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
