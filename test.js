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