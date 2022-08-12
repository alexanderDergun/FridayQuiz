const React = require("react");
const Layout = require("../Layout");

const Main = () => {
  return (
    <Layout>
      <div className="container">
        <form action="/game" method="POST" name="startGame">
          <label htmlFor="i1">Введи своё имя, бро</label>
          <input type="text" id="i1" name ="name"/>
          <button type="submit" className="btn">
            клик
          </button>
        </form>
      </div>
    </Layout>
  );
};

module.exports = Main;
