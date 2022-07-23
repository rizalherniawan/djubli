'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sellerProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sellerProfile.hasMany(models.car, {
        foreignKey: 'seller_id',
        as: 'seller'
      })
    }
  }
  sellerProfile.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2,50],
          msg: "Name field must be filled with at least 2 char and max 50 char"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    },
    userName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2,50],
          msg: "User name field must be filled with at least 2 char and max 50 char"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ["Sales Agent","Company","End User"],
      validate: {
        isIn: {
          args:[["Sales Agent","Company","End User"]],
          msg: "please choose 3 options"
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^((\+)62|0)?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          msg: "please input corrrect phone number"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,150],
          msg: "Address field must be filled with at least 10 char and max 150 char"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,100],
          msg: "City field must be filled with at least 10 char and max 100 char"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    },
    province: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,100],
          msg: "Province field must be filled with at least 10 char and max 100 char"
        },
        checkWhiteSpace(value){
          if(value.trim().length == 0){
            throw new Error('Please input valid input')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'sellerProfile',
    tableName: 'sellerProfiles'
  });
  return sellerProfile;
};