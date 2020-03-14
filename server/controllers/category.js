'use strict'
const category = require('../models/').category
const services = require('../services')

module.exports = {

  async getCategories (req, res) {
    const categories = await category.findAll({
      order: [
        ['name', 'ASC']
      ]
    })

    res.status(200).send({
      status: services.message.common.genericSuccessMessage,
      data: categories
    })
  }
}
