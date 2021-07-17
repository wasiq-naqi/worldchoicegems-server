'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class ContactMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  ContactMessage.init({
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
    email : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message : {
      type: DataTypes.STRING,
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
    modelName: 'ContactMessage',
    tableName: 'ST_contact_message',
  });

  return ContactMessage;

};