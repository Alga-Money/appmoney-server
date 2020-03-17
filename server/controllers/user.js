'use strict'
var jwt = require('jsonwebtoken')

// const fs = require('fs')

var services = require('../services')

module.exports = {

  login (req, res, next) {
    // validart usuario
    if (req.body.user === 'luiz' && req.body.pwd === '123') {
      // verificar se arquivo existe

      // fs.readFile('../../private.key', (err, data) => {
      //   if (err) throw err

      //   var privateKey = data
      //   const id = 1 // esse id viria do banco de dados
      //   var token = jwt.sign({ id }, privateKey, {
      //     expiresIn: 3000,
      //     algorithm: 'RS256' // expires in 5min
      //   })
      //   res.status(200).send({ auth: true, token: token })
      // })

      var privateKey = 'diogeqwe123'
      const id = 1 // esse id viria do banco de dados
      var token = jwt.sign({ id }, privateKey, {
        expiresIn: 3000 // expires in 5min
      })

      res.status(200).send({ auth: true, token: token })
    } else {
      res.statius(401).send('Login inválido!')
    }
  },
  logout (req, res) {
    res.status(200).send({ auth: false, token: null })
  },

  register (req, res, next) {
    res.status(200).send({ auth: false, token: null })
  }
}
