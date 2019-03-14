/* eslint-disable */

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.createTable('GenericVaccines', {
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
      concept_effective_date: {
        type: Sequelize.DATE
      },
      concept_status: {
        type: Sequelize.ENUM('Active', 'Inactive'),
        defaultValue: 'Active'
      },
      abbreviation_en: {
        type: Sequelize.STRING
      },
      abbreviation_fr: {
        type: Sequelize.STRING
      },
      picklist_en: {
        type: Sequelize.STRING
      },
      picklist_fr: {
        type: Sequelize.STRING
      },
      display_terms_en: {
        type: Sequelize.STRING
      },
      display_terms_fr: {
        type: Sequelize.STRING
      },
      prevalence: {
        type: Sequelize.INTEGER
      },
      ontario_ispa_vaccine: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    return queryInterface.dropTable('GenericVaccines');
  }
};
