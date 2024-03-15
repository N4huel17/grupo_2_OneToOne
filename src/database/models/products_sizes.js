'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_sizes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products_sizes.init({
    sizesId: DataTypes.INTEGER,
    productsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products_sizes',
  });
  return products_sizes;
};