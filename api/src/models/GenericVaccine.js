const { Model, DataTypes } = require('sequelize');

const attrs = {
  concept_code: DataTypes.STRING,
  concept_name: DataTypes.STRING,
  display_name_en: DataTypes.STRING,
  display_name_fr: DataTypes.STRING,
  concept_effective_date: DataTypes.DATE,
  concept_status: DataTypes.ENUM('Active', 'Inactive'),
  abbreviation_en: DataTypes.STRING,
  abbreviation_fr: DataTypes.STRING,
  picklist_en: DataTypes.STRING,
  picklist_fr: DataTypes.STRING,
  display_terms_en: DataTypes.STRING,
  display_terms_fr: DataTypes.STRING,
  prevalence: DataTypes.INTEGER,
  ontario_ispa_vaccine: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
};

class GenericVaccine extends Model {
  static associate(models) {
    this.hasMany(models.TradenameVaccine);
  }

  get json() {
    return {
      generic_vaccine: {
        id: this.id,
        concept_code: this.concept_code,
        concept_name: this.concept_name,
        display_name_en: this.display_name_en,
        display_name_fr: this.display_name_fr,
        concept_effective_date: this.concept_effective_date,
        concept_status: this.concept_status,
        abbreviation_en: this.abbreviation_en,
        abbreviation_fr: this.abbreviation_fr,
        picklist_en: this.picklist_en,
        picklist_fr: this.picklist_fr,
        display_terms_en: this.display_terms_en,
        display_terms_fr: this.display_terms_fr,
        prevalence: this.prevalence,
        ontario_ispa_vaccine: this.ontario_ispa_vaccine
      }
    };
  }
}

module.exports = (sequelize) => {
  GenericVaccine.init(attrs, { sequelize });
  return GenericVaccine;
};
