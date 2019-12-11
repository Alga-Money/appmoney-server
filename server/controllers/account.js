'use strict'
const account = require('../models/').account;
const accountType = require('../models/').accountType;
const services = require('../services');
module.exports = {

   async getAccounts(req, res) {
        try {
            const accounts =  await account.findAll({
                order: [
                    ['description', 'ASC'],
                ],
            });
            res.status(200).send({
				status:services.message.common.genericSuccessMessage,
				data:accounts
			});
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message:services.message.common.thereIsSomeError
            });
        }
    },

	async getAccountTypes(req, res) {
   		try {
   			const accountTypes = await accountType.findAll({
				order:[
					['name','ASC'],
				]
			});
   			res.status(200).send({
				message:services.message.common.genericSuccessMessage,
				data:accountTypes
			})

   		}catch (error) {
			res.status(500).json({
				status: 'error',
				message: error
			});
		}
	}
	,

	async getAccountTypesByCodigo(req, res) {
		try {
			console.log(req.params);
			let paramId = req.params.codigo;
			console.log(paramId);
			const accountTypes = await accountType.findOne({
			where:{
				id: paramId
			}
		 });
			res.status(200).send({
			 message:services.message.common.genericSuccessMessage,
			 data:accountTypes
		 })

		}catch (error) {
		 res.status(500).json({
			 message: error
		 });
	 }
 },

    async createAccountTypes(req, res) {
        try {
			let data = req.body;
			console.log(data);
			const ret =  await accountType.create(data);
			res.status(201).json({
				message:services.message.common.genericSuccessMessage,
				data:ret
			});
        } catch (error) {
			res.status(500).json({
				status: 'error',
				error
			});
        }
    }

}
