'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class ProductMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  ProductMaster.init({
    id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shortDescription : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sku : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feature : {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'N'
    },
    price : {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount : {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    typeId : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active : {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'Y'
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    live: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'Y'    
    }
  }, {
    sequelize,
    modelName: 'ProductMaster',
    tableName: 'ST_product_master',
  });

  return ProductMaster;

};