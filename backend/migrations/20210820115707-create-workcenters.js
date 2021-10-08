'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Workcenters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      code: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Workcenters');
  },
};
