/* eslint-disable */

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
     id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      concept_code: {
        type: Sequelize.STRING
      },
      din: {
        type: Sequelize.INTEGER
      },
      brand_name: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      atc_number: {
        type: Sequelize.STRING
      },
      concept_status: {
        type: Sequelize.ENUM('Cancelled Post Market', 'Cancelled Pre Market', 'Marketed', 'Dormant', 'Approved')
      },
      history_date: {
        type: Sequelize.DATE
      },
      original_market_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },
  down: async function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Products');
  }
};
