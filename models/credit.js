'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class credit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      credit.belongsTo(models.car,{
        foreignKey: 'car_id',
        as: 'credit_car'
      })
    }
  }
  credit.init({
    tdp: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    yearPeriod: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    installment: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
  }, {
    sequelize,
    modelName: 'credit',
    tableName: 'credits'
  });
  return credit;
};