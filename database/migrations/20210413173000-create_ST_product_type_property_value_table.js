'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ST_product_type_property_value',
    { 
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      product_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      property_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      property_value_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active: {
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
    await queryInterface.dropTable('ST_product_type_property_value');
  }
};