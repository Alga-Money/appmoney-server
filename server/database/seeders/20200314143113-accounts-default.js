'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('accounts', [{
      description: 'Banco do Brasil',
      color: '',
      include_dashboard: true,
      account_type_id: 1,
      opening_balance: 0.00,
      ignore_overall_balance: false,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('accounts', null, {})
  }
}
