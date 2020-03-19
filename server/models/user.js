'use strict'

var common = require('../services/common')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
    hooks: {
      beforeCreate: user => {
        // const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT_ROUNDS));
        if (user.password) {
          user.password = common.encrypt(user.password)
          // user.password = services.common.encrypt(user.password);
        }
      }
    }

  })
  return User
}
