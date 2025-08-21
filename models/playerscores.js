'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class playerscores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  playerscores.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      defaultValue:uuidv4
    },
    goals: DataTypes.INTEGER,
    assist: DataTypes.INTEGER,
    redCard: DataTypes.INTEGER,
    yellowCard: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'playerscores',
  });
  return playerscores;
};