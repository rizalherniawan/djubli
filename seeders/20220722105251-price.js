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
   await queryInterface.bulkInsert('prices', [
    {
      car_id: 1,
      cashPrice: 200000000,
      creditPrice: 195000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      car_id: 2,
      cashPrice: 0,
      creditPrice: 195000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      car_id: 3,
      cashPrice: 0,
      creditPrice: 380000000,
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
