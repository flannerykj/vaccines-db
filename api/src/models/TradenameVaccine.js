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
  provider_list_prevalence: DataTypes.INTEGER,
  generic_parent_concept_code: DataTypes.STRING,
  ontario_clinician_friendly_tradename_en: DataTypes.STRING,
  tradename_preferred_term_en: DataTypes.STRING,
  tradename_icon_public_en: DataTypes.STRING,
  typical_dose_amount: DataTypes.INTEGER,
  dose_unit_of_measurement: DataTypes.STRING,
  strength: DataTypes.STRING,
  route: DataTypes.STRING,
  ontario_manufacturer_abbreviation: DataTypes.STRING,
  ontario_ispa_vaccine: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
};

class TradenameVaccine extends Model {
  static associate(models) {
    this.belongsToMany(models.Antigen, { through: 'TradenameVaccineAntigens' });
    this.belongsToMany(models.Product, { through: 'Lots', foreignKey: 'concept_code', references: 'concept_code' });
  }

  get json() {
    return {
      tradename_vaccine: {
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
        provider_list_prevalence: this.provider_list_prevalence,
        generic_parent_concept_code: this.generic_parent_concept_code,
        ontario_clinician_friendly_tradename_en: this.ontario_clinician_friendly_tradename_en,
        tradename_preferred_term_en: this.tradename_preferred_term_en,
        tradename_icon_public_en: this.tradename_icon_public_en,
        typical_dose_amount: this.typical_dose_amount,
        dose_unit_of_measurement: this.dose_unit_of_measurement,
        strength: this.strength,
        route: this.route,
        ontario_manufacturer_abbreviation: this.ontario_manufacturer_abbreviation,
        ontario_ispa_vaccine: this.ontthis.ontario_ispa_vaccine
      }
    };
  }
}

module.exports = (sequelize) => {
  TradenameVaccine.init(attrs, { sequelize });
  return TradenameVaccine;
};
