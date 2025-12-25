// Generate random DISCO RGB color
const randomDiscoColor = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

let intervalId = null;

// Change background color
function changeBgColor() {
    document.body.style.background = randomDiscoColor();
}

// START button logic
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 120); // DJ speed 
    }
};

// STOP button logic
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

// Button event listeners
document.querySelector('.start').addEventListener('click', startChangingColor);
document.querySelector('.stop').addEventListener('click', stopChangingColor);
