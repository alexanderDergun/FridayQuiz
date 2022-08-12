const React = require("react");
const Game = require("./Game");

const Question = ({topic}) => {
  return (
    <>
        <div className="game-title">{topic.question}</div>
        <div className="questions-box">
            <div className="question">{topic.var1}</div>
            <div className="question">{topic.var2}</div>
            <div className="question">{topic.var3}</div>
            <div className="question">{topic.var4}</div>
        </div>
    </>
  );
};

module.exports = Question;