'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Infoorders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Infoorders.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      employeesid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Employees',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      },
      ordersid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      },
      quantitycomplete: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      quantitydefect: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'Created',
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: 'Infoorders',
    freezeTableName: true,
  }
  );
  return Infoorders;
};