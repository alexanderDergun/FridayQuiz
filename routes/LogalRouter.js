const logalRouter = require('express').Router();
const { User } = require('../db/models')

const Category = require('../views/components/Category.jsx');


logalRouter.post('/game', async (req, res) => {
    const {name} = req.body;
    const userName = await User.findOne({where: {name}});

    if (!userName) {
      await User.create({
        name,
        score: 0,
        })  
    }

})


module.exports = logalRouter;
