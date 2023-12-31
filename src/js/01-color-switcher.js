function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body')
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

stopBtn.setAttribute('disabled', false)

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
  body.style.backgroundColor = getRandomHexColor();
    
  }, 1000);
  
  startBtn.setAttribute('disabled', false)
  if (timerId) {
    stopBtn.removeAttribute('disabled', false)
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId); 
  startBtn.removeAttribute('disabled', false)
  stopBtn.setAttribute('disabled', false)
});