'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Menu extends Model {
    static associate(models) {}
  }
  Menu.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    dish_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Menu',
    tableName: 'menu',
    timestamps: true,
    underscored: true 
  });
  return Menu;
};
