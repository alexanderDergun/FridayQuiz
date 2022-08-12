const React = require("react");
const Layout = require("../Layout");
const Question = require('./Question');

function Game ({topics}) {
  console.log(topics);
  return (
    <Layout>
      <div className="game">
          {topics.map((prop) => (<Question key={prop.id} topic={prop}/>))}
      </div>
    </Layout>
  );
};

module.exports = Game;
