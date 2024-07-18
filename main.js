document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    const pressed = event.key;
    const word = document.getElementById('text');
    word.innerText = pressed;
    word.style.color = getRandomColor(); 
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
