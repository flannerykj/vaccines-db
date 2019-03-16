
module.exports = {
  up: async function (queryInterface, Sequelize) {
   await queryInterface.createTable('TradenameVaccineAntigens', {
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
        },
        onDelete: 'CASCADE'
      },
      AntigenId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Antigens',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('TradenameVaccineAntigens', ['TradenameVaccineId']);
    await queryInterface.addIndex('TradenameVaccineAntigens', ['AntigenId']);
    return queryInterface.addIndex('TradenameVaccineAntigens', ['AntigenId', 'TradenameVaccineId'], {
      indicesType: 'UNIQUE'
    });
  },
  down: async function(queryInterface) {
    return queryInterface.dropTable('TradenameVaccineAntigens');
  }
};
