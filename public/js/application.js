// const React = require('react');
// const { startGame } = document;
// if(startGame) {
//   startGame.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const url = event.target.action;
//     const userName = event.target.name.value;
//     const { method } = event.target;
    
//     const response = await fetch(url, {
//       method,
//       body: JSON.stringify({ userName }),
//       headers: { 'Content-Type': 'application/json' },
//     });
    
//     const html = await response.text();
//   })
//   console.log(startGame);
// }

document.querySelectorAll('.topic').forEach((topic) => {
  topic.addEventListener('click', async (event2) => {
    const id = event2.target.id;
    console.log(id);
    const response = await fetch(`/game/${topic.id}`, {
      method: 'POST',
      body: JSON.stringify({id}),
      headers: { 'Content-Type': 'application/json' },
    });
    await response.text();  
  })
})

