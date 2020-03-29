'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {

		return queryInterface.addColumn('account_types',  'user_id', {
			type: Sequelize.INTEGER,
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
		return queryInterface.removeColumn('users','user_id');

	}
};

