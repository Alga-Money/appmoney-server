'use strict'
const transactionAccount = require('../models').transactionAccount
const services = require('../services')

module.exports = {

  async createTransactionAccount (req, res) {
    console.log('transaction account')

    try {
      const obj = req.body
      const ret = await transactionAccount.create(obj)
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
			// include: [
			// 	{model: accountType}
			// ],
			order: [
				['created_at', 'ASC']
			],
			where: {userId: userId}
		})
		res.status(200).send({
			status: services.message.common.genericSuccessMessage,
			data: transactions
		})
	}catch (e) {
		res.status(500).send({
			error: error
		})
	}
  }

}
