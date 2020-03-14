'use strict'
const controllers = require('../controllers')

module.exports = function (app) {
  app.route('/categories').get(controllers.category.getCategories)
}
