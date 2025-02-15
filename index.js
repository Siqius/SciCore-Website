let bodyHeight = window.innerHeight;
let bodyWidth = window.innerWidth;

const body = document.querySelector("body");

window.innerHeight = `${bodyHeight}px`;
window.innerWidth = `${bodyWidth}px`;

window.addEventListener("resize", (e) => {
  window.innerHeight = `${bodyHeight}px`;
  window.innerWidth = `${bodyWidth}px`;
  // body.style.height = `${bodyHeight}px`;
  // body.style.width = `${bodyWidth}px`;
});