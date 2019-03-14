const { Model, DataTypes } = require('sequelize');

const attrs = {
  concept_code: DataTypes.STRING,
  concept_name: DataTypes.STRING,
  display_name_en: DataTypes.STRING,
  display_name_fr: DataTypes.STRING,
  concept_effective_date: DataTypes.DATE,
  concept_status: DataTypes.ENUM('Active', 'Inactive'),
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
};

class Antigen extends Model {
  static associate(models) {
    // this.belongsTo(models.ProviderInvoice);
  }

  get json() {
    return {
      antigen: {
        id: this.id,
        concept_code: this.concept_code,
        concept_name: this.concept_name,
        display_name_en: this.display_name_en,
        display_name_fr: this.display_name_fr,
        concept_effective_date: this.concept_effective_date,
        concept_status: this.concept_status
      }
    };
  }
}

module.exports = (sequelize) => {
  Antigen.init(attrs, { sequelize });
  return Antigen;
};
