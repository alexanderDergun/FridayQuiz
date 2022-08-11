const React = require("react");
const Layout = require("../Layout");

const Category = ({ arrCategories }) => {
  return (
    <Layout>
      <div className="topic-box">
        {arrCategories.map((el) => (
          <a className="topic" href={`${el.id}`} key={el.id}>
            {el.topic}
          </a>
        ))}

        <a href="/" className="btn btn2">
          это временная кнопка бро
        </a>
      </div>
    </Layout>
  );
};

module.exports = Category;
