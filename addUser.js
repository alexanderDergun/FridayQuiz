const { User } = require('./db/models');

async function countPoint(name){
  const currentUser = await User.findOne({ where: { name: name } })
  await currentUser.increment('score', { by:  10 });
} 

async function getAllUsers() {
  const range = await User.findAll({
    raw: true,
    order: [['score', 'DESC']],
    attributes: ['name', 'score'],
  })
  console.log(range)
};