const React = require("react");
const Layout = require("../Layout");

const Category = ({ props }) => {
  return (
    <Layout>
      <ul>
        {props.map((el) => (
          <li key={el.id}>
            <a href={`${el.id}`}>{el.topic}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

module.exports = Category;
