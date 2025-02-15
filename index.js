let bodyHeight = window.innerHeight;
let bodyWidth = window.innerWidth;

const body = document.querySelector("body");

window.addEventListener("resize", (e) => {
  body.style.height = bodyHeight;
  body.style.width = bodyWidth;
  e.preventDefault();
});