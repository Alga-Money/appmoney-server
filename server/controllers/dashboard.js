'use strict'
const account = require('../models/').account
const transactionAccount = require('../models').transactionAccount
const services = require('../services')
const { Op } = require("sequelize");

module.exports = {

	async totalAccounts(req, res) {
		const userId = req.query.user_id;
		try {
			const  accounts = await account.findAll();

			let ret = await transactionAccount.findAll({
				attributes: ['account_id', 'type',
					[transactionAccount.sequelize.fn('sum',
						transactionAccount.sequelize.col('transaction_accounts.transaction_value')), 'openingBalance']],
				include: [
				],
				where: {
					userId: userId,
					type: [0, 1], status: 1
				},
				group: ['`transaction_accounts`.account_id', 'transaction_accounts`.type'],

				raw: true,

				order: transactionAccount.sequelize.literal('openingBalance DESC')
			});

			var totalAccounts = 0.0;
			ret =  ret.map(obj =>{
				totalAccounts += Number(obj.openingBalance);
				return {account_id:obj.account_id,
				account : accounts.find(el=> el.id === obj.account_id),
				openingBalance:obj.openingBalance
				};
			})

			res.status(200).send({
				message: services.message.common.genericSuccessMessage,
				data: {ret:ret,total:totalAccounts}
			});
		} catch (e) {
			console.error(e)
			res.status(500).send({
				error: e
			})

		}


	},
}
