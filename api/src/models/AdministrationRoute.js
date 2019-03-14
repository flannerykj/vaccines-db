const { Model, DataTypes } = require('sequelize');

const attrs = {
  concept_code: DataTypes.STRING,
  concept_name: DataTypes.STRING,
  display_name_en: DataTypes.STRING,
  display_name_fr: DataTypes.STRING,
  definition: DataTypes.TEXT,
  abbreviation: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
};

class AdministrationRoute extends Model {
  static associate(models) {
    // this.belongsTo(models.ProviderInvoice);
  }

  get json() {
    return {
      route: {
        id: this.id,
        concept_code: this.concept_code,
        concept_name: this.concept_name,
        display_name_en: this.display_name_en,
        display_name_fr: this.display_name_fr,
        definition: this.definition,
        abbreviation: this.abbreviation
      }
    };
  }
}

module.exports = (sequelize) => {
  AdministrationRoute.init(attrs, { sequelize });
  return AdministrationRoute;
};
