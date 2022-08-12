const React = require('react');
const { startGame } = document;

startGame.addEventListener('submit', async (event) => {
  const url = event.target.action;
  const userName = event.target.name.value;
  const { method } = event.target;

  const response = await fetch(url, {
    method,
    body: JSON.stringify({ userName }),
    headers: { 'Content-Type': 'application/json' },
  });

  const html = await response.text();
})