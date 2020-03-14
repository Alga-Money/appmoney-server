'use strict'
var jwt = require('jsonwebtoken')

var services = require('../services')
module.exports = {

  authSession (req, res, next) {
    if (req.header('token')) {
      var token = req.header('token')
      services.auth.checkSession(token).then(
        function (session) {
          req.session = session
          next()
        }
        // function (err) {
        //   res.status(401).json({
        //     status: 'error',
        //     message: services.message.invalidToken
        //   })
        // }
      )
    } else {
      res.status(401).json({
        status: 'error',
        message: services.message.noTokenSent
      })
    }
  },

  login (req, res, next) {
    if (req.body.user === 'luiz' && req.body.pwd === '123') {
      // auth ok
      const id = 1 // esse id viria do banco de dados
      var token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      })
      res.status(200).send({ auth: true, token: token })
    }

    res.status(500).send('Login inválido!')
  },
  logout (req, res) {
    res.status(200).send({ auth: false, token: null })
  },

  register (req, res, next) {
    res.status(200).send({ auth: false, token: null })
  }
}
