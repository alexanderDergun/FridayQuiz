const React = require("react");

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style/style.css" />
        <script defer src="/js/application.js"></script>
        <script defer src="/js/theme.js"></script>
        <script defer src="/js/index.js"></script>
        <title>FridayQuiz!</title>
      </head>
      <body>
        <div className="wrapper">
          <div className="controls">
            <input type="checkbox" className="btn-toggle" />
            <span>кек</span>
          </div>
          <div className="container_title">
            <h1 className="title">Quiz game</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
};

module.exports = Layout;
