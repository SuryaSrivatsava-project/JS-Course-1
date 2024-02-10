const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.body;
let clear;
function changeBackground() {
  const color1 = Math.round(Math.random() * 256);
  const color2 = Math.round(Math.random() * 256);
  const color3 = Math.round(Math.random() * 256);
  body.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
}
start.addEventListener('click', function () {
  clear = setInterval(changeBackground, 1000);
});
stop.addEventListener('click', function () {
  clearInterval(clear);
});
