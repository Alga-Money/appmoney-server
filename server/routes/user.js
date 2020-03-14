'use strict'
const controllers = require('../controllers')

module.exports = function (app) {
  app.route('/auth/signup').post(controllers.user.register)

  app.route('/auth/signin').post(controllers.user.login)
}
