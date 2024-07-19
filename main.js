let intervalId;
let currentLetterIndex = 0;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function iterateLetters() {
    intervalId = setInterval(() => {
        const letterElement = document.getElementById('letter');
        const randomColor = getRandomColor();
        letterElement.innerText = letters[currentLetterIndex];
        letterElement.style.color = randomColor; 
        currentLetterIndex = (currentLetterIndex + 1) % letters.length;
    }, 50); 
}

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    clearInterval(intervalId); 

    const pressed = event.key.toUpperCase();
    const word = document.getElementById('user-letter');
    word.innerText = `You pressed: ${pressed}`;

    const letterElement = document.getElementById('letter');
    if (pressed === letterElement.innerText) {
        alert('You caught the letter!');
    }
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
