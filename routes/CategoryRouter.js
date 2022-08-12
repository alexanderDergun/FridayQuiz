const categoryRouter = require('express').Router();

const Category = require('../views/components/Category.jsx');
const {Topic} = require('../db/models')
const {User} = require('../db/models');
const { response } = require('express');


categoryRouter.post('/', async (req, res) => {
    const arrCategories = await Topic.findAll({
      raw: true,
      atttibutes: ['topic'],   
    })

    const {name} = req.body;
    console.log(name);
    const currentName = await User.findOne({where: {name}});
    if (!currentName) {
      await User.create({
        name,
        score: 0,
        })  
    }
 
  
    res.renderComponent(Category, {arrCategories, name})
})


module.exports = categoryRouter;