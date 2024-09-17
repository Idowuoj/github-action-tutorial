// game.js
function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumber(secretNumber, userGuess) {
      if (userGuess < secretNumber) {
            return "Too low!";
      } else if (userGuess > secretNumber) {
            return "Too high!";
      } else {
            return "Correct!";
      }
}

module.exports = { generateRandomNumber, guessNumber };