const gameRouter = require('express').Router();

const Category = require('../views/components/Category.jsx');
const {Topic} = require('../db/models')
const {User} = require('../db/models');
const { response } = require('express');


gameRouter.post('/', async (req, res) => {
    const arrCategories = await Topic.findAll({
      raw: true,
      atttibutes: ['topic'],   
    })

    const {name} = req.body;
    const currentName = await User.findOne({where: {name}});
    if (!currentName) {
      await User.create({
        name,
        score: 0,
        })  
    }
    

    console.log(arrCategories);
    console.log(name);
  
    res.renderComponent(Category, {arrCategories, name})
})


module.exports = gameRouter;