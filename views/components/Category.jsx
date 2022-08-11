const React = require("react");
const Layout = require("../Layout");

const Category = ({ arrCategories }) => {
  return (
    <Layout>
      <div className="topic-box">
        {/* <ul> */}
        {arrCategories.map((el) => (
          // <li key={el.id}>
          //   <a href={`${el.id}`}>{el.topic}</a>
          // </li>
          <a className="topic" href={`${el.id}`} key={el.id}>
            {el.topic}
          </a>
        ))}
        {/* </ul> */}
        <button>
          <a href="/" className="btn">
            это временная кнопка бро
          </a>
        </button>
      </div>
    </Layout>
  );
};

module.exports = Category;
