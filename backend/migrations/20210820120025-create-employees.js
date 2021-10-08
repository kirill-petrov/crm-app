'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      jobtitle: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      workcenterid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Workcenters',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
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
    await queryInterface.dropTable('Employees');
  },
};
