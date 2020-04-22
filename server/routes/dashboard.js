'use strict'
const controllers = require('../controllers')

module.exports = function (app) {
	app.route('/dashboard').get(controllers.dashBoard.totalAccounts)

}
