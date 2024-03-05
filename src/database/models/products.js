'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo( models.category, {
        as: "category",
        foreignKey: "categoryId",
      }); 
      products.belongsTo( models.sections, {
        as: "section",
        foreignKey: "setionId",
      }); 
      products.hasMany(models.images, {
        as: 'images',
        foreignKey : 'productsId'
      });
      products.belongsTo( models.colors, {
        as: "colors",
        foreignKey: "colorsId",
      }); 
      products.belongsTo( models.sizes, {
        as: "sizes",
        foreignKey: "sizesId",
      }); 
    }
  }
  products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    descount: DataTypes.INTEGER,
    image: DataTypes.STRING,
    colorsId: DataTypes.INTEGER,
    sizesId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    setionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};