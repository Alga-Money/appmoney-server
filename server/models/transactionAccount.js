'use strict'
module.exports = (sequelize, DataTypes) => {
  const TransactionAccount = sequelize.define('transaction_accounts', {
    note: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    transactionValue: DataTypes.DECIMAL,
    paymentValue: DataTypes.DECIMAL,
    accountId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER

  }, {})
  TransactionAccount.associate = function (models) {
    // associations can be defined here
  }
  return TransactionAccount
}
