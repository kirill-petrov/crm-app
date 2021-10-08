'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workcenters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workcenters.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      code: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      capacity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Workcenters',
      freezeTableName: true,
    },
  );
  return Workcenters;
};
