const { Model, DataTypes } = require('sequelize');

const attrs = {
  concept_code: DataTypes.STRING,
  concept_name: DataTypes.STRING,
  concept_status: DataTypes.ENUM('Active', 'Inactive'),
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
};

class Product extends Model {
  static associate(models) {
    // this.belongsTo(models.ProviderInvoice);
  }

  get json() {
    return {
      product: {
        id: this.id,
        concept_code: this.concept_code,
        concept_name: this.concept_name,
        concept_status: this.concept_status
      }
    };
  }
}

module.exports = (sequelize) => {
  Product.init(attrs, { sequelize });
  return Product;
};
