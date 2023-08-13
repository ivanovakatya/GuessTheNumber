'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guessNum) {
      displayMessage('⛔️ No number!');
    } else if (guessNum === secretNumber) {
      displayMessage('🎉 You guessed the number!');
      setBodyColor('#60b347');
      displayNumber(secretNumber);
      styleNumber('30rem');
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highScore').textContent = highScore;
      }
    } else if (guessNum !== secretNumber) {
      displayMessage(
        guessNum > secretNumber
          ? '📈 You guess is too high!'
          : '📉 You guess is too low!'
      );
      score--;
      setScore(score);
    }
  } else {
    displayMessage('😔 You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  setScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  setBodyColor('#222');
  styleNumber('15rem');
});

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

let styleNumber = function (style) {
  document.querySelector('.number').style.width = style;
};

let setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let setBodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
