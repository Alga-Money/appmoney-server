'use strict'
const transactionAccount = require('../models').transactionAccount
const category = require('../models').category
const account = require('../models/').account

const services = require('../services')

module.exports = {

  async createTransactionAccount (req, res) {
    try {
      const obj = req.body
      const ret = await transactionAccount.create(obj)
		const accountRes = await account.findOne({where:{id:ret.accountId}})


		//change total account
		if(ret.type===0)// saida
		{
			let totalAccount =  accountRes.openingBalance - obj.transactionValue
			const retAccount = await account.update({
				'openingBalance': totalAccount,
			}, {where:
					{
						id:ret.accountId
					}})

		}else if (ret.type===1){
			let totalAccount =  accountRes.openingBalance + obj.transactionValue
			const retAccount = await account.update({
				'openingBalance': totalAccount,
			}, {where:
					{
						id:ret.accountId
					}});
		}

      res.status(201).send({
        message: services.message.common.genericSuccessMessage,
        data: ret
      }
      )
    } catch (error) {
      res.status(500).send({
        error: error
      })
    }
  },


  async getTransactions(req, res) {
  	try{
		let userId;
		if (req.query.user_id) {
			userId = req.query.user_id;
		}
		const transactions = await transactionAccount.findAll({
			 include: [
			 	{model: category}
			 ],
			order: [
				['created_at', 'DESC']
			],
			where: {userId: userId}
		})
		res.status(200).send({
			status: services.message.common.genericSuccessMessage,
			data: transactions
		})
	}catch (e) {
  		console.error(e);
		res.status(500).send({
			error: error
		})
	}
  }

}
