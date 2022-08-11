require("@babel/register");
const app = require("express")();
const chalk = require("chalk");
const config = require("./config/config");

config(app);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log(chalk.bgBlue(" Здарова братик! ")));
