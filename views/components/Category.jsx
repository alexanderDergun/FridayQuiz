const React = require("react");
const Layout = require("../Layout");

const Category = ({ arrCategories, name }) => {
  return (
    <Layout>
      <div className="greeting">Привет, {name}</div>
      <div className="topic-box" >
        {arrCategories.map((el) => (
          <form action={`/game/${el.id}`} method="POST" className="topic">
          <a  className="link" id={el.id} href="#" key={el.id}>
            {el.topic}
          </a>
          </form>
        ))}
        <a href="/" className="btn btn2">
          это временная кнопка бро
        </a>
      </div>
    </Layout>
  );
};
// 
module.exports = Category;
