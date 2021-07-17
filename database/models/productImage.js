'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductImage.belongsTo(models.ProductMaster, { foreignKey: 'product_id' });
      ProductImage.belongsTo(models.ProductView, { foreignKey: 'product_id' });

    }
  }

  ProductImage.init({
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    path : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description : {
        type: DataTypes.STRING,
        allowNull: true,
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
    modelName: 'ProductImage',
    tableName: 'ST_product_image',
  });

  return ProductImage;

};