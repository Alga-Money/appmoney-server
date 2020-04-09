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
						transactionAccount.sequelize.col('transaction_accounts.transaction_value')), 'openingBalance']],
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

				raw: false,

				order: transactionAccount.sequelize.literal('openingBalance DESC')
			});

			// if (ret.length<2){
			// 	return  res.status(200).send({
			// 		message: services.message.common.genericSuccessMessage,
			// 		data: ret
			// 	});
			// }
			//
			// const list = await ret.reduce((r, a) => {
			// 	if (!r[a.dataValues.account_id]) {
			// 		r[a.dataValues.account_id] = a;
			// 	} else {
			// 		if(r[a.type===0]){
			// 			r[a.dataValues.account_id].openingBalance = (a.dataValues.openingBalance - r[a.dataValues.account_id].openingBalance);
			// 		}else{
			// 			r[a.dataValues.account_id].openingBalance = (r[a.dataValues.account_id].openingBalance - a.dataValues.openingBalance );
			// 		}
			// 	}
			//
			// 	return r;
			// }, {});
			//
			//
			// const listReturn =  await Object.keys(list).map(obj =>{
			// 	return {
			// 			account_id: obj.dataValues.account_id,
			// 			openingBalance: obj.dataValues.openingBalance,
			// 			description: obj.dataValues.description
			// 	}}
			// )

			res.status(200).send({
				message: services.message.common.genericSuccessMessage,
				data: ret
			});
		} catch (e) {
			console.error(e)

		}


	},
}
