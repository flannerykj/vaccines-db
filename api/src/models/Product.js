const { Model, DataTypes } = require('sequelize');

const attrs = {
  concept_code: DataTypes.STRING,
  din: DataTypes.INTEGER,
  brand_name: DataTypes.STRING,
  company_name: DataTypes.STRING,
  atc_number: DataTypes.STRING,
  concept_status: DataTypes.ENUM('Cancelled Post Market', 'Marketed', 'Dormant', 'Approved'),
  history_date: DataTypes.DATE,
  original_market_date: DataTypes.DATE
};

class Product extends Model {
  static associate(models) {
    this.belongsToMany(models.TradenameVaccine, { through: 'Lots' });
  }

  get json() {
    return {
      product: {
        id: this.id,
        concept_code: this.concept_code,
        din: this.din,
        brand_name: this.brand_name,
        company_name: this.company_name,
        atc_number: this.atc_number,
        concept_status: this.concept_status,
        history_date: this.history_date,
        original_market_date: this.original_market_date
      }
    };
  }
}

module.exports = (sequelize) => {
  Product.init(attrs, { sequelize });
  return Product;
};
