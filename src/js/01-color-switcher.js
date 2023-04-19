const body = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;
let isThemeChanging = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

body.style.backgroundColor = getRandomHexColor();

startBtn.addEventListener("click", () => {
    if (isThemeChanging) {
        return;
    }
    isThemeChanging = true;
    
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
    isThemeChanging = false;
    clearInterval(timerId);
});
