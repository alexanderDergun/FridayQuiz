'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Question extends Model {
    static associate({ Topic, Tq }) {
    Question.topic = Question.belongsToMany(Topic, {
        through: Tq,
        foreignKey: 'question_id',
        otherKey: 'topic_id',
      });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    var1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    var2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    var3: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    var4: {
      type: DataTypes.TEXT,
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
    modelName: 'Question',
    tableName: 'Questions',
  }
  Question.init(attributes, options);
  return Question;
};