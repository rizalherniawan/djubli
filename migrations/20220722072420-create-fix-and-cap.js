'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fixAndCaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'cars',
          key: 'id'
        }
      },
      tdp: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      yearStart: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      installmentStart: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      yearAfter: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      installmentAfter: {
        type: Sequelize.INTEGER,
        allowNull: false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fixAndCaps');
  }
};