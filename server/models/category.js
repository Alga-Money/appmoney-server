'use strict'
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN

  }, {
    underscored: true
  })
  return Category
}
