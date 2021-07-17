'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ST_contact_message', 
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
      email : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subject : {
        type: Sequelize.STRING,
        allowNull: true,
      },
      message : {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('ST_contact_message');
  }
};