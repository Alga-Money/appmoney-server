'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      Example:
      return queryInterface.bulkInsert('category', [
        {
        name: 'Outros',
        color: '#ffebee',
        created_at: new Date(),
        updated_at: new Date()
      }
        ,
        {
        name: 'Beneficios',
        color: '#fce4ec',
        created_at: new Date(),
        updated_at: new Date()
      },

       {
        name: 'Rendimentos',
        color: '#81c784',
        created_at: new Date(),
        updated_at: new Date()
      }
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('category', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
