import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
refs.startBtn.addEventListener('click', changeBodyColor);
refs.stopBtn.addEventListener('click', stopChangeBodyColor);

refs.stopBtn.setAttribute('disabled', 'true');
let intervalId = null;

function getRandomHexColor() {
  return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  intervalId = setInterval(getRandomHexColor, 1000);
  refs.startBtn.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled', 'true');
}

function stopChangeBodyColor() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled', 'true');
  refs.stopBtn.setAttribute('disabled', 'true');
}