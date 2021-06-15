'use strict';

const view_name = 'product_view';
const query = 'SELECT st_product_master.*, st_product_detail.description FROM st_product_master LEFT JOIN st_product_detail ON st_product_master.id = st_product_detail.product_id';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE VIEW ${view_name} AS ${query}`);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`DROP VIEW ${view_name}`);
  }
};