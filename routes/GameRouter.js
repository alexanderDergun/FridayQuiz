const gameRouter = require('express').Router();

const Category = require('../views/components/Category.jsx');
const {Topic} = require('../db/models')

gameRouter.get('/', async (req, res) => {
    const arrCategories = await Topic.findAll({
    raw: true,
    atttibutes: ['topic'],   
    })

  console.log(arrCategories);
    res.renderComponent(Category, {arrCategories})
})


module.exports = gameRouter;