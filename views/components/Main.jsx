const React = require("react");
const Layout = require("../Layout");

const Main = () => {
  return (
    <Layout>
      <div className="container">
        <div className="container_title">
          <h1 className="title">Quiz game</h1>
        </div>
        <form action="/game" method="POST" name="startGame">
          <label htmlFor="i1">Enter your name</label>
          <input type="text" id="i1" />
          <button type="submit">enter</button>
        </form>
        <div className="test">
          <input type="checkbox" className="btn-toggle" />
          <span>Dark mode</span>
        </div>
      </div>
    </Layout>
  );
};

module.exports = Main;
