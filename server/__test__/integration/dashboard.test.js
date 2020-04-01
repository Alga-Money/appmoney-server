const transactionAccount = require('../../models').transactionAccount
const Account = require('../../models').account

describe('Dashboars Tests',async function () {
	it('Get Total Accounts ',async function () {
		transactionAccount.findAll({

			attributes: ['id',
				[transactionAccount.sequelize.fn('sum', transactionAccount.sequelize.col('transaction_accounts.transaction_value')), 'total']],
			include:[
				{model:Account}
			],

			group: ['`transaction_accounts`.account_id'],

			raw: true,

			order: transactionAccount.sequelize.literal('total DESC')

		}).then(res => console.table(res) )
			.catch(error => console.log(error));
		console.log(`teste`)
	});

});
