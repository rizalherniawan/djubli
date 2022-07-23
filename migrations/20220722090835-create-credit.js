'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('credits', {
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
      yearPeriod: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      installment: {
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
    await queryInterface.dropTable('credits');
  }
};