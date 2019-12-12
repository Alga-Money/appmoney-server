'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description:{
          type: Sequelize.STRING,
          allowNull: false,
        },
      color:{
        type:Sequelize.STRING,
        allowNull: false
      },
      include_dashboard: {
         type: Sequelize.BOOLEAN,
         allowNull: false,
         defaultValue: true
      },
      account_type_id: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'account_types', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
	  opening_balance: {
      	type:Sequelize.DECIMAL(10,2),
		defaultValue: 0.00,
    },
    ignore_overall_balance: {
     type:Sequelize.BOOLEAN,
     defaultValue: false, 
    },

      user_id: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
	*/
      return queryInterface.dropTable('accounts');
  }
};
