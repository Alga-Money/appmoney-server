'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    description: DataTypes.STRING,
    color: DataTypes.STRING,
    includeDashboard:DataTypes.BOOLEAN,    
    openingBalance:DataTypes.DECIMAL,
    ignoreOverallBalance:DataTypes.BOOLEAN,
    accountTypeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER, 
  })

  Account.associate = models => {
  Account.belongsTo(models.AccountType, {foreingKey: 'account_type_id', as: 'accountType'}),
  Account.belongsTo(models.User, {foreingKey: 'user_id', as: 'user'})
} 

  return Account;
};