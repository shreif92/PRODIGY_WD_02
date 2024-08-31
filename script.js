// script.js
let timer;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

function formatTime(ms) {
    const date = new Date(ms);
    return date.toISOString().substr(11, 8);
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            elapsedTime += 100;
            updateDisplay();
        }, 100);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    lapsContainer.innerHTML = '';
}

function addLap() {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.textContent = formatTime(elapsedTime);
        lapsContainer.appendChild(lapTime);
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', addLap);
