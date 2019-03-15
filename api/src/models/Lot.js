const { Model, DataTypes } = require('sequelize');

const attrs = {
  TradenameVaccineId: DataTypes.INTEGER,
  ProductId: DataTypes.INTEGER,
  concept_code: DataTypes.STRING,
  lot_number: DataTypes.STRING,
  tradename_picklist_en: DataTypes.STRING,
  din: DataTypes.INTEGER,
  review_date: DataTypes.DATE,
  expiry_date: DataTypes.DATE
};

class Lot extends Model {
  static associate(models) {
    // this.belongsTo(models.ProviderInvoice);
  }

  get json() {
    return {
      lot: {
        id: this.id,
        concept_code: this.concept_code,
        lot_number: this.lot_number,
        tradename_picklist_en: this.tradename_picklist_en,
        din: this.din,
        review_date: this.review_date,
        expiry_date: this.expiry_date
      }
    };
  }
}

module.exports = (sequelize) => {
  Lot.init(attrs, { sequelize });
  return Lot;
};
