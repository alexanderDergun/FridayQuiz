const React = require("react");
const Layout = require("../Layout");

const Main = () => {
  return (
    <Layout>
      <div className="container">
        <div className="container_title">
          <h1 className="title">Quiz game</h1>
        </div>
        <form action="/game" method="get" name="startGame">
          <label htmlFor="i1">Введи своё имя, бро</label>
          <input type="text" id="i1" />
          <button type="submit" className="btn">
            клик
          </button>
        </form>
      </div>
    </Layout>
  );
};

module.exports = Main;
