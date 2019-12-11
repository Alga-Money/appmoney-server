'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      Example:
      return queryInterface.bulkInsert('account_types', [
        {
        name: 'Outros',
        created_at: new Date(),
        updated_at: new Date()
        },
        {
          name: 'Carteira',
        created_at: new Date(),
        updated_at: new Date()
        }
       ,
        {
          name: 'Conta Corrente',
        created_at: new Date(),
        updated_at: new Date()
        },

        {
          name: 'Poupança',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('account_type', null, {});
  	/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
