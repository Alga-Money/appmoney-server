'use strict'
var jwt = require('jsonwebtoken')
const user = require('../models/').user
// const fs = require('fs')
const accounts = require('../models/').account
const accountType = require('../models').accountType

var services = require('../services')

module.exports = {

  async login(req, res, next) {
    // validart usuario
    const UserAccount = await user.findOne({
      where: { email: req.body.email }
    })

    if (UserAccount) {
      // valid pass
      if (services.common.comparePassword(req.body.password, UserAccount.password)) {
        var privateKey = 'diogeqwe123'
        const id = 1 // esse id viria do banco de dados
        var token = jwt.sign({ id }, privateKey, {
          expiresIn: 30000// expires in 5min
        })

        return res.status(200).send({ auth: true, token: token, user: UserAccount })
      }
    } else {
      return res.status(401).send({ error: 'Login inválido!' })
    }

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
      return res.status(401).send('Login inválido!')
    }
  },
  logout(req, res) {
    res.status(200).send({ auth: false, token: null })
  },

  async register(req, res, next) {
    try {
      const userBody = req.body
      // verificar se usuario ja existe
      const UserAccount = await user.findOne({
        where: { email: req.body.email }
      })

      // Usuario ja existe
      if (UserAccount) {
        return res.status(409).send({
          error: services.message.auth.userExists,
          errorDev: null
        })
      }

      if (userBody.password) {
        try {
          const userCreated = await user.create(userBody)

          //create default data
          createDataDefaultUser(userBody.id)


          res.status(201).send({ auth: false, token: null })
        } catch (error) {
          console.error(error)
          return res.status(200).send({ auth: false, token: null })
        }
      }

      res.status(200).send({ auth: false, token: null })
    } catch (error) {

    }
  }
}


async function createDataDefaultUser(userID) {
  try {
    accountType.bulkCreate(
      {
        name: 'Outros',
        created_at: new Date(),
        updated_at: new Date(),
        userId: userID
      },
      {
        name: 'Carteira',
        created_at: new Date(),
        updated_at: new Date(),
        userId: userID
      }
      ,
      {
        name: 'Conta Corrente',
        created_at: new Date(),
        updated_at: new Date(),
        userId: userID
      },
      {
        name: 'Poupança',
        created_at: new Date(),
        updated_at: new Date(),
        userId: userID
      }
    )

    // accounts.bulkCreate(
    //   {}
    // )

  } catch (error) {

  }
}
