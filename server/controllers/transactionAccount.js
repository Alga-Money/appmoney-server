'use strict'
const transactionAccount = require('../models').transactionAccount
const services = require('../services')

module.exports = {

  async createTransactionAccount (req, res) {
    console.log('transaction account')

    try {
      const obj = req.body
      obj.userId = 1
      const ret = await transactionAccount.create(obj)
      res.status(201).send({
        message: services.message.common.genericSuccessMessage,
        data: ret
      }
      )
    } catch (error) {
      res.status(500).send({
        error: error
      })
    }
  }

}
