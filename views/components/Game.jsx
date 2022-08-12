const React = require("react");
const Layout = require("../Layout");

const Game = () => {
  return (
    <Layout>
      <div className="game">
        <div className="game_title">question</div>
        <div className="questions_box">
          {/* {props.map((el) => (
            <div className="question">{props.question}</div>
          ))} */}
            <div className="question">var1</div>
            <div className="question">var2</div>
            <div className="question">var3</div>
            <div className="question">var4</div>


        </div>
      </div>
      <h1>kek</h1>
    </Layout>
  );
};

module.exports = Game;
