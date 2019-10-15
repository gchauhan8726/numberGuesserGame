let min = 1,
max = 10,
winningNum = getRandomNumber(min, max),
guessLeft = 3;

const game = document.querySelector('#game'),
    minimum = document.querySelector('.min-num'),
    maximum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input')
    message = document.querySelector('.message');

minimum.textContent = min;
maximum.textContent = max;
guessBtn.addEventListener('click', guessInputValue);

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

function guessInputValue(e) {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`Congratulations you have entered the correct number: ${guess}.`, 'green')
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
    }
    else{
        guessLeft -= 1;
        guessInput.style.borderColor = 'red';
        setMessage(`${guessLeft} guesses left.`, 'red');
        if (guessLeft === 0) {
            guessInput.disabled = true;
            setMessage(`You Lost!, the correct number was : ${winningNum}`, 'red');
            guessBtn.value = 'Play Again';
            guessBtn.className += 'play-again';
        }
        else{
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessLeft} guesses left, try again!`, 'red');
        }
    }

}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

console.log();
function getRandomNumber(min, max) {
    return Math.floor((Math.random()) * (max - min + 1) + min);
}
