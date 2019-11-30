'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccountType = sequelize.define('AccountType', {
    description: DataTypes.STRING,
  }, {});
  return AccountType;
};