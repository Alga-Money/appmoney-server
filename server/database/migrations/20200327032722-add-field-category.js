'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('categories',  'user_id', {
		  user_id: Sequelize.INTEGER,
			  allowNull: false,
			  references: { model: 'users', key: 'id' },
		  onUpdate: 'CASCADE',
			  onDelete: 'CASCADE',

	  });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.removeColumn('categories','user_id');

  }
};
