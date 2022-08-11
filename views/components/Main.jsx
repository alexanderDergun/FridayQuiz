const React = require("react");
const Layout = require("../Layout");

const Main = () => {
  return (
    <Layout>
      <form action="/game" method="get" name="startGame">
        <label htmlFor="i1"></label>
        <input type="text" id="i1" />
        <button type="submit">enter</button>
      </form>
      <div className="test">
        <button className="btn-toggle">Dark mode</button>
      </div>
    </Layout>
  );
};

module.exports = Main;
