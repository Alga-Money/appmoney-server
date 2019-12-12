'use strict'
 const controllers = require('../controllers');

 module.exports = function(app){
     app.route("/accounts").get(controllers.account.getAccounts);

     app.route("/account-types").get(controllers.account.getAccountTypes);

     app.route("/account-types/:codigo").get(controllers.account.getAccountTypesByCodigo);

     app.route("/account-types").post(controllers.account.createAccountTypes);

     app.route("/accounts").post(controllers.account.getAccounts);
 };
