/* eslint-disable */

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.createTable('AdministrationRoutes', {
     id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      concept_code: {
        type: Sequelize.STRING
      },
      concept_name: {
        type: Sequelize.STRING
      },
      display_name_en: {
        type: Sequelize.STRING
      },
      display_name_fr: {
        type: Sequelize.STRING
      },
      definition: {
        type: Sequelize.TEXT
      },
      abbreviation: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('AdministrationRoutes');
  }
};
