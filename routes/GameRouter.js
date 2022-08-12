const gameRouter = require('express').Router();

const Game = require('../views/components/Game.jsx');
const {Question} = require('../db/models')


gameRouter.get('/', (req, res) => {
    const {id} = req.query;
    const topic_id = Question.findAll({
        include: topic_id

    })


    res.renderComponent(Game)
})


module.exports = gameRouter;