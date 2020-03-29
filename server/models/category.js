'use strict'
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
	userId: DataTypes.INTEGER

  }, {
    underscored: true
  })
  return Category
}
