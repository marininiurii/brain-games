import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRandomDigit = 1;
const maxRandomDigit = 100;

const getGCD = (digitOne, digitTwo) => {
  let firstDigit = digitOne;
  let secondDigit = digitTwo;
  while (firstDigit !== 0 && secondDigit !== 0) {
    if (firstDigit > secondDigit) {
      firstDigit %= secondDigit;
    } else {
      secondDigit %= firstDigit;
    }
  }
  return firstDigit + secondDigit;
};

const runGcdGame = () => {
  const digitOne = getRandom(minRandomDigit, maxRandomDigit);
  const digitTwo = getRandom(minRandomDigit, maxRandomDigit);
  const expression = `${digitOne} ${digitTwo}`;
  const expressionCheck = getGCD(digitOne, digitTwo);
  return [expression, expressionCheck.toString()];
};

export default () => runGamesLogic(description, runGcdGame);
