const React = require("react");
const Layout = require("../Layout");

const Main = () => {
  return (
    <Layout>
      <div className="container">
        <form action="/game" method="GET" name="startGame">
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
