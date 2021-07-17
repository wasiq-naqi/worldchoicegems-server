'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategory.belongsTo(models.ProductMaster, { foreignKey: 'product_id' });
      ProductCategory.belongsTo(models.ProductView, { foreignKey: 'product_id' });
      ProductCategory.belongsTo(models.Category, { as: 'Category', foreignKey: 'category_id' });

    }
  }

  ProductCategory.init({
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
    category_id : {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'ProductCategory',
    tableName: 'ST_product_category',
  });

  return ProductCategory;

};