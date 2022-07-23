'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('credits', [
      {
        car_id: 1,
        tdp: 85000000,
        yearPeriod: 3,
        installment: 4000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        car_id: 2,
        tdp: 80000000,
        yearPeriod: 3,
        installment: 4000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        car_id: 2,
        tdp: 60000000,
        yearPeriod: 6,
        installment: 6000000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('credits', null, {})
  }
};
