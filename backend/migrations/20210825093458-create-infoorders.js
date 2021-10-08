'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Infoorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeesid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      },
      ordersid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      },
      quantitycomplete: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      quantitydefect: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'Created',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Infoorders');
  }
};