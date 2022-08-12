const checkbox = new Audio("../sound/schelchok.mp3");
const menu = new Audio("../sound/menu.mp3");
document.querySelector('input[type="checkbox"]').focus();
const btnToggle = document.querySelector(".btn-toggle");
btnToggle.addEventListener("click", () => {
  checkbox.play();
});
const topic = document.querySelectorAll(".topic");
topic.forEach((el) => {
  el.addEventListener("mouseenter", async () => {
    await menu.play();
    // console.log(1);
  });
});
