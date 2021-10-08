'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      itemname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      itempartnum: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      itemsid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      },
      number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      promiseddate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      priority: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
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
      modelName: 'Orders',
      freezeTableName: true,
    },
  );
  return Orders;
};
