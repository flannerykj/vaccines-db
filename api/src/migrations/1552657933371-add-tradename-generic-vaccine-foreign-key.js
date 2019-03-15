

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('TradenameVaccines', 'GenericVaccineId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'GenericVaccines',
        key: 'id'
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropColumn('TradenameVaccines', 'GenericVaccineId');
  }
}
