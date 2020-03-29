'use strict'
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize

/*         */

db.account = require('../models/account')(sequelize, Sequelize)

db.accountType = require('../models/accountType')(sequelize, Sequelize)

db.transactionAccount = require('../models/transactionAccount')(sequelize, Sequelize)

db.category = require('../models/category')(sequelize, Sequelize)

db.user = require('../models/user')(sequelize, Sequelize)

db.category.belongsTo(db.user)
db.accountType.hasMany(db.account)
db.account.belongsTo(db.accountType)

db.account.hasMany(db.transactionAccount)

db.transactionAccount.belongsTo(db.category)

module.exports = db
