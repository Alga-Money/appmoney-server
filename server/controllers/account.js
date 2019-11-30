'use strict'
const account = require('../models/').account;
module.exports = {

   async getAccounts(req, res) {
        try {
            const accounts =  await account.findAll({
                order: [
                    ['description', 'ASC'],
                ],
            });
            res.json(accounts, 200);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

}