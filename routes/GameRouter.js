const gameRouter = require('express').Router();

const Game = require('../views/components/Game');
const {Question, Tq, Topic} = require('../db/models')


gameRouter.post('/:id', async(req, res) => {
    const {id }= req.params;
    const topics = await Topic.findAll({
        raw:true,
        where:{id},
        include: [{
            model: Question,
        }],
        attributes: ['Questions.question', 'Questions.var1', 'Questions.var2', 'Questions.var3', 'Questions.var4', 'Questions.id'],
    });
    res.renderComponent(Game, {topics})
})


module.exports = gameRouter;