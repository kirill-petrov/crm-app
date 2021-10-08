'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employees.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      firstname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      jobtitle: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      workcenterid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Workcenters',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
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
      modelName: 'Employees',
      freezeTableName: true,
    },
  );
  return Employees;
};
