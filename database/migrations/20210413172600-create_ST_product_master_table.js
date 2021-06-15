'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ST_product_master',
    { 
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbnail : {
        type: Sequelize.STRING,
        allowNull: true,
      },
      shortDescription : {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sku : {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stock : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feature : {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'N'
      },
      price : {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      discount : {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      typeId : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active : {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'Y'
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        onUpdate : Sequelize.NOW,
        allowNull: false,
      },
      live: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'Y'    
      }
    },
    {
      timestamp: true,
      updatedAt: 'updateTimestamp'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ST_product_master');
  }
};