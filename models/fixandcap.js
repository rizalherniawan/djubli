'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fixAndCap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fixAndCap.belongsTo(models.car, {
        foreignKey: 'car_id',
        as: 'fixAndCap_car'
      })
    }
  }
  fixAndCap.init({
    tdp: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    yearStart: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    installmentStart: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    yearAfter: {
      type: DataTypes.INTEGER,
      validate: {
        MIN: 0
      }
    },
    installmentAfter: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'fixAndCap',
    tableName: 'fixAndCaps'
  });
  return fixAndCap;
};