let bodyHeight = window.innerHeight;
let bodyWidth = window.innerWidth;

const body = document.querySelector("body");

body.style.height = `${bodyHeight}px`;
body.style.width = `${bodyWidth}px`;

window.addEventListener("resize", (e) => {
  body.style.height = `${bodyHeight}px`;
  body.style.width = `${bodyWidth}px`;
});