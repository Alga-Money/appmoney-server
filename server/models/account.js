'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    description: DataTypes.STRING,
    color: DataTypes.STRING,
    includeDashboard:DataTypes.BOOLEAN,    
  })

  Account.associate = models => {
    Account.belongsTo(models.AccountType, {foreingKey: 'account_type_id'}),
    Account.belongsTo(models.User, {foreingKey: 'user_id'})
} 

  return Account;
};