require("@babel/register");
const app = require("express")();
const chalk = require("chalk");
const config = require("./config/config");

const mainRouter = require('./routes/MainRouter');
const categoryRouter = require('./routes/CategoryRouter');
const gameRouter = require('./routes/GameRouter');


config(app);

const PORT = process.env.PORT ?? 3000;

app.use('/', mainRouter);
app.use('/game', categoryRouter);
app.use('/:id', gameRouter);

app.listen(PORT, () => console.log(chalk.bgBlue(" Здарова братик! ")));
