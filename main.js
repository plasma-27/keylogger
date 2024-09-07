let intervalId;
let currentLetterIndex = 0;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let intervalSpeed = 50; // Default speed

function iterateLetters() {
    clearInterval(intervalId); 
    intervalId = setInterval(() => {
        const letterElement = document.getElementById('letter');
        const randomColor = getRandomColor();
        letterElement.innerText = letters[currentLetterIndex];
        letterElement.style.color = randomColor; 
        currentLetterIndex = (currentLetterIndex + 1) % letters.length;
    }, intervalSpeed);
}


document.addEventListener('keydown', function(event) {
    clearInterval(intervalId); 

    const pressed = event.key.toUpperCase();
    const word = document.getElementById('user-letter');
    word.innerText = `You pressed: ${pressed}`;

    const letterElement = document.getElementById('letter');
    if (pressed === letterElement.innerText) {
      
        word.innerText = `Congrats! You caught the letter`;
    }
});

const speedSlider = document.getElementById('speed-slider');
const speedValueDisplay = document.getElementById('speed-value');

speedSlider.addEventListener('input', function() {
    intervalSpeed = speedSlider.value;
    speedValueDisplay.innerText = intervalSpeed;
    iterateLetters(); 
});

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', function() {
    currentLetterIndex = 0; 
    document.getElementById('user-letter').innerText = 'Catch any Key!'; 
    iterateLetters(); 
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = iterateLetters;
