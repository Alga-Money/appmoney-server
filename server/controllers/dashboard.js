'use strict'
const account = require('../models/').account
const transactionAccount = require('../models').transactionAccount
const services = require('../services')

module.exports = {

	async totalAccounts(req, res) {
		const userId = req.query.user_id;
		try {
			const ret = await transactionAccount.findAll({
				attributes: ['account_id', 'type',
					[transactionAccount.sequelize.fn('sum',
						transactionAccount.sequelize.col('transaction_accounts.transaction_value')), 'total']],
				include: [
					{
						model: account,
						attributes: ['description']
					}
				],
				where: {
					userId: userId,
					type: [0, 1], status: 1
				},
				group: ['`transaction_accounts`.account_id', 'transaction_accounts`.type'],

				raw: true,

				order: transactionAccount.sequelize.literal('total DESC')
			});


			const a = await ret.reduce((r, a) => {
				if (!r[a.account_id]) {
					r[a.account_id] = a;
				} else {
					if(r[a.type===0]){
						r[a.account_id].total = (a.total - r[a.account_id].total);
					}else{
						r[a.account_id].total = (r[a.account_id].total - a.total );
					}
				}

				return r;
			}, {});

			res.status(200).send({
				message: services.message.common.genericSuccessMessage,
				data: a
			});
		} catch (e) {
			console.error(e)

		}


	},
}
