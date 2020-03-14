'use strict'
const controllers = require('../controllers')

module.exports = function (app) {
  app.route('/transactions').post(controllers.transactionAccount.createTransactionAccount)
}