'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Workcenters', [
      {
        name: 'CNC Shop',
        code: 'CNC',
        capacity: 32,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SMT assembly',
        code: 'SMT',
        capacity: 12,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testing',
        code: 'TST',
        capacity: 24,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Assembly Cell-1',
        code: 'AC1',
        capacity: 24,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Assembly Cell-2',
        code: 'AC2',
        capacity: 24,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Final Assembly',
        code: 'FAS',
        capacity: 36,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Final Assembly Pack',
        code: 'FAP',
        capacity: 48,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Workcenters', null, {});
  },
};
