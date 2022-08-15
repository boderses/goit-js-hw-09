function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
    bodyElement: document.body, 
}

refs.startBtn.addEventListener('click', onChangeColor);
refs.stopBtn.addEventListener('click', onFreezColor);

let timerId = null;
let startBtnIsDisable = false;

function onChangeColor() {
    if (startBtnIsDisable === false) {
        timerId = setInterval(() => {
            refs.bodyElement.style.background = getRandomHexColor();
            startBtnIsDisable = true;
        }, 1000);
    }
}

function onFreezColor() {
    clearInterval(timerId);
    startBtnIsDisable = false;
}

