'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    isActive:DataTypes.BOOLEAN,
    
  }, {});
  return Category;
}