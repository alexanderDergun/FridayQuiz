const mainRouter = require('express').Router();

const Main = require('../views/components/Main.jsx');


mainRouter.get('/', (req, res) => {
    res.renderComponent(Main)
})


module.exports = mainRouter;
