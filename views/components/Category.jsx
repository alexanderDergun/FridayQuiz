const React = require("react");
const Layout = require("../Layout");

const Category = ({ props }) => {
  return (
    <Layout>
      <ul>
        {props.map((el) => (
          <li key={props.id}>
            {" "}
            <a href="/">{props.topic}</a>{" "}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

module.exports = Category;
