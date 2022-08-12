const gameRouter = require('express').Router();

const Category = require('../views/components/Category.jsx');
const {Topic} = require('../db/models')
const {User} = require('../db/models')


gameRouter.get('/', async (req, res) => {
    const arrCategories = await Topic.findAll({
      raw: true,
      atttibutes: ['topic'],   
    })

    const {name} = req.body;
    const userName = await User.findOne({where: {name}});
    if (!userName) {
      await User.create({
        name,
        score: 0,
        })  
    }
    

    console.log(arrCategories);
    console.log(userName);
  
    res.renderComponent(Category, {arrCategories})
})


module.exports = gameRouter;