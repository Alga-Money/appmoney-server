'use strict'
const category = require('../models/').category
const services = require('../services')

module.exports = {

	async getCategories(req, res) {
		let userId;
		if (req.query.user_id) {
			userId = req.query.user_id;
		}
		const categories = await category.findAll({
			where: {
				userId: userId
			},
			order: [
				['name', 'ASC']
			]
		})

		res.status(200).send({
			status: services.message.common.genericSuccessMessage,
			data: categories
		})
	},

	async createCategory(req, res) {
		try {
			const ret = await category.create(req.body);

			res.status(201).send({
				message: services.message.common.genericSuccessMessage,
				data: ret
			})
		} catch (e) {
			console.error(e);
			res.status(500).send({
				error: error
			})
		}
	}


}
