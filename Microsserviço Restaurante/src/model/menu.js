const { DataTypes, Sequelize } = require('sequelize');
const db = require('../data/database');

const menu = db.define('cardapio_restaurante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dish_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING(400),
        allowNull: true,
    },
    value: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    }
    }, 
    {
        tableName: 'cardapio_restaurante',
        timestamps: false // Desativa timestamps
    });

module.exports = menu;
