'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tq extends Model {
    static associate(models) {
    }
  }

  const attributes =  {
    topic_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'Topics',
        key: 'id',
      },
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'Questions',
        key: 'id',
      },
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  };
  const options = {
    sequelize,
    modelName: 'Tq',
    tableName: 'Tqs',
  };

  Tq.init(attributes, options);
  return Tq;
};