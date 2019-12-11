'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccountType = sequelize.define('AccountType', {
    name: {type:DataTypes.STRING,},
    isActive:{type:DataTypes.BOOLEAN,defaultValue:true}
  }, {
	  underscored: true
  });
  return AccountType;
};
