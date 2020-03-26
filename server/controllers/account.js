'use strict'
const account = require('../models/').account
const accountType = require('../models/').accountType
const services = require('../services')
module.exports = {

	async getAccounts(req, res) {
		try {
			let userId;
			if (req.query.user_id) {
				userId = req.query.user_id;
			}
			const accounts = await account.findAll({
				include: [
					{model: accountType}
				],
				order: [
					['description', 'ASC']
				],
				where: {userId: userId}
			})
			res.status(200).send({
				status: services.message.common.genericSuccessMessage,
				data: accounts
			})
		} catch (error) {
			console.error(error)
			res.status(500).json({
				message: services.message.common.thereIsSomeError
			})
		}
	},

	async getAccountsById(req, res) {
		try {
			const id = req.params.codigo

			const accounts = await account.findOne({
				include: accountType,
				order: [
					['description', 'ASC']
				],
				where: {id: id}
			})
			res.status(200).send({
				status: services.message.common.genericSuccessMessage,
				data: accounts
			})
		} catch (error) {
			console.error(error)
			res.status(500).json({
				message: services.message.common.thereIsSomeError
			})
		}
	},

	async createAccount(req, res) {
		try {
			const obj = req.body
			const ret = await account.create(obj)
			res.status(201).send({
					message: services.message.common.genericSuccessMessage,
					data: ret
				}
			)
		} catch (error) {
			console.error(error)
			res.status(500).send({
				error: error
			})
		}
	},

	async editAccount(req, res) {
		try {
			const id = req.params.codigo
			const obj = req.body
			const ret = await account.update({
				'description': obj.description,
				'color': obj.color,
				'includeDashboard': obj.includeDashboard,
				'openingBalance': obj.openingBalance,
				'ignoreOverallBalance': obj.ignoreOverallBalance,
				'accountTypeId': obj.accountTypeId
			}, {where:
			{
				id:id
			}}
		)
			res.status(200).send({
					message: services.message.common.genericSuccessMessage,
					data: ret
				}
			)
		} catch (error) {
			console.error(error)
			res.status(500).send({
				error: error
			})
		}
	},

	async getAccountTypes(req, res) {
		try {
			const accountTypes = await accountType.findAll({
				order: [
					['name', 'ASC']
				]
			})
			res.status(200).send({
				message: services.message.common.genericSuccessMessage,
				data: accountTypes
			})
		} catch (error) {
			res.status(500).json({
				message: error
			})
		}
	},

	async getAccountTypesByCodigo(req, res) {
		try {
			const paramId = req.params.codigo
			const accountTypes = await accountType.findOne({
				include: account,
				where: {
					id: paramId
				}
			})

			if (accountTypes) {
				return res.status(200).send({
					message: services.message.common.genericSuccessMessage,
					data: accountTypes
				})
			}

			return res.status(404).send({
				message: services.message.common.notFound,
				data: {}
			})
		} catch (error) {
			console.error(error)
			res.status(500).json({
				message: error
			})
		}
	},

	async createAccountTypes(req, res) {
		try {
			const data = req.body
			console.log(data)
			const ret = await accountType.create(data)
			res.status(201).json({
				message: services.message.common.genericSuccessMessage,
				data: ret
			})
		} catch (error) {
			res.status(500).json({
				message: error
			})
		}
	}

}
