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

// test.js
const { generateRandomNumber, guessNumber } = require('./game');

test('generateRandomNumber returns a number within the specified range', () => {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);
  expect(randomNumber).toBeGreaterThanOrEqual(min);
  expect(randomNumber).toBeLessThanOrEqual(max);
});

test('guessNumber returns correct message for low guess', () => {
  expect(guessNumber(50, 40)).toBe("Too low!");
});

test('guessNumber returns correct message for high guess', () => {
  expect(guessNumber(50, 60)).toBe("Too high!");
});

test('guessNumber returns correct message for correct guess', () => {
  expect(guessNumber(50, 50)).toBe("Correct!");
});

// package.json
{
  "name": "guess-the-number",
  "version": "1.0.0",
  "description": "A simple guess the number game",
  "main": "game.js",
  "scripts": {
    "test": "jest"
  },
  "dependencies": {},
  "devDependencies": {
    "jest": "^27.0.6"
  }
}

// .github/workflows/test.yml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14.x'
    - run: npm ci
    - run: npm test