const React = require("react");
const Layout = require("../Layout");

const Game = ({ props }) => {
  return (
    <Layout>
      <div className="game">
        <div className="game_title">{props.question}</div>
        <div className="questions_box">
          {props.map((el) => (
            <div className="question">{el.var}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

module.exports = Game;
