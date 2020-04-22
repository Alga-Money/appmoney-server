'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccountType = sequelize.define('AccountType', {
    name: {type:DataTypes.STRING,},
    isActive:{type:DataTypes.BOOLEAN,defaultValue:true},
	userId: DataTypes.INTEGER

  }, {
	  underscored: true
  });

  AccountType.associate = function(models) {
   AccountType.hasMany(models.Account, {as:'accounts'})
  };


  return AccountType;
};
