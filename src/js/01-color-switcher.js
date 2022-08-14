import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
refs.startBtn.addEventListener('click', changeBodyColor);
// refs.stopBtn.addEventListener('click',);

function getRandomHexColor() {
  return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor(color) {
  setInterval(getRandomHexColor, 1000);
}
// setInterval(getRandomHexColor(), 1000)
// function start