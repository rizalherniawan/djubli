'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'sellerProfiles',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      odometer: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      transmission: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["Automatic","Manual"]
      },
      carYear: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      doorNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      plateType: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["Odd","Even"]
      },
      taxValidUpTo: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      machineCC: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      machineType: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["Combustion","Diesel","Electric","Hybrid"]
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
    await queryInterface.dropTable('cars');
  }
};