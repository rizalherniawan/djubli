'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      price.belongsTo(models.car, {
        foreignKey: 'car_id',
        as: 'price_car'
      })
    }
  }
  price.init({
    cashPrice: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      }
    },
    creditPrice: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
  }, {
    sequelize,
    modelName: 'price',
    tableName: 'prices'
  });
  return price;
};