module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable('DiseaseAntigens', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      DiseaseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Diseases',
          key: 'id'
        }
      },
      AntigenId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Antigens',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('DiseaseAntigens', ['DiseaseId']);
    await queryInterface.addIndex('DiseaseAntigens', ['AntigenId']);
    return queryInterface.addIndex('DiseaseAntigens', ['AntigenId', 'DiseaseId'], {
      indicesType: 'UNIQUE'
    });
  },
  down: async function(queryInterface) {
    return queryInterface.dropTable('DiseaseAntigens');
  }
};
