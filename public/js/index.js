const checkbox = new Audio("../sound/schelchok.mp3");
const btnToggle = document.querySelector(".btn-toggle");
btnToggle.addEventListener("click", () => {
  checkbox.play();
});
