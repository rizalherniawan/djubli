'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      car.belongsTo(models.sellerProfile, {
        foreignKey: 'seller_id',
        as: 'car_seller'
      })

      car.hasOne(models.price, {
        foreignKey: 'car_id',
        as: 'car_price'
      })

      car.hasMany(models.credit, {
        foreignKey: 'car_id',
        as: 'car_credit'
      })

      car.hasMany(models.fixAndCap, {
        foreignKey: 'car_id',
        as: 'car_fixAndCap'
      })
    }
  }
  car.init({
    type: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5,100],
          msg: "Type field must be filled with at least 5 char and 100 char maximum"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    },
    brand: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2,50],
          msg: "Brand field must be filled with at least 2 char and 50 cahr max"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    },
    odometer: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    transmission: {
      type: DataTypes.ENUM,
      values: ["Automatic","Manual"],
      validate: {
        isIn: {
          args: [["Automatic","Manual"]],
          msg: "Transmission field must be filled"
        }
      }
    },
    carYear: {
      type: DataTypes.INTEGER,
      validate: {
        min: new Date().getFullYear() - 50,
        max: new Date().getFullYear()
      }
    },
    doorNumber: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    plateType: {
      type: DataTypes.ENUM,
      values: ["Odd","Even"],
      validate: {
        isIn: {
          args: [["Odd","Even"]],
          msg: "Choose between odd or even"
        }
      }
    },
    taxValidUpTo: {
      type: DataTypes.DATEONLY,
    },
    machineCC: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    machineType: {
      type: DataTypes.ENUM,
      values: ["Combustion","Diesel","Electric","Hybrid"],
      validate: {
        isIn: {
          args: [["Combustion","Diesel","Electric","Hybrid"]],
          msg: "Choose valid machine type"
        } 
      }
    }
  }, {
    sequelize,
    modelName: 'car',
    tableName: 'cars'
  });
  return car;
};