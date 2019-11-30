'use strict'
 const controllers = require('../controllers');
 
 module.exports = function(app){
     app.route("/accounts").get(controllers.account.getAccounts);
 };