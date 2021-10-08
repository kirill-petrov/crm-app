'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Employees', [
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'admin@corp.com',
        password: '$2b$10$FBMDLapsQXXHtPvYUOFWaupHuJXfnWGaV3IqSeV2lbf7gTpYvxWVa', // 123
        jobtitle: 'admin',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Kevin',
        lastname: 'Costner',
        email: 'worker1@corp.com',
        password: '$2b$10$mlmuOyc1rQfiQOHYjxCs6.sQU/V/aWjXHYiUwi3K.PCewyF2K1yEK', // 123
        jobtitle: 'Worker',
        workcenterid: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Martin',
        lastname: 'Freeman',
        email: 'manager@corp.com',
        password: '$2b$10$LY4SEnDAMSIdMTkJhfAfh..0zAESDJnT7iV/i.nat8I0L.d/v767e', // 123
        jobtitle: 'Manager',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Bill',
        lastname: 'Murray',
        email: 'worker2@corp.com',
        password: '$2b$10$09Zcw9zlABIduyLrgUB/V.kPuxcfwhHFP2F1z355jy6zzA4rW0mye', // 123
        jobtitle: 'Worker',
        workcenterid: 2,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Jim',
        lastname: 'Carrey',
        email: 'worker3@corp.com',
        password: '$2b$10$.ij7k9QHZPJTQ0Kzf8Qb1eld28XW2pq9WB1AbFgT03ni67k6ERP0e', // 123
        jobtitle: 'Worker',
        workcenterid: 3,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Martin',
        lastname: 'Scorsese',
        email: 'worker4@corp.com',
        password: '$2b$10$4IFHIrHCKyrn5J4icMMA5ed0MszIcZJvz1i5hJUNm6gKAMgjaOPwC', // 123
        jobtitle: 'Worker',
        workcenterid: 4,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Martin',
        lastname: 'Lawrence',
        email: 'worker5@corp.com',
        password: '$2b$10$yUbnH0pAOZbzWcz3sYlWmeyaeWz3URS6sLO.mnGaOl1eZLpz2qL1i', // 123
        jobtitle: 'Worker',
        workcenterid: 5,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Dan',
        lastname: 'Brown',
        email: 'worker6@corp.com',
        password: '$2b$10$yUbnH0pAOZbzWcz3sYlWmeyaeWz3URS6sLO.mnGaOl1eZLpz2qL1i', // 123
        jobtitle: 'Worker',
        workcenterid: 6,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Arnold',
        lastname: 'Schwarzenegger',
        email: 'worker7@corp.com',
        password: '$2b$10$yUbnH0pAOZbzWcz3sYlWmeyaeWz3URS6sLO.mnGaOl1eZLpz2qL1i', // 123
        jobtitle: 'Worker',
        workcenterid: 6,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', null, {});
  },
};
