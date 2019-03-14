/* eslint-disable */

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.createTable('TradenameVaccines', {
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
      provider_list_prevalence: {
        type: Sequelize.INTEGER
      },
      generic_parent_concept_code: {
        type: Sequelize.STRING
      },
      ontario_ispa_vaccine: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ontario_clinician_friendly_tradename_en: {
        type: Sequelize.STRING
      },
      tradename_preferred_term_en: {
        type: Sequelize.STRING
      },
      tradename_icon_public_en: {
        type: Sequelize.STRING
      },
      typical_dose_size: {
        type: Sequelize.INTEGER
      },
      dose_unit_of_measurement: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.STRING
      },
      route: {
        type: Sequelize.STRING
      },
      ontario_manufacturer_abbreviation: {
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
    return queryInterface.dropTable('TradenameVaccines');
  }
};
