'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class playerdb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  playerdb.init({
    id: {
      type:DataTypes.UUID,
    primaryKey:true,defaultValue:uuidv4},
    playerName: DataTypes.STRING,
    playerAge: DataTypes.INTEGER,
    playerCountry: DataTypes.STRING,
    playerWages: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'playerdb',
  });
  return playerdb;
};