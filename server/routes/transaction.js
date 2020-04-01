'use strict'
const controllers = require('../controllers')

module.exports = function (app) {
  app.route('/transactions').post(controllers.transactionAccount.createTransactionAccount)

	app.route('/transactions/:codigo').put(controllers.transactionAccount.updateTransaction)

  app.route('/transactions/').get(controllers.transactionAccount.getTransactions)

   app.route('/transactions/:codigo').get(controllers.transactionAccount.getTransaction)

	//app.route('/transactions/total/').get(controllers.transactionAccount.totalAccounts)
}
