module.exports = {
  up: async function (queryInterface, Sequelize) {
   await queryInterface.createTable('Lots', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      TradenameVaccineId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TradenameVaccines',
          key: 'id'
        }
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        }
      },
      concept_code: {
        type: Sequelize.STRING
      },
      lot_number: {
        type: Sequelize.STRING
      },
      tradename_picklist_en: {
        type: Sequelize.STRING
      },
      din: {
        type: Sequelize.INTEGER
      },
      review_date: {
        type: Sequelize.DATE
      },
      expiry_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('Lots', ['TradenameVaccineId']);
    await queryInterface.addIndex('Lots', ['ProductId']);
  },
  down: async function(queryInterface) {
    return queryInterface.dropTable('Lots');
  }
};
