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
   await queryInterface.bulkInsert('cars', [
    {
      seller_id: 1,
      type: 'CRV 2.0',
      brand: 'Honda',
      odometer: 12000,
      transmission: 'Automatic',
      carYear: 2015,
      doorNumber: 4,
      plateType: 'Odd',
      taxValidUpTo: '2023-09-12',
      machineCC: 1500,
      machineType: 'Combustion',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seller_id: 2,
      type: 'HRV',
      brand: 'Honda',
      odometer: 13000,
      transmission: 'Manual',
      carYear: 2012,
      doorNumber: 4,
      plateType: 'Even',
      taxValidUpTo: '2022-09-12',
      machineCC: 1200,
      machineType: 'Combustion',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seller_id: 3,
      type: 'Camry',
      brand: 'Toyota',
      odometer: 8000,
      transmission: 'Automatic',
      carYear: 2020,
      doorNumber: 4,
      plateType: 'Odd',
      taxValidUpTo: '2025-09-12',
      machineCC: 1500,
      machineType: 'Hybrid',
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
    await queryInterface.bulkDelete('cars', null, {})
  }
};
