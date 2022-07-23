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
   await queryInterface.bulkInsert('sellerProfiles', [
    {
      name: "PT. Anugrah",
      userName: "pt_anugrah",
      role: "Company",
      phoneNumber: "08531098778",
      address: "Jalan Pahlawan",
      city: 'Jakarta Timur',
      province: 'DKI Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: "Rian K.",
      userName: "rian.K",
      role: "Sales Agent",
      phoneNumber: "08881098734",
      address: "Jalan Gubeng",
      city: 'Surabaya',
      province: 'Jawa Timur',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Andre",
      userName: "AndrE",
      role: "End User",
      phoneNumber: "08511233599",
      address: "Jalan Pogung",
      city: 'Sleman',
      province: 'D.I. Yogyakarta',
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
    await queryInterface.bulkDelete('sellerProfiles', null, {})
  }
};
