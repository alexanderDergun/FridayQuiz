const React = require('react');
const { startGame } = document;

startGame.addEventListener('sumbit', async (event) => {
  const url = event.target.action;
  const userName = event.target.name.value;

  const greetingDiv = document.querySelector('.greeting');
  greetingDiv.innerHTML = userName;
})