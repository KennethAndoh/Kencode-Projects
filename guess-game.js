var randomNumber = Math.floor(Math.random() * 10)
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

guessField.focus()

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous Guesses: ';
    }
    guesses.textContent += userGuess + '';
    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulation! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver() 
    }   else if(guessCount === 5) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHigh.textContent = '';
        setGameOver();
    }   else {
        lastResult.textContent = 'Wrong!';

        if(userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last guess was too low!';
        }   else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'Last guess was too high!';
        }

        lastResult.backgroundColor = 'red';
    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
}


guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again!';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCounter = 1;
    
    var resetParas = document.querySelector('.resultParas p');
    for(var i = 0; i < resetParas.length; i++); {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 10) + 1;
}
