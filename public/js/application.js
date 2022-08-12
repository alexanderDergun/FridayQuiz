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

// if(topixBox) {
const topics = document.querySelectorAll('.topic')
  // .forEach((topic) => {
  //   topic.addEventListener('click', async (event2) => {
  //     event2.preventDefault();

  //     const key = event2.target.topic.key;
  //     console.log(key);
  //     const response = await fetch('/game/:topic', {
  //       method: 'GET',
  //       body: JSON.stringify(key),
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     await response.text();
  //   })
  // })
  console.log(topics);
// };