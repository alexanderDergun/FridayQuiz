'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({  Question, Tq }) {
      Topic.question = Topic.belongsToMany(Question, {
        through: Tq,
        foreignKey: 'topic_id',
        otherKey: 'question_id',
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
    topic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  };

  const options = {
    sequelize,
    modelName: 'Topic',
    tableName: 'Topics',
  }
  
  Topic.init(attributes, options);
  return Topic;
};
