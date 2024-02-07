let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const form = document.querySelector('form');
const guessField = document.querySelector('.guessField');
const submitGuess = document.querySelector('.guessSubmit');
const previousGuesses = document.querySelector('.guesses');
const RemainingGuesses = document.querySelector('.lastResult');

const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitGuess.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(guessField.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
//2:58:54 timestamp
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame(guess);
  } else if (guess < randomNumber) {
    if (parseInt(RemainingGuesses.textContent) != 0) {
      displayMessage(`Number is too low!`);
    } else {
      displayMessage(`Game Over! Number is ${randomNumber}`);
      endGame();
    }
  } else if (guess > randomNumber) {
    if (parseInt(RemainingGuesses.textContent) != 0) {
      displayMessage(`Number is too high!`);
    } else {
      displayMessage(`Game Over! Number is ${randomNumber}`);
      endGame();
    }
  }
}

function displayGuess(guess) {
  guessField.value = '';
  prevGuess.length == 1
    ? (previousGuesses.innerHTML += `${guess}`)
    : (previousGuesses.innerHTML += `, ${guess}`);

  RemainingGuesses.innerHTML = `${10 - numGuess}`;
  numGuess++;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  guessField.value = '';
  guessField.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newButton = document.querySelector('#newGame');
  newButton.addEventListener('click', (e) => {
    guessField.removeAttribute('disabled');
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess.length = 0;
    previousGuesses.innerHTML = ``;
    numGuess = 1;
    RemainingGuesses.innerHTML = `10`;
    lowOrHi.innerHTML = ``;
    playGame = true;
  });
}
